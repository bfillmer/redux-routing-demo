
import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import {rootSaga} from 'state/sagas'
import {reducer} from 'state/reducer'

const sagaMiddleware = createSagaMiddleware()

// Use Redux DevTools Extension if available and not in production.
const composeEnhancers = ((process.env.NODE_ENV !== 'production') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

// If we aren't in production and we have redux devtools let's add that as middleware.
export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)
