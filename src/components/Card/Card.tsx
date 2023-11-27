import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
// import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import dayjs from "dayjs";

import { CardData } from "../../lib/types";
import "./Card.scss";

const onSubmit = () => {
  // Save it?
}

const CardTask = ({ id, description, date_modified, progression, importance, is_optional }: CardData) => {
  const [textfield, setTextfield] = useState(description);
  const { attributes, listeners, setNodeRef, transform } = useSortable ({
    id: id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setTextfield(event.target.value);
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`card card-${is_optional ? 'optional' : ''}`}
      id={id.toString()}
      {...listeners} 
      {...attributes}
    >
      <div className={`label label-${importance}`} />
      <div className={`label label-${progression}`} />
      <form onSubmit={onSubmit}>
        <textarea
          placeholder="Insert field"
          name="card-field"
          value={textfield}
          onChange={handleChange}
          wrap='soft'
        />
        <p className="card-date-modified small-text">
          {`Created: ${dayjs(date_modified).format("MMM. DD, YYYY")}`}
        </p>
      </form>
    </div>
  );
};

export default CardTask;
