import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";

function Home({
  notes,
  addNote,
  setNotes,
  changeColor,
}) {
  // Favorite
  const favoriteNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              favorite: !note.favorite,
            }
          : note
      )
    );
  };

  // Archive
  const archiveNote = (id) => {
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

  // Trash
  const deleteNote = (id) => {
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

  // Edit (placeholder)
  const editNote = (id) => {
    alert(`Edit note: ${id}`);
  };

  return (
    <div>
      <NoteForm addNote={addNote} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-6">

        {notes.filter((note) => !note.archive && !note.trash).length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">
            No Notes Added
          </p>
        ) : (
          notes
            .filter((note) => !note.archive && !note.trash)
            .map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                editNote={editNote}
                deleteNote={deleteNote}
                favoriteNote={favoriteNote}
                archiveNote={archiveNote}
                changeColor={changeColor}
              />
            ))
        )}

      </div>
    </div>
  );
}

export default Home;