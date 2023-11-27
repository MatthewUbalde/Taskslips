import React from 'react'
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core'

import Folder from '../Folder/Folder';
import { CardData } from '../../lib/types';
import './Binder.scss'


const onDragEnd = (event: DragEndEvent) => {
  console.log('onDragEnd', event);
}

const Workarea = () => {
  const temp: Array<CardData> = []

  return (
    <div className='workarea'>
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <Folder id={1} cards={temp}/>
        <Folder id={2} cards={temp}/>
      </DndContext>
    </div>
  )
}

export default Workarea