import { useState } from 'react';
import './ProgressionStatus.scss'

interface Props {
  complete: number,
  max: number,
  label?: string,
  name?: string,
  color?: "accent-1" | "accent-2" | "accent-3" | "accent-4" | "accent-5" | "accent-6"
}

function ProgressBar({complete, max, label, name, color}: Props) {
  const [projectName, setProjectName] = useState(name);
  const completePercentage = (complete / max) * 100;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setProjectName(event.target.value);
  }

  return (
    <div className="progression-status color-light">
      <form className="progression-info" onSubmit={(event) => event.preventDefault()}>
        <div>
          <span className="font-default">{label}:</span>
          <input className="font-large" value={projectName} placeholder="Project Title" onChange={handleChange}/>
        </div>
        <div className="font-default">{`${complete}/${max}`}</div>
      </form>

      <div className='progress-bar font-default'>
        <div className={`progress-bar-complete ${color}`} style={{width: `${completePercentage}%`}}>
          <span className='progress-complete-text'>{`${completePercentage}%`}</span>
        </div>
      </div>
      <span className="font-smaller">TaskSlip - Created by: Matthew Ubalde. Used dnd-kit to help create this.</span>
    </div>
  )
}

export default ProgressBar