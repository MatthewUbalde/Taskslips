import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities/useSyntheticListeners'
import { LegacyRef } from 'react'
import "./DragHandle.scss"

interface Props {
  color?: 'light' | 'dark'
  dnd_ref?: LegacyRef<HTMLButtonElement>
  listeners?: SyntheticListenerMap | undefined
}

function DragHandle({color, dnd_ref, listeners}: Props) {
  return (
    <button className={`drag-handle drag-handle-${color}`} ref={dnd_ref} {...listeners}>
      Move
    </button>
  )
}

export default DragHandle