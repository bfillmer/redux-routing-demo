
import {fork, put} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {router, createBrowserHistory} from 'redux-saga-router'

import {routes, sagaMap} from 'routes'

const history = createBrowserHistory()

export function* rootSaga () {
  yield fork(router, history, sagaMap)
}

// @NOTE Would move these to their own files, import actions from the central
// actions and obviously have types setup so the reducer, sagas, and actions all
// import them for consistency.

// @NOTE Would handle loading component display here at the saga level.

export function* loginSaga () {
  // Display loading component.
  yield delay(10000)
  yield put({
    type: 'NAVIGATE',
    payload: routes.login
  })
  // Hide loading component.
}

export function* editorSaga () {
  // Display loading component.
  yield delay(10000)
  yield put({
    type: 'NAVIGATE',
    payload: routes.editor
  })
  // Hide loading component.
}
