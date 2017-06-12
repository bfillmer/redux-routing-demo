
import {assign} from 'state/utils'
import {loginSaga, editorSaga} from 'state/sagas'
import {Login} from 'view/Login'
import {Editor} from 'view/Editor'

export const routes = {
  home: 'HOME',
  login: 'LOGIN',
  editor: 'EDITOR'
}

// @TODO Helper function to cut down on total lines of code.
const config = [
  {
    id: routes.home,
    route: '/',
    saga: loginSaga,
    component: () => Login
  },
  {
    id: routes.login,
    route: '/login',
    saga: loginSaga,
    component: () => Login
  },
  {
    id: routes.editor,
    route: '/editor',
    saga: editorSaga,
    component: () => Editor
  }
]

// Export for routing saga usage.
// redux-saga-router expects { '/route': sagaFunction, ... }
export const sagaMap = config.reduce((map, route) => assign({}, map, {
  [route.route]: route.saga
}), {})

// Export for React component usage.
// App.js expects { id: ReactComponent, ... }
export const componentMap = config.reduce((map, route) => assign({}, map, {
  [route.id]: route.component
}), {})
