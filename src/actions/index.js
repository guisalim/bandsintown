import * as API from '../utils/api'
import * as types from '../utils/types'

// Local Storage
function setLocalStorage(data) {
  const cachedItem = JSON.parse(localStorage.getItem('searchHistory'))
  if (cachedItem !== null)
    localStorage.setItem('searchHistory', JSON.stringify([data].concat(cachedItem.filter(item => item.name !== data.name)).slice(0, types.MAX)))
  else
    localStorage.setItem('searchHistory', JSON.stringify([data]))
}

function removeFromLocalStorage(data) {
  const cachedItem = JSON.parse(localStorage.getItem('searchHistory'))
  if (cachedItem !== null)
    localStorage.setItem('searchHistory', JSON.stringify(cachedItem.filter(item => item.name !== data.name)))
  else
    localStorage.setItem('searchHistory', JSON.stringify([]))
}

export function getCache() {
  return async dispatch => {
    const cachedItem = JSON.parse(localStorage.getItem('searchHistory')).reverse()
    if (cachedItem.length > 0)
      cachedItem.forEach(item => {
        dispatch({ type: types.GET_ARTIST, payload: item })
        clearFilter()
      })
  }
}

// clear History and Filter
export function clearArtist(request) {
  removeFromLocalStorage(request)
  return dispatch => dispatch({ type: types.CLEAR_ARTIST, payload: request })
}

export function clearHistory() {
  localStorage.setItem('searchHistory', JSON.stringify([]))
  return dispatch => {
    dispatch({ type: types.CLEAR_HISTORY })
    dispatch({ type: types.SET_FILTER, payload: '' })
  }
}

export function clearFilter() {
  return dispatch => {
    dispatch({ type: types.SET_FILTER, payload: '' })
  }
}

// Artist, Events and Details
export function getArtist(request) {
  return async dispatch => {
    const response = await API.getArtist(request)
    if (response.data.hasOwnProperty('name')) {
      setLocalStorage(response.data)
      dispatch({ type: types.SET_FILTER, payload: response.data })
      dispatch({ type: types.GET_ARTIST, payload: response.data })
    }
    else
      dispatch({ type: types.FAIL, payload: response.data })
  }
}

export function getDetails(request) {
  return async dispatch => {
    const response = await API.getArtist(request)
    if (response.data.hasOwnProperty('name')) {
      dispatch({ type: types.GET_DETAIL, payload: response.data })
    }
    else
      dispatch({ type: types.FAIL, payload: response.data })
  }
}

export function getEvents(request, optional) {
  return async dispatch => {
    const response = await API.getEvent(request, optional)
    dispatch({ type: types.GET_EVENT, payload: response.data })
  }
}

