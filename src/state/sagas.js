
import {call, fork, put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'

import {showLoading, hideLoading} from 'state/reducer'

export function* rootSaga () {
  yield fork(loginSaga)
  yield fork(editorSaga)
}

function* showHideLoader (saga) {
  yield put(showLoading())
  yield call(saga)
  yield put(hideLoading())
}

function* fakeApiCall () {
  yield delay(2000)
}

// @NOTE Would move these to their own files, import actions from the central
// actions and obviously have types setup so the reducer, sagas, and actions all
// import them for consistency.
export function* loginSaga () {
  yield takeEvery('LOAD_LOGIN', () => showHideLoader(fakeApiCall))
}

export function* editorSaga () {
  yield takeEvery('LOAD_EDITOR', () => showHideLoader(fakeApiCall))
}
