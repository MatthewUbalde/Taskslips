import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  closestCorners,
  useDraggable,
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
import CardAdd from "../Card/CardAdd";
import DragHandle from "../DragHandle/DragHandle";
import "./Folder.scss";

const Folder = ({ id, title, cards }: FolderData) => {
  const [currentCards, setCurrentCards] = useState(cards);
  const [activeId, setActiveId] = useState<string | number>(0);
  const { setNodeRef } = useDroppable({
    id: id,
  });

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id === over?.id) return;
    setCurrentCards((value) => {
      if (value === undefined) return value;

      const oldIndex = value.findIndex((card) => card.id === active.id);
      const newIndex = value.findIndex((card) => card.id === over?.id);
      return arrayMove(value, oldIndex, newIndex);
    });

    setActiveId(0);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newCardData: CardData = {
      id: uuidv4(),
      date_modified: Date.now(),
      is_optional: false,
    };
    setCurrentCards([...currentCards, newCardData]);
  };

  return (
    <div className="folder">
      <FolderTitle
        title={title}
        maxLength={20}
        cardsAmount={currentCards?.length}
      />
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="folder-container" ref={setNodeRef}>
          {currentCards.length !== 0 && (
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
          )}
          <DragOverlay>
            {activeId ? (
              <div className="card card-temp font-large">
                Move!
                <DragHandle color="dark" />
              </div>
            ) : null}
          </DragOverlay>

          <CardAdd onClick={handleClick} />
        </div>
      </DndContext>
      <DragHandle color="light" />
    </div>
  );
};

export default Folder;
