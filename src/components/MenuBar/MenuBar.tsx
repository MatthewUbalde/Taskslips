import MenuTab from './MenuTab/MenuTab'
import ProgressionStatus from './ProgressionStatus/ProgressionStatus'
import './MenuBar.scss'

function MenuBar() {
  return (
    <div className="menubar">
      <div className="tab-container">
        <MenuTab title="Labels"/>
        <MenuTab title="Projects"/>
      </div>
      <div className="menu-container color-light">
        <ProgressionStatus complete={5} max={10} color='accent-1' label="Project" name="Test"/>
      </div>
    </div>
  )
}

export default MenuBar