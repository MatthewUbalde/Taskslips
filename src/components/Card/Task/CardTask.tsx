import React, { useState } from "react";
// import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import dayjs from "dayjs";

import { CardTaskData } from "../../../lib/types";
import Checkbox from "../Checkbox/Checkbox";
import "./CardTask.scss";
import { useSortable } from "@dnd-kit/sortable";

const CardTask = ({ id, body, date_modified, completed }: CardTaskData) => {
  const [textfield, setTextfield] = useState(body);
  const { attributes, listeners, setNodeRef, transform } = useSortable ({
    id: id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const onChangeTextfield = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextfield(event.target.value);
  };

  return (
    <form
      ref={setNodeRef}
      style={style}
      className="card-task"
      id={id.toString()}
    >
      <div className="label" />
      <div className="container">
        <textarea
          placeholder="body"
          value={textfield}
          onChange={onChangeTextfield}
        />
        <p className="card-date-modified small-text">
          {`Created: ${dayjs(date_modified).format("MMM. DD, YYYY")}`}
        </p>
      </div>
      <Checkbox isCompleted={completed}/>
      <button {...listeners} {...attributes}/>
    </form>
  );
};

export default CardTask;
