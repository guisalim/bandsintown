import * as types from '../utils/types'

export default function artists(state = [], { type, payload }) {
  switch (type) {
    case types.GET_ARTIST:
      return state.length > 0
        ? [payload].concat(state.filter(item => item.name !== payload.name)).slice(0, types.MAX)
        : [payload]

    case types.CLEAR_ARTIST:
      return state.filter(item => item.name !== payload.name)

    case types.CLEAR_HISTORY:
      return []

    default:
      return state
  }
}