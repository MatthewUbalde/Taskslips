import './App.scss'
import CardTask from './components/Card/Task/CardTask'

function App() {
  return (
    <>
      <CardTask id='1' position={0} completed={false} date_modified={Date.now()} body={'Testing testing!'}/>
    </>
  )
}

export default App
