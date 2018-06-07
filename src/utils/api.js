import axios from 'axios'

axios.defaults.baseURL = 'https://rest.bandsintown.com'
const app_id = 'default_string'


// Get Artist
export function getArtist(request) {
    return axios.get(`/artists/${request}?app_id=${app_id}`)
}

// Get Event
export function getEvent(request, optional) {
    return axios.get(`/artists/${request}/events?app_id=${app_id}&date=${optional}`)
}
