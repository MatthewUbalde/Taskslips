import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
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
// import Button from "../Button/Button";
import CardAdd from "../Card/CardAdd";
import "./Folder.scss";
import DragHandle from "../DragHandle/DragHandle";

const Folder = ({ id, title, cards }: FolderData) => {
  const [currentCards, setCurrentCards] = useState(cards);
  const [activeId, setActiveId] = useState(null);
  const { setNodeRef } = useDroppable({
    id: id,
  });
  
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  }

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id === over?.id) return;
    setCurrentCards((value) => {
      if (value === undefined) return value;

      const oldIndex = value.findIndex((card) => card.id === active.id);
      const newIndex = value.findIndex((card) => card.id === over?.id);
      return arrayMove(value, oldIndex, newIndex);
    });

    setActiveId(null);
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
  };

  return (
    <div className="folder">
      <FolderTitle title={title} maxLength={20} />
      <DndContext collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        {currentCards !== undefined && (
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
            <DragOverlay>
              {activeId ? (
                <div className="card card-temp">
                  Move!
                  <DragHandle color="dark"/>
                </div>
              ) : null}
            </DragOverlay>
            <CardAdd onClick={handleClick}/>
          </div>
        )}
      </DndContext>
      {/* <Button color="light" onClick={handleClick}>
        Add Card
      </Button> */}
    </div>
  );
};

export default Folder;
