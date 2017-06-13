
import {handleActions} from 'redux-actions'

import {ADDED_LOADING, REMOVED_LOADING} from 'state/types'

// @NOTE This would really be the app reducer, for generic global actions.
// Then index.js would become a combine reducers to aggregate all of the
// reducers into one and send it to the store.
const initialState = []

export const reducer = handleActions({
  [ADDED_LOADING]: (state, {payload}) => [...state, payload],
  [REMOVED_LOADING]: (state, {payload}) => state.filter(id => id !== payload)
}, initialState)
