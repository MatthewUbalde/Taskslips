import Workarea from "./components/Workarea/Workarea";
import ProgressionStatus from "./components/ProgressionStatus/ProgressionStatus";


function App() {
  return (
    <>
      <Workarea folders={[]}/>
      <ProgressionStatus complete={5} max={10} color='accent-1' label="Project" name="Test"/>
    </>
  );
}

export default App;
