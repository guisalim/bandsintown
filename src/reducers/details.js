import * as types from '../utils/types'

export default function details(state = {}, { type, payload }) {
    switch (type) {
        case types.GET_DETAIL:
            return payload || {}
        default:
            return state
    }
  }