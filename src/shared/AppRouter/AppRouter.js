import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'
import Header from '../Components/Header'

if(process.browser) {
  require('../../styles/global.scss')
}

const AppRouter = () =>
  <Fragment>
    <Header />
    <div className='app-container'>
      <Switch>
        { routes.map(({ Component, path, needs }, index) =>
          <Route
            key={index}
            exact
            path={path}
            render={() => <Component needs={needs}/>}
          />)
        }
      </Switch>
    </div>
  </Fragment>

export default AppRouter