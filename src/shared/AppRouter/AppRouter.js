import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutUsPage from '../Pages/AboutUsPage'

const AppRouter = () =>
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/aboutus' component={AboutUsPage}/>
  </Switch>

  export default AppRouter