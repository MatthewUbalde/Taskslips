import React, { useState } from "react";
import { DndContext, DragEndEvent, closestCorners } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";

import Folder from "../Folder/Folder";
import { FolderData, BinderData } from "../../lib/types";
import "./Binder.scss";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

const onDragEnd = (event: DragEndEvent) => {
  console.log("onDragEnd", event);
};

const Binder = ({ id, folders }: BinderData) => {
  const [currentFolders, setCurrentFolders] = useState(folders);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newFolderData: FolderData = {
      id: uuidv4(),
      cards: [],
    };
    setCurrentFolders([...currentFolders, newFolderData]);
  };

  return (
    <div id={id.toString()} className="binder">
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <div className="binder-container">
          {currentFolders.length !== 0 && (
            <SortableContext
              items={currentFolders}
              strategy={horizontalListSortingStrategy}
            >
              {currentFolders.map((folder) => (
                <Folder
                  id={folder.id}
                  key={folder.id}
                  cards={folder.cards}
                  completed_cards={folder.completed_cards}
                />
              ))}
            </SortableContext>
          )}
          <button onClick={handleClick}>Add Folder</button>
        </div>
      </DndContext>
    </div>
  );
};

export default Binder;
