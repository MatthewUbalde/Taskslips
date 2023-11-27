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
import CardTask from "../Card/Card";
import FolderTitle from "./FolderTitle";
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
  };

  return (
    <div className="folder">
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <FolderTitle title={title} maxLength={20}/>
        <div className="folder-container" ref={setNodeRef}>
          <SortableContext
            items={currentCards}
            strategy={verticalListSortingStrategy}
          >
            {currentCards.map((card) => (
              <CardTask
                id={card.id}
                key={card.id}
                description={card.description}
                date_modified={card.date_modified}
                progression={card.progression}
                importance={card.importance}
                is_optional={card.is_optional}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default Folder;
