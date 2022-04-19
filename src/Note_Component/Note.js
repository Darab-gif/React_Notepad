import React from "react";
import "./Note.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPencil, faTrashCan);

const Note = ({ id, title, body, date, handleDelete, handleEdit }) => {
  return (
    <div>
      <div className="notelist-item">
        <div className="notelist-head">
          <h1>{title}</h1>
          <div className="span">
            <div className="pencil" onClick={() => handleEdit(id, title, body)}>
              <FontAwesomeIcon icon={faPencil} />
            </div>
            <div className="can" onClick={() => handleDelete(id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </div>
          </div>
        </div>

        <div className="notelist-content">
          <div>{body}</div>
          <div className="date">
            <small>{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
