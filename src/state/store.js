
import {applyMiddleware, compose, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import {rootSaga} from 'state/sagas/index'
import {reducer} from 'state/reducers/index'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()
const routerHistory = routerMiddleware(history)

// Use Redux DevTools Extension if available and not in production.
const composeEnhancers = ((process.env.NODE_ENV !== 'production') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
  loading: reducer,
  routing: routerReducer
})

const middleware = applyMiddleware(sagaMiddleware, routerHistory)

// If we aren't in production and we have redux devtools let's add that as middleware.
export const store = createStore(
  reducers,
  composeEnhancers(middleware)
)

sagaMiddleware.run(rootSaga)
