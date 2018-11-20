import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../../AppRouter/routes'

if(process.browser) {
  require('./Header.scss')
}

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='logo'>
          Yes-Or-No
        </div>
        <ul>
          {
            routes.map(({ path, name, exact = false }) =>
              <NavLink key={name} exact={exact} to={path}>{name}</NavLink>
            )
          }
        </ul>
      </div>
    </header>
  )
}

export default Header