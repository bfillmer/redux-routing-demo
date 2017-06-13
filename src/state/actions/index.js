
import {createAction} from 'redux-actions'

import {ADDED_LOADING, REMOVED_LOADING, LOAD_LOGIN, LOAD_EDITOR} from 'state/types'

export const addLoading = createAction(ADDED_LOADING)
export const removeLoading = createAction(REMOVED_LOADING)

export const loadLogin = createAction(LOAD_LOGIN)
export const loadEditor = createAction(LOAD_EDITOR)
