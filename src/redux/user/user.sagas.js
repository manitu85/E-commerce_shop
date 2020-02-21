import { takeLatest, put, all, call } from 'redux-saga/effects'

import * as userActionTypes from './user.types'

import { 
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess, 
  signOutFail
} from './user.actions'


import { 
  auth, 
  goggleProvider, 
  getCurrentUser,
  createUserProfileDocument,
} from '../../firebase/firebase.utils'

// re-usable helper generator
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    )
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ 
      id: userSnapshot.id, 
      ...userSnapshot.data() 
    }))
  } catch (error) {
    yield put(signInFail(error))
  }
}

// ### SIGN IN|OUT & AUTH GENERATOR FUNCTIONS  ###################################

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(goggleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFail(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFail(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield put(signInFail(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFail(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFail(error))
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

// ### DELEGATE GENERATOR METHODS TO LISTENERS #############################

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUp() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

// Export user listeners to root saga
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUp),
    call(onSignUpSuccess)
  ])
}