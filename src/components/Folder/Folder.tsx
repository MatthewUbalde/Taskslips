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
import Card from "../Card/Card";
import FolderTitle from "./FolderTitle";
import CardAdd from "../Card/CardAdd";
import ButtonsUtility from "../ButtonsUtility/ButtonsUtility";
import "./Folder.scss";

const Folder = ({ id, title, cards }: FolderData) => {
  const [currentCards, setCurrentCards] = useState(cards);
  const [activeId, setActiveId] = useState<string | number>(0);
  const { setNodeRef } = useDroppable({
    id: id,
  });

  // let cardSelectionRef = useRef<string | number>(0);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id === over?.id) return;
    setCurrentCards((value) => {
      const oldIndex = value.findIndex((card) => card.id === active.id);
      const newIndex = value.findIndex((card) => card.id === over?.id);
      return arrayMove(value, oldIndex, newIndex);
    });

    setActiveId(0);
  };

  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newCardData: CardData = {
      id: uuidv4(),
      date_modified: Date.now(),
      is_optional: false,
    };
    setCurrentCards([...currentCards, newCardData]);
  };

  const deleteCard = (id: string | number) => {
    setCurrentCards((value) => {
      // How do I find the id?
      // const deleteIndex = value.findIndex((card) => card.id === id);
      return value.filter((card) => card.id === id);
    });
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
        <div className="card-container" ref={setNodeRef}>
          {currentCards.length !== 0 && (
            <SortableContext
              items={currentCards}
              strategy={verticalListSortingStrategy}
            >
              {currentCards.map((card) => (
                <Card
                  id={card.id}
                  key={card.id}
                  description={card.description}
                  date_modified={card.date_modified}
                  progression={card.progression}
                  importance={card.importance}
                  is_optional={card.is_optional}
                  deleteCard={deleteCard}
                />
              ))}
            </SortableContext>
          )}
          <DragOverlay>
            {activeId ? (
              <div className="card card-temp font-large">Move!</div>
            ) : null}
          </DragOverlay>
          <CardAdd onClick={handleAdd} />
        </div>
      </DndContext>
      <ButtonsUtility color="light" direction="row" />
    </div>
  );
};

export default Folder;
