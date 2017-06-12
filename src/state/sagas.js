
import {fork} from 'redux-saga/effects'
import {router, createBrowserHistory} from 'redux-saga-router'

import {sagaMap} from 'routes'

const history = createBrowserHistory()

export function* rootSaga () {
  yield fork(router, history, sagaMap)
}

export function* loginSaga () {
  yield console.log('Login Saga Fired')
}

export function* editorSaga () {
  yield console.log('Editor Saga Fired')
}
