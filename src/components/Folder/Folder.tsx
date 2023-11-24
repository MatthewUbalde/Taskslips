import React, { ReactNode } from "react";
import "./Folder.scss";
import CardTask from "../Card/Task/CardTask";
import FolderTitle from "./Title/FolderTitle";

const Folder = ({ title, cards }: FolderData) => {
  return (
    <div className="folder">
      <FolderTitle title={title} />
      {cards?.map(
        (value: {
          position: number;
          date_modified: Date;
          completed: boolean;
          children: ReactNode;
        }) => (
          <CardTask
            position={value.position}
            date_modified={value.date_modified}
            completed={value.completed}
          >
            {value.children}
          </CardTask>
        )
      )}
    </div>
  );
};

export default Folder;
