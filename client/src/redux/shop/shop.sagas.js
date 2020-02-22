import { put, call, takeEvery, all } from "redux-saga/effects"
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import * as shopActionTypes from './shop.types'
import { fetchCollectionsSuccess, fetchCollectionsFail } from './shop.actions'

export function* fetchCollectionsAsyncSaga() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFail(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsyncSaga)
}

// Export shop functions for root saga
export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}

// export function* shopSagas() {
//   yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsyncSaga)
// }





