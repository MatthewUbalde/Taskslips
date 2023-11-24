import React from 'react'
import dayjs from 'dayjs';

import './CardTask.scss'
import Checkbox from '../Checkbox/Checkbox';

const CardTask = ({id, body, date_modified, completed}: CardTaskData ) => {
  return (
    <div className='card-task' id={id}>
      <div className='card-label'/>
      <div className='card-body'>
        <p className='card-text'>{body}</p>
        <p className='card-date-modified'>{dayjs(date_modified).format('MMM. DD, YYYY')}</p>
      </div>
      <Checkbox isCompleted={completed}/>
    </div>
  );
}

export default CardTask