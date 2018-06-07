import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Details, Homepage } from '../../views'

const Component = () =>
    <Switch>
        <Route exact path='/' render={props => <Homepage {...props} />} />
        <Route exact path='/:artist' render={props => <Details {...props} />} />
        <Route render={() => <h1>Not Found</h1>} />
    </Switch>

export default Component