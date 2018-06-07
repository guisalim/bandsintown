import React from 'react'
import PropTypes from 'prop-types'

import { Card, Container, Header, Image } from 'semantic-ui-react'
import { EventList } from '../components'

class Component extends React.Component {
    render() {
        const { details, events } = this.props

        return (
            <Container fluid><br />
                <Card centered>
                    <Image src={details.thumb_url} />
                    <Card.Content>
                        <Card.Header>{details.name}</Card.Header>
                    </Card.Content>
                    {
                        details.facebook_page_url !== '' && <Card.Content extra>
                            <a href={details.facebook_page_url}>Facebook Page</a>
                        </Card.Content>
                    }
                </Card>
                <br />
                <Header as='h3' textAlign='center'>{events.length > 0 ? 'Events Found' : 'No Event Found'}</Header>
                {events.length > 0 && <EventList events={events} />}
            </Container>
        )
    }
}

Component.propTypes = {
    details: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired
}

export default Component
