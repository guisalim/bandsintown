import React from 'react'
import PropTypes from 'prop-types'

import Component from './component'

class Container extends React.Component {    
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(artist) {
        this.props.getArtist(artist)
    }

    render() {
        return <Component onSubmit={this.handleSubmit} />
    }
}

Container.propTypes = {
    getArtist: PropTypes.func.isRequired
}

export default Container
