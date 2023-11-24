import React from "react";
import dayjs from "dayjs";

import "./CardTask.scss";
import Checkbox from "../Checkbox/Checkbox";

const CardTask = ({ id, children, date_modified, completed }: CardTaskData) => {
  return (
    <div className="card-task" id={id}>
      <div className="label" />
      <div className="container">
        <p className="card-text">{children}</p>
        <p className="card-date-modified small-text">
          {`Created: ${dayjs(date_modified).format("MMM. DD, YYYY")}`}
        </p>
      </div>
      <Checkbox isCompleted={completed} />
    </div>
  );
};

export default CardTask;
