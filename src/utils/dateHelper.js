export function dateHelper(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const event = new Date(dateString).toLocaleDateString('en-GB', options)

    return event
}