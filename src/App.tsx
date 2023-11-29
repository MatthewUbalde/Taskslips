import "./App.scss";
import Binder from "./components/Binder/Binder";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div className='field'>
      <div>
        <Binder id='test' folders={[]}/>
      </div>
      <MenuBar/>
    </div>
  );
}

export default App;
