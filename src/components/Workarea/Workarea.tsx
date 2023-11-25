import React from 'react'
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core'

import Folder from '../Folder/Folder';
import { CardTaskData } from '../../lib/types';
import './workarea.scss'

const testCards: Array<CardTaskData> = [
  {
    id: 1,
    label_index: 0,
    body: '1!',
    date_modified: Date.now(),
    completed: false 
  },
  {
    id: 2,
    label_index: 0,
    body: '2!',
    date_modified: Date.now(),
    completed: false 
  },
  {
    id: 3,
    label_index: 0,
    body: '3!',
    date_modified: Date.now(),
    completed: false 
  },
  {
    id: 4,
    label_index: 0,
    body: '4!',
    date_modified: Date.now(),
    completed: false 
  },
  {
    id: 5,
    label_index: 0,
    body: '5!',
    date_modified: Date.now(),
    completed: false 
  },
  {
    id: 6,
    label_index: 0,
    body: '6!',
    date_modified: Date.now(),
    completed: false 
  },
]

const testCards2: Array<CardTaskData> = [
  {
    id: 11,
    label_index: 0,
    body: '1!',
    date_modified: Date.now(),
    completed: false 
  },
  {
    id: 22,
    label_index: 0,
    body: '2!',
    date_modified: Date.now(),
    completed: false 
  },
  {
    id: 33,
    label_index: 0,
    body: '3!',
    date_modified: Date.now(),
    completed: false 
  }
]

const onDragEnd = (event: DragEndEvent) => {
  console.log('onDragEnd', event);
}

const Workarea = () => {
  return (
    <div className='workarea'>
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <Folder id='test-1' title='Testing' cards={testCards} expand={true}/>
        <Folder id='test-2' title='Testing two!' cards={testCards2} expand={true}/>
      </DndContext>
    </div>
  )
}

export default Workarea