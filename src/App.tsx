import "./App.scss";
import CardTask from "./components/Card/Task/CardTask";
import FolderTitle from "./components/Folder/Title/FolderTitle";

function App() {
  return (
    <>
      <FolderTitle title="Title"/>
      <CardTask
        id="1"
        position={0}
        completed={false}
        date_modified={Date.now()}
        body={"Hello! This is a test of what it should look like!"}
      />
    </>
  );
}

export default App;
