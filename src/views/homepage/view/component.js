import React from 'react'
import PropTypes from 'prop-types'

import { Button, Container, Grid, Header } from 'semantic-ui-react'

import { ArtistDetails, HistoryList, SearchForm } from '../components'
import './style.css'

const Component = props => {
    const { artist, clearHistory, history } = props

    return (
        <Container fluid>            
            <Grid.Row>
                <SearchForm />
            </Grid.Row>
            <div className='results'>
            {
                artist.hasOwnProperty('name') && 
                    <Grid.Row>
                        <Header as='h2' textAlign='center'>Results</Header>
                        <ArtistDetails artist={artist} />
                    </Grid.Row>
            }
            
            {
                history.length > 0 && 
                <Grid.Row>
                    <HistoryList history={history}/>
                </Grid.Row>
            }
            </div><br/>
            {
                history.length > 0 && <Button className='clearButton' fluid onClick={e => clearHistory()}>Clear history</Button>
            }
        </Container>
    )
}

Component.propTypes = {
    artist: PropTypes.object,
    clearHistory: PropTypes.func.isRequired,
    history: PropTypes.array
}

export default Component