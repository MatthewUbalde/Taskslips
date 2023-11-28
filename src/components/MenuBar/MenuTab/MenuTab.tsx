import React from 'react'
import './MenuTab.scss'

interface Props {
  title: string,
}

function MenuTab({title}: Props) {
  return (
    <button className="menu-tab">
      {title}
    </button>
  )
}

export default MenuTab