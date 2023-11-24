import {
  DndContext,
  DragEndEvent,
  closestCorners,
  useDroppable,
} from "@dnd-kit/core";

import CardTask from "../Card/Task/CardTask";
import FolderTitle from "./Title/FolderTitle";
import { FolderData } from "../../lib/types";
import "./Folder.scss";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

const Folder = ({ id, title, cards }: FolderData) => {
  const [currentCards, setCurrentCards] = useState(cards);
  const { setNodeRef } = useDroppable({
    id: id,
  });

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;

    setCurrentCards((currentCards) => {
      const oldIndex = currentCards.findIndex((user) => user.id === active.id);
      const newIndex = currentCards.findIndex((user) => user.id === over?.id);
      return arrayMove(currentCards, oldIndex, newIndex);
    });

    console.log(active.id + '>' + over?.id)
  };

  return (
    <div className="folder">
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <FolderTitle title={title} />
        <div className="folder-container" ref={setNodeRef}>
          <SortableContext
            items={currentCards}
            strategy={verticalListSortingStrategy}
          >
            {currentCards?.map((card) => (
              <CardTask
                id={card.id}
                key={card.id}
                date_modified={card.date_modified}
                completed={card.completed}
                body={card.body}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default Folder;
