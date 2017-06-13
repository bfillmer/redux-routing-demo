
const initialState = false

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
      return true
    case 'HID_LOAD':
      return false
    default:
      return state
  }
}
