import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../../AppRouter/routes'
import Consumer from '../../Containers/ContextContainer'

if(process.browser) {
  require('./Header.scss')
}

export const HeaderView = ({ context = {} } = {}) =>
  <header className='header'>
    <div className='header-content'>
      {
        !context.isDesktop &&
          <img className='header-burger' src='/assets/icons/bars.svg' width='25' height="25" />
      }
      <div className='logo'>
        Yes-Or-No
      </div>
      {
        context.isDesktop && <ul>
          {
            routes.map(({ path, name, exact = false }) =>
              <NavLink className='top-nav' key={name} exact={exact} to={path}>{name}</NavLink>
            )
          }
        </ul>
      }
    </div>
  </header>

const Header = () => {
  return (
    <Consumer>
      { context => <HeaderView context={context} /> }
    </Consumer>
  )
}

export default Header