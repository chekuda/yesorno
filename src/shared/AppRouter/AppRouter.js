import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutUsPage from '../Pages/AboutUsPage'
import Header from '../Components/Header'

if(process.browser) {
  require('../../styles/global.scss')
}

const AppRouter = () =>
  <Fragment>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/aboutus' component={AboutUsPage}/>
    </Switch>
  </Fragment>

  export default AppRouter