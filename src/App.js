import React, { useState, useEffect } from "react";
import Header from "./Note_Component/Header";
import NoteList from "./Note_Component/NoteList";
import Search from "./Note_Component/Search";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Book",
      body: "This is my first note",
      date: "12/3/2021",
    },
    {
      id: 2,
      title: "Note 2",
      body: "This is my second note",
      date: "15/1/2021",
    },
  ]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("key"));
    if (getItem) setNotes(getItem);
  }, []);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(notes));
  }, [notes]);

  const Del = (id) => {
    const del = notes.filter((item) => item.id !== id);
    setNotes(del);
  };

  const Edit = (id, title, body) => {
    const edits = notes.filter((item) => item.id === id);
    const newNote = {
      id: id,
      title: title,
      body: body,
    };
    console.log(...edits, newNote);
  };

  const AddNote = (title, body) => {
    const d = new Date();
    const idRandom = Math.round(Math.random() * 30);
    const note = {
      id: idRandom,
      title: title,
      body: body,
      date: d.toLocaleDateString(),
    };

    const newNote = [...notes, note];
    setNotes(newNote);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <Header handleToogleMode={setDarkMode} toggle="toggle" />
      <Search handleSearch={setSearch} />
      <NoteList
        note={notes.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )}
        handleDelete={Del}
        handleAddNote={AddNote}
        handleEdit={Edit}
      />
    </div>
  );
};

export default App;
