import { combineReducers } from 'redux'

import artists from './artists'
import details from './details'
import errors from './errors'
import events from './events'
import filter from './filter'

export default combineReducers({
    artists, details, errors, events, filter
})