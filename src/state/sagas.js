
import {fork, put} from 'redux-saga/effects'
import {router, createBrowserHistory} from 'redux-saga-router'

import {routes, sagaMap} from 'routes'

const history = createBrowserHistory()

export function* rootSaga () {
  yield fork(router, history, sagaMap)
}

// @NOTE Would move these to their own files, import actions from the central
// actions and obviously have types setup so the reducer, sagas, and actions all
// import them for consistency.
export function* loginSaga () {
  yield put({
    type: 'NAVIGATE',
    payload: routes.login
  })
}

export function* editorSaga () {
  yield put({
    type: 'NAVIGATE',
    payload: routes.editor
  })
}
