import React, {useState} from 'react'
import './Checkbox.scss'

interface Prop {
  isCompleted: boolean,
}

const Checkbox = ({isCompleted}: Prop) => {
  const [completed, setCompleted] = useState(isCompleted);

  return (
    <button onClick={() => setCompleted(!completed)}>
      {completed ? '[]' : '[x]'}
    </button>
  )
}

export default Checkbox