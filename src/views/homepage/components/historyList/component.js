import React from 'react'
import PropTypes from 'prop-types'

import { Card, Header, Responsive } from 'semantic-ui-react'
import { ArtistDetails } from '../'
import './style.css'

const Component = props => {
    const { history } = props

    return (
        <Responsive>
            <div className='search-header'>
                <Header as='h3' textAlign='center'>Search History</Header>
            </div>

            <Card.Group>{history.map(item => <ArtistDetails key={item.name} artist={item} />)}</Card.Group>
        </Responsive>
    )
}

Component.propTypes = {
    history: PropTypes.array.isRequired
}

export default Component
