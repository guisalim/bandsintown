import * as types from '../utils/types'

export default function filter(state = {}, { type, payload }) {
    switch (type) {
        case types.SET_FILTER:
            return payload || {}
        default:
            return state
    }
  }