import "./Folder.scss";
import CardTask from "../Card/Task/CardTask";
import FolderTitle from "./Title/FolderTitle";

const Folder = ({ title, cards }: FolderData) => {
  return (
    <div className="folder">
      <FolderTitle title={title} />

      <div className="folder-container">
        {cards?.map(
          (value, index) => (
            <CardTask
              id={index}
              date_modified={value.date_modified}
              completed={value.completed}
              body={value.body}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Folder;
