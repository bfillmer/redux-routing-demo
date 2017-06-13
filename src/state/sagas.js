
import {fork, put, take} from 'redux-saga/effects'
import {delay} from 'redux-saga'

import {showLoading, hideLoading} from 'state/reducer'

export function* rootSaga () {
  yield fork(loginSaga)
  yield fork(editorSaga)
}

// @NOTE Would move these to their own files, import actions from the central
// actions and obviously have types setup so the reducer, sagas, and actions all
// import them for consistency.
export function* loginSaga () {
  yield take('LOAD_LOGIN')
  yield put(showLoading())
  yield delay(2000)
  yield console.log('Login Loaded')
  yield put(hideLoading())
}

export function* editorSaga () {
  yield take('LOAD_EDITOR')
  yield put(showLoading())
  yield delay(2000)
  yield console.log('Editor Loaded')
  yield put(hideLoading())
}
