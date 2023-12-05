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
import CardBlank from "../Card/CardBlank";
import ButtonsUtility from "../ButtonsUtility/ButtonsUtility";
import "./Folder.scss";

const Folder = ({ id, title, cards, deleteFolder, completed_cards }: FolderData) => {
  const [currentCards, setCurrentCards] = useState(cards);
  const [cardsCompleted, setCardsCompleted] = useState(completed_cards)
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
      const oldIndex = value.findIndex((card) => card.id === active.id);
      const newIndex = value.findIndex((card) => card.id === over?.id);
      return arrayMove(value, oldIndex, newIndex);
    });

    setActiveId(0);
  };

  const deleteCard = (id: string | number) => {
    setCurrentCards((value) => {
      return value.filter((card) => card.id !== id);
    });
  };

  // Calls everytime a card submits
  const cardUpdate = () => {
    const cardCompletedAmt = currentCards.filter((card) => card.complete === true).length;
    setCardsCompleted(cardCompletedAmt)
    console.log("HA" + cardCompletedAmt)
  }

  const addCard = () => {
    const newCardData: CardData = {
      id: uuidv4(),
      date_modified: Date.now(),
      complete: false,
      is_optional: false,
      deleteCard: deleteCard,
      cardUpdate: cardUpdate,
    };
    setCurrentCards([...currentCards, newCardData]);
  };

  return (
    <div className="folder">
      <FolderTitle
        title={title}
        maxLength={20}
        cardsAmount={currentCards?.length}
        cardsComplete={cardsCompleted}
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
                  complete={card.complete}
                  is_optional={card.is_optional}
                  deleteCard={card.deleteCard}
                  cardUpdate={cardUpdate}
                />
              ))}
            </SortableContext>
          )}
          <DragOverlay dropAnimation={null}>
            {activeId ? <CardBlank>Move!</CardBlank> : null}
          </DragOverlay>
          <CardBlank
            handleClick={() => {
              addCard()
            }}
          >
            +
          </CardBlank>
        </div>
      </DndContext>
      <ButtonsUtility
        color="light"
        direction="row"
        handleDelete={() => deleteFolder(id)}
      />
    </div>
  );
};

export default Folder;
