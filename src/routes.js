
import {assign} from 'state/utils'
import {loginSaga, editorSaga} from 'state/sagas'
import {Login} from 'view/Login'
import {Editor} from 'view/Editor'

// @TODO Helper function to cut down on total lines of code.
const routes = [
  {
    id: 'LOGIN',
    route: '/login',
    saga: loginSaga,
    component: Login
  },
  {
    id: 'EDITOR',
    route: '/editor',
    saga: editorSaga,
    component: Editor
  }
]

// Export for routing saga usage.
// redux-saga-router expects { '/route': sagaFunction, ... }
export const sagaMap = routes.reduce((map, route) => assign({}, map, {
  [route.route]: route.saga
}), {})

// Export for React component usage.
// App.js expects { id: ReactComponent, ... }
export const componentMap = routes.reduce((map, route) => assign({}, map, {
  [route.id]: route.component
}), {})

console.log('Saga Map', sagaMap, 'Component Map', componentMap)
