
import {assign} from 'state/utils'

const initialState = {
  loading: false
}

// @NOTE Super rough redux code for overlay demo.
export const showLoading = () => ({
  type: 'SHOWED_LOAD'
})

export const hideLoading = () => ({
  type: 'HID_LOAD'
})

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SHOWED_LOAD':
      return assign({}, state, {
        loading: true
      })
    case 'HID_LOAD':
      return assign({}, state, {
        loading: false
      })
    default:
      return state
  }
}
