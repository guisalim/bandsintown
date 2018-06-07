import { combineReducers } from "redux";
import artists from './artists'
import details from './details'
import errors from './errors'
import events from './events'
import filter from './filter'


describe('app reducer', () => {
    it('should handle initial state', () => {
      expect(artists(undefined, [])).toEqual([])
      expect(details(undefined, [])).toEqual({})
      expect(errors(undefined, [])).toEqual('')
      expect(events(undefined, [])).toEqual([])
      expect(filter(undefined, [])).toEqual({})
    })
})