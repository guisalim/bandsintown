import * as types from '../utils/types'

export default function events(state = [], { type, payload }) {
    switch (type) {
        case types.GET_EVENT:
            return payload || []
        default:
            return state
    }
}