import React from 'react'
import PropTypes from 'prop-types'

import { Header } from 'semantic-ui-react'
import Component from './component'

class Container extends React.Component {

    componentDidMount() {
        const { artist, getDetails, getEvents } = this.props
        
        getDetails(artist)
        getEvents(artist, '')
    }

    render() {
        if(this.props.details.hasOwnProperty('name'))
            return <Component {...this.props}  />
        else
            return (
                <Header as='h3' textAlign='center'><br/>The artist you're looking for was not found...<br/><h4>Use the logo above start over...</h4></Header>
            )
    }
}

Container.propTypes = {
    artist: PropTypes.string.isRequired,
    getDetails: PropTypes.func.isRequired,
    getEvents: PropTypes.func.isRequired
}

export default Container
