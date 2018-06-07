import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Button, Card, Icon, Image } from 'semantic-ui-react'
import './style.css'

class Component extends React.Component {
    handleClear = (artist) => {
        const { clearFilter, clearArtist, filter } = this.props
        if(filter) {
            filter.name === artist.name && clearFilter()
        }
        clearArtist(artist)
        return null
    }
    
    render() {
        const { artist, clearFilter } = this.props
        return (
            <Card centered>
                <Image src={artist.thumb_url} />
                <Card.Content><Card.Header textAlign='center'>{artist.name}</Card.Header></Card.Content>
                <Card.Content extra>
                    <Button.Group style={{ width: '100%' }}>
                        {artist.facebook_page_url !== '' && <Button basic as='a' href={artist.facebook_page_url}
                            onClick={e => clearFilter()}><Icon name='facebook square' className="facebook" />Facebook</Button>}
                        {artist.upcoming_event_count > 0 && <Button basic as={Link} to={`/${artist.name}`}
                            onClick={e => clearFilter()}><Icon name='music' className="music" />Events</Button>}
                    </Button.Group>
                </Card.Content>
                <Icon color='grey' name='trash' className='clear-search' onClick={e => this.handleClear(artist)} />
            </Card>
        )
    }
}

Component.propTypes = {
    artist: PropTypes.object.isRequired,
    filter: PropTypes.object,
    clearArtist: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired
}

export default Component
