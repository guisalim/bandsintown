import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'

import { getArtist, getCache } from '../../actions'

import { Container, Grid, Header, Icon } from 'semantic-ui-react'

import { Routes } from '../'
import './style.css'

class App extends React.Component {
  static propTypes = {
    getCache: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { getCache } = this.props
    getCache()
  }
  render() {
    return (
      <BrowserRouter>
        <Container fluid className='app'>
          <Container>
            <Grid stackable>
              <Grid.Column>

                <Grid.Row style={{ paddingTop: '40px' }}>
                  <Header as={Link} to={`/`} icon textAlign='center'>
                    <Icon name='music' />BandsInTown
                  </Header>
                </Grid.Row>

                <Routes {...this.props} />

              </Grid.Column>
            </Grid>
          </Container>
        </Container>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArtist: request => dispatch(getArtist(request)),
    getCache: () => dispatch(getCache())
  }
}

export default connect(null, mapDispatchToProps)(App)
