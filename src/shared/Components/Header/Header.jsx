import React from 'react'
import classNames from 'classnames'

import SideBar from '../SideBar'

if(process.browser) {
  require('./Header.scss')
}

const Header = ({ context = {}, linskMarkUp, showSideBar, setShowSideBar } = {}) =>
  <header className='header'>
    <div className='header-content'>
      {
        !context.isDesktop &&
          <img
            className={classNames('header-burger', { rotate: showSideBar })}
            src='/assets/icons/bars.svg' width='25' height="25"
            onClick={setShowSideBar}
          />
      }
      <div className='logo'>
        Yes-Or-No
      </div>
      {
        context.isDesktop
          ? <ul className='top-nav'>{linskMarkUp}</ul>
          : <SideBar linskMarkUp={linskMarkUp} showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
      }
    </div>
  </header>

export default Header