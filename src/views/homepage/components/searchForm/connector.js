import { connect } from 'react-redux'
import { getArtist } from '../../../../actions'

const mapDispatchToProps = dispatch => {
    return{
        getArtist: request => dispatch(getArtist(request))
    }
}

export default Component => connect(null, mapDispatchToProps)(Component)