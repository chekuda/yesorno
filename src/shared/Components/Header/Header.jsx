import React from 'react'

if(process.browser) {
  require('./Header.scss')
}

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        Yes-Or-No
      </div>
    </header>
  )
}

export default Header