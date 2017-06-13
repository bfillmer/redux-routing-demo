
import {call, fork, put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'

import {LOAD_LOGIN, LOAD_EDITOR} from 'state/types'
import {addLoading, removeLoading} from 'state/actions/index'

export function* rootSaga () {
  yield fork(loginSaga)
  yield fork(editorSaga)
}

function* showHideLoader (saga) {
  yield put(addLoading('global'))
  yield call(saga)
  yield put(removeLoading('global'))
}

// @NOTE Would want multiple functions in a similar style to this to do the data
// loads and update state to whatever is needed for the route in question.
function* fakeApiCall () {
  yield delay(2000)
}

// @NOTE Would move these to their own files, import actions from the central
// actions and obviously have types setup so the reducer, sagas, and actions all
// import them for consistency.
export function* loginSaga () {
  yield takeEvery(LOAD_LOGIN, () => showHideLoader(fakeApiCall))
}

export function* editorSaga () {
  yield takeEvery(LOAD_EDITOR, () => showHideLoader(fakeApiCall))
}
