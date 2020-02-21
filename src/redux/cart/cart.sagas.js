import { takeLatest, put, all, call }  from 'redux-saga/effects'

import * as userActionTypes from '../user/user.types'
import { clearCart } from './cart.actions'


export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess () {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

// Export cat listeners to root saga
export function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ])
}
