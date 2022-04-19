import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import "./Notelist.css";

const NoteList = ({ note, handleDelete, handleAddNote, handleEdit }) => {
  return (
    <div>
      <AddNote handleAddNote={handleAddNote} />
      <div className="notelist-body">
        {note.map((item, index) => (
          <Note
            key={index}
            id={item.id}
            title={item.title}
            body={item.body}
            date={item.date}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
