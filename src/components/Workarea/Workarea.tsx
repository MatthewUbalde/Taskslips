import React from 'react'
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core'

import Folder from '../Folder/Folder';
import { CardTaskData } from '../../lib/types';

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
]

const onDragEnd = (event: DragEndEvent) => {
  console.log('onDragEnd', event);
}

const Workarea = () => {
  return (
    <div>
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <Folder id='test-1' title='Testing' cards={testCards} expand={true}/>
      </DndContext>
    </div>
  )
}

export default Workarea