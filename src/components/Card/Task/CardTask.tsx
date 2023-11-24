import React from 'react'

import './CardTask.scss'
import Checkbox from '../Checkbox/Checkbox';


const CardTask = ({id, position, label_index, body, date_modified, completed}: CardTaskData ) => {
  return (
    <div className='card-task' id={id}>
      <div className='card-label'/>
      <div className='card-body'>
        <p className='card-text'>{body}</p>
        <p className='card-date-modified'>Nov. 17, 2023</p>
      </div>
      <Checkbox isCompleted={completed}/>
    </div>
  );
}

export default CardTask