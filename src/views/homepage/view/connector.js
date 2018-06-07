import { connect } from 'react-redux'
import { clearHistory } from '../../../actions'

const mapStateToProps = state => {
    const history = state.filter 
        ? state.artists.filter(item => item.name !== state.filter.name)
        : state.artists
    
    return { 
        artist: state.filter,
        history
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        clearHistory: () => dispatch(clearHistory())
    }
}

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component)