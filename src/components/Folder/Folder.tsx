import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
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

import { CardData, FolderData } from "../../lib/types";
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
    setCurrentCards((value) => {
      if (value === undefined) return value;

      const oldIndex = value.findIndex((card) => card.id === active.id);
      const newIndex = value.findIndex((card) => card.id === over?.id);
      return arrayMove(value, oldIndex, newIndex);
    });
  };
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (currentCards === undefined) return;
    const newCardData: CardData = {
      id: uuidv4(),
      date_modified: Date.now(),
      is_optional: false,
    };
    setCurrentCards([...currentCards, newCardData]);
  }

  return (
    <div className="folder">
      <FolderTitle title={title} maxLength={20} onClickAddCard={handleClick}/>
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        {currentCards !== undefined &&
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
        </div>}
      </DndContext>
    </div>
  );
};

export default Folder;
