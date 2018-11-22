import React from 'react'
import classNames from 'classnames'

if(process.browser){
  require('./SideBar.scss')
}

const SideBar = ({ linskMarkUp, showSideBar, setShowSideBar }) => {
  return (
    <div className="sidebar-container">
      <div className={classNames('sidebar-shadow', { show: showSideBar })} onClick={setShowSideBar}></div>
      <div className={classNames('sidebar-panel', { show: showSideBar })}>
        { linskMarkUp }
      </div>
    </div>
  )
}

export default SideBar