import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
// import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import dayjs from "dayjs";

import Checkbox from "../Checkbox/Checkbox";
import { CardTaskData } from "../../../lib/types";
import "./CardTask.scss";

const onSubmit = () => {
  // Save it?
}

const CardTask = ({ id, body, date_modified, completed }: CardTaskData) => {
  const [textfield, setTextfield] = useState(body);
  const { attributes, listeners, setNodeRef, transform } = useSortable ({
    id: id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const onChangeTextfield = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setTextfield(event.target.value);
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="card-task"
      id={id.toString()}
      {...listeners} 
      {...attributes}
    >
      <div className="label" />
      <form className="container" onSubmit={onSubmit}>
        <textarea
          placeholder="body"
          value={textfield}
          onChange={onChangeTextfield}
        />
        <p className="card-date-modified small-text">
          {`Created: ${dayjs(date_modified).format("MMM. DD, YYYY")}`}
        </p>
      </form>
      <Checkbox isCompleted={completed}/>
    </div>
  );
};

export default CardTask;
