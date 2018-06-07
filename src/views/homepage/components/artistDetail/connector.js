import { connect } from 'react-redux'
import { clearFilter, clearArtist } from '../../../../actions'

const mapStateToProps = state => {
    const history = state.filter 
        ? state.artists.filter(item => item.name !== state.filter.name)
        : state.artists
    
    return { 
        filter: state.filter,
        history
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        clearFilter: () => dispatch(clearFilter()),
        clearArtist: request => dispatch(clearArtist(request))
    }
}

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component)
