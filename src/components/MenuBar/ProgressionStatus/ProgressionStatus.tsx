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

  return (
    <div className="progression-status">
      <div className="progression-info">
        <div>
          <span className="font-default">{label}:</span>
          <span className="font-large">{name}</span>
        </div>
        <div className="font-default">{`${complete}/${max}`}</div>
      </div>

      <div className='progress-bar font-default'>
        <div className={`progress-bar-complete ${color}`} style={{width: `${completePercentage}%`}}>
          <span className='progress-complete-text'>{`${completePercentage}%`}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar