import React from 'react'
import PropTypes from 'prop-types'

import { dateHelper } from '../../../../utils/dateHelper'

import { Button, Card, Icon } from 'semantic-ui-react'

const Component = props => {
    const { event } = props
    return (
        <Card>
            <Card.Content>
                <Card.Header textAlign='center'>{dateHelper(event.datetime)}</Card.Header>
                <Card.Description textAlign='center'>{`${event.venue.city}, ${event.venue.country}`}</Card.Description><br />
                <Card.Content extra textAlign='center'>
                    <Button.Group style={{ width: '100%' }}>
                        {
                            event.offers.length > 0
                                ? event.offers.map(o => {
                                    switch (o.type) {
                                        case 'Tickets':
                                            return <Button basic color='blue' key={o.url} as='a' href={`${o.url}`}><Icon size='small' name='in cart' />Buy Ticket</Button>
                                        case 'VIP':
                                            return <Button basic color='green' key={o.url} as='a' href={`${o.url}`}><Icon size='small' name='in cart' />Buy VIP</Button>
                                        case 'Presale':
                                            return <Button basic color='grey' key={o.url} as='a' href={`${o.url}`}><Icon size='small' name='in cart' />Buy Presale</Button>
                                        default:
                                            return <Button basic key={o.url} as='a' href={`${o.url}`}><Icon size='small' name='in cart' />Buy Other</Button>
                                    }
                                })
                                : <Button basic disabled>No Tickets Available</Button>
                        }
                    </Button.Group>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

Component.propTypes = {
    event: PropTypes.object.isRequired
}

export default Component
