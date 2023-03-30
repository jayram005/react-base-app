import { combineReducers } from 'redux'

import regis from './regis'

const createReducer = asyncReducers => combineReducers({
    regis,
    ...asyncReducers
})

export default createReducer
