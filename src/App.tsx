import Binder from "./components/Binder/Binder";
import ProgressionStatus from "./components/ProgressionStatus/ProgressionStatus";


function App() {
  return (
    <>
      <Binder id='test' folders={[]}/>
      <ProgressionStatus complete={5} max={10} color='accent-1' label="Project" name="Test"/>
    </>
  );
}

export default App;
