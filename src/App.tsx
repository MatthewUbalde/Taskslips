import "./App.scss";
import Binder from "./components/Binder/Binder";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div className='field'>
      <div>
        <Binder/>
      </div>
      <MenuBar/>
    </div>
  );
}

export default App;
