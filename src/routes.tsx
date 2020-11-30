import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import Home from 'pages/Home'
import Details from 'pages/Details'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/details' exact>
        <Redirect to='' />
      </Route>
      <Route path='/details/:nativeName' component={Details} />
    </Switch>
  </BrowserRouter>
)

export default Routes
