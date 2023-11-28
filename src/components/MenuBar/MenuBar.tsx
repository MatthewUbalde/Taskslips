import React from 'react'
import './MenuBar.scss'
import MenuTab from './MenuTab/MenuTab'

function MenuBar() {
  return (
    <div className="menubar">
      <div className="tab-container">
        <MenuTab title="Labels"/>
        <MenuTab title="Tools"/>
        <MenuTab title="Projects"/>
      </div>
      <div className="menu-container">
        Progression Bar!
      </div>
    </div>
  )
}

export default MenuBar