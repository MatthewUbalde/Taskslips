import Binder from "./components/Binder/Binder";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <>
      <Binder id='test' folders={[]}/>
      <MenuBar/>
    </>
  );
}

export default App;
