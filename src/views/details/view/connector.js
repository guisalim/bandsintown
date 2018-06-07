import { connect } from 'react-redux'
import { getDetails, getEvents } from '../../../actions'

const mapStateToProps = (state, { match }) => {
    const artist = match.params.artist
    const { details, events } = state

    return { artist, details, events }
}

const mapDispatchToProps = dispatch => {
    return {
        getDetails: request => dispatch(getDetails(request)),
        getEvents: (request, optional) => dispatch(getEvents(request, optional))
    }
}

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component)
