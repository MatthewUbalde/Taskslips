import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  closestCorners,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { FolderData } from "../../lib/types";
import CardTask from "../Card/Task/CardTask";
import "./Folder.scss";

const Folder = ({ id, title, cards }: FolderData) => {
  const [currentCards, setCurrentCards] = useState(cards);
  const { setNodeRef } = useDroppable({
    id: id,
  });

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id === over?.id) return;
    setCurrentCards((cards) => {
      const oldIndex = cards.findIndex((card) => card.id === active.id);
      const newIndex = cards.findIndex((card) => card.id === over?.id);
      return arrayMove(cards, oldIndex, newIndex);
    });

    console.log(currentCards);
  };

  return (
    <div className="folder">
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <div className="folder-title">
          <h1>{title}</h1>
        </div>
        <div className="folder-container" ref={setNodeRef}>
          <SortableContext
            items={currentCards}
            strategy={verticalListSortingStrategy}
          >
            {currentCards?.map((card) => (
            {currentCards.map((card) => (
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
