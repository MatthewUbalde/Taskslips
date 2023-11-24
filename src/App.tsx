import "./App.scss";
import Folder from "./components/Folder/Folder";

function App() {
  const testCards: Array<CardTaskData> = [
    {
      id: 0,
      label_index: 0,
      body: 'testing!',
      date_modified: Date.now(),
      completed: false 
    },
    {
      id: 1,
      label_index: 0,
      body: 'testing!',
      date_modified: Date.now(),
      completed: false 
    },
    {
      id: 2,
      label_index: 0,
      body: 'testing!',
      date_modified: Date.now(),
      completed: false 
    },
  ]

  return (
    <>
      <Folder title='Testing' cards={testCards} expand={true}/>
    </>
  );
}

export default App;
