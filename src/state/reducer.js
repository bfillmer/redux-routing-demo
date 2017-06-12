
import {routes} from 'routes'
import {assign} from 'state/utils'

const initialState = {
  href: routes.home
}

const navigate = (state, href) => assign({}, state, {
  href
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return navigate(state, action.payload)
    default:
      return state
  }
}
