import React from 'react'
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core'

import Folder from '../Folder/Folder';
import { CardData } from '../../lib/types';
import './Binder.scss'


const onDragEnd = (event: DragEndEvent) => {
  console.log('onDragEnd', event);
}

const Workarea = () => {
  return (
    <div className='workarea'>
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
      </DndContext>
    </div>
  )
}

export default Workarea