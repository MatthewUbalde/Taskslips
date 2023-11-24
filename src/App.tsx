import "./App.scss";
import Folder from "./components/Folder/Folder";

function App() {
  const testCards: Array<CardTaskData> = [
    {
      id: 'test',
      position: 0,
      label_index: 0,
      body: 'testing!',
      date_modified: Date.now(),
      completed: false 
    },
    {
      id: 'test',
      position: 0,
      label_index: 0,
      body: 'testing!',
      date_modified: Date.now(),
      completed: false 
    },
    {
      id: 'test',
      position: 0,
      label_index: 0,
      body: 'testing!',
      date_modified: Date.now(),
      completed: false 
    },
  ]

  return (
    <>
      <Folder position={0} title='Testing' cards={testCards} expand={true}/>
    </>
  );
}

export default App;
