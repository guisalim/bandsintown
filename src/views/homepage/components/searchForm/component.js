import React from 'react'

import { Form, Input } from 'semantic-ui-react'
import './style.css'

class Component extends React.Component {
    state = { query: '', error: false }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = e => {
        e.preventDefault()

        const { onSubmit } = this.props
        const { query } = this.state

        if (query === '')
            return this.setState({ error: true })

        onSubmit(query)
        return this.setState({ query: '', error: false })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    fluid
                    size='small'
                    name='query'
                    autoComplete='off'
                    value={this.state.query}
                    onChange={this.handleChange}
                    placeholder='Find a artist here...'
                    action={{ labelPosition: 'left', icon: 'play', content: 'Search' }}
                    className='search-form'
                />
                <div className='search-pristine'><span>{this.state.error ? `Type an artist name to find more info...` : <br />}</span></div>
            </Form>
        )
    }
}

export default Component
