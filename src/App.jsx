import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add Note
  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  // Toggle Favorite
  const toggleFavorite = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, favorite: !note.favorite }
          : note
      )
    );
  };

  // Move to Archive
  const moveToArchive = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              archive: true,
              favorite: false,
              trash: false,
            }
          : note
      )
    );
  };

  // Move to Trash
  const moveToTrash = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              trash: true,
              archive: false,
              favorite: false,
            }
          : note
      )
    );
  };

  // Restore Note
  const restoreNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              favorite: false,
              archive: false,
              trash: false,
            }
          : note
      )
    );
  };

  // Delete Forever
  const deleteForever = (id) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#202124]">

        <Navbar />

        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={
              <Home
                notes={notes}
                addNote={addNote}
                setNotes={setNotes}
                toggleFavorite={toggleFavorite}
                moveToArchive={moveToArchive}
                moveToTrash={moveToTrash}
              />
            }
          />

          {/* Favorite */}
          <Route
            path="/favorite"
            element={
              <Favorite
                notes={notes}
                setNotes={setNotes}
                toggleFavorite={toggleFavorite}
                moveToArchive={moveToArchive}
                moveToTrash={moveToTrash}
              />
            }
          />

          {/* Archive */}
          <Route
            path="/archive"
            element={
              <Archive
                notes={notes}
                setNotes={setNotes}
                restoreNote={restoreNote}
                moveToTrash={moveToTrash}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          {/* Trash */}
          <Route
            path="/trash"
            element={
              <Trash
                notes={notes}
                setNotes={setNotes}
                restoreNote={restoreNote}
                deleteForever={deleteForever}
              />
            }
          />

          {/* Settings */}
          <Route
            path="/settings"
            element={
              <div className="flex items-center justify-center h-[80vh]">
                <h1 className="text-4xl font-bold text-white">
                  ⚙️ Settings
                </h1>
              </div>
            }
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;