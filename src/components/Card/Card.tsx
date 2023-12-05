import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
// import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import dayjs from "dayjs";

import { CardData } from "../../lib/types";
import ButtonsUtility from "../ButtonsUtility/ButtonsUtility";
import "../../colors.scss";
import "./Card.scss";

const Card = ({
  id,
  description,
  date_modified,
  complete,
  is_optional,
  deleteCard,
  cardUpdate,
}: CardData) => {
  const [textfield, setTextfield] = useState(description ?? "");
  const [completeState, setComplete] = useState(complete);
  const { attributes, listeners, setActivatorNodeRef, setNodeRef, transform } =
    useSortable({
      id: id,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.stopPropagation();
    // event.preventDefault();
    setTextfield(event.target.value);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`card color-light card-${is_optional ? "optional" : ""}`}
      id={id.toString()}
      {...attributes}
    >
      <button
        className={`label label-${completeState ? "complete" : "incomplete"}`}
        onClick={() => {setComplete(!completeState); cardUpdate()}}
        title="Complete"
      >
        <span className="label-text font-large">{!completeState ? "Complete?" : "Incomplete?"}</span>
      </button>
    <form onSubmit={(event) => {event.preventDefault(); cardUpdate()}}>
        <span className="card-field-container">
          <textarea
            className="font-small"
            placeholder="Insert field"
            name="card-field"
            value={textfield}
            onChange={handleChange}
            wrap="soft"
            maxLength={200}
          />
          <p className="card-date-modified font-smaller">
            {`${dayjs(date_modified).format("MMM. DD, YYYY hh:mm A")}`}
          </p>
        </span>
        <ButtonsUtility
          color="light"
          direction="column"
          dndRef={setActivatorNodeRef}
          dndListeners={listeners}
          handleDelete={() => {
            deleteCard(id);
          }}
        />
      </form>
    </div>
  );
};

export default Card;
