import React from 'react'
import './ProgressionStatus.scss'

interface Props {
  complete: number,
  max: number,
  label?: string,
  name?: string,
  color?: "accent-1" | "accent-2" | "accent-3" | "accent-4" | "accent-5" | "accent-6"
}

function ProgressBar({complete, max, label, name, color}: Props) {
  const completePercentage = (complete / max) * 100;
  const incompletePercentage = 100 - completePercentage;

  return (
    <div className="progression-status">
      <div className="progression-info">
        <div>
          <span className="label">{label}:</span>
          <span className="name">{name}</span>
        </div>
        <span className="completion">{`${complete}/${max}`}</span>
      </div>
      <div className='progress-bar'>
        <div className={`progress-bar-complete progress-${color}`} style={{width: `${completePercentage}%`}}>
          <span className='progress-complete-text'>{`${completePercentage}%`}</span>
        </div>
        <span className='progress-incomplete-text'>{`${incompletePercentage}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar