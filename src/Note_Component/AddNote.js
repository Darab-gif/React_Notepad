import React, { useState } from "react";
import "./AddNote.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [title, setTitle] = useState("");
  const charLimit = 300;

  const handleChange = (ev) => {
    if (charLimit - ev.target.value.length >= 0) {
      setNoteText(ev.target.value);
    }
  };

  const handleTitle = (ev) => {
    setTitle(ev.target.value);
  };

  const handleSubmit = (ev) => {
    handleAddNote(title, noteText);
    ev.preventDefault();
    setNoteText("");
  };
  return (
    <div className="note-body">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="title">
          Title
        </label>
        <br />
        <input
          type="text"
          id="title"
          className="title"
          onChange={handleTitle}
        />
        <br />
        <br />
        <label htmlFor="body" className="note">
          Note
        </label>
        <br />
        <textarea
          name=""
          id="body"
          cols="30"
          value={noteText}
          rows="10"
          onChange={handleChange}
        ></textarea>
        <br />
        <div className="note-foot">
          <span>{charLimit - noteText.length}</span> Remaining
        </div>
        <button onClick={() => handleAddNote}>Save Note</button>
      </form>
    </div>
  );
};

export default AddNote;
