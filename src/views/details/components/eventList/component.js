import React from 'react'
import PropTypes from 'prop-types'

import { Button, Card } from 'semantic-ui-react'
import { Event } from '../'

class Component extends React.Component {
    state = { amount: 10 }

    handleChange(e) {
        e.preventDefault()

        const { amount } = this.state
        const nextAmount = amount + 10
        this.setState({ amount: nextAmount })
    }

    render() {
        const { events } = this.props
        const events_filtered = events.slice(0, this.state.amount)
        return (
            <Card.Group centered>
                {
                    events_filtered.map(e =>
                        <Event event={e} />
                    )
                }
                <Button 
                    fluid 
                    onClick={e => this.handleChange(e)} 
                    disabled={this.state.amount >= this.props.events.length}>
                    See more events
                </Button>
            </Card.Group>
        )
    }
}

Component.propTypes = {
    events: PropTypes.array.isRequired
}

export default Component