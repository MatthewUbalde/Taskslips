import React, { useState } from "react";
import dayjs from "dayjs";

import "./CardTask.scss";
import Checkbox from "../Checkbox/Checkbox";

const CardTask = ({ id, body, date_modified, completed }: CardTaskData) => {
  const [textfield, setTextfield] = useState(body);
  
  const onChangeTextfield = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextfield(event.target.value);
  }

  return (
    <form className="card-task" id={id}>
      <div className="label" />
      <div className="container">
        <textarea placeholder="body" value={textfield} onChange={onChangeTextfield}/>
        <p className="card-date-modified small-text">
          {`Created: ${dayjs(date_modified).format("MMM. DD, YYYY")}`}
        </p>
      </div>
      <Checkbox isCompleted={completed} />
    </form>
  );
};

export default CardTask;
