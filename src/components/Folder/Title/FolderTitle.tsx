import React from 'react'
import "./FolderTitle.scss"

interface Props {
  title?: string,
}

const FolderTitle = ({title}: Props) => {
  return (
    <div className='folder-title'>
      <h1>{title}</h1>
    </div>
  )
}

export default FolderTitle