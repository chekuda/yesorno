import React from 'react'

if(process.browser) {
  require('./Header.scss')
}

const Header = () => {
  return (
    <div className='Header'>
      <div className='logo'>
        Yes-Or-No
      </div>
    </div>
  )
}

export default Header