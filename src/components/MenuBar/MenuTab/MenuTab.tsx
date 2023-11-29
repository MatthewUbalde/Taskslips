import React from 'react'
import './MenuTab.scss'

interface Props {
  title: string,
}

function MenuTab({title}: Props) {
  return (
    <button className="menu-tab font-default">
      {title}
    </button>
  )
}

export default MenuTab