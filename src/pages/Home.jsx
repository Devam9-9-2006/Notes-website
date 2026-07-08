import NoteForm from "../components/NoteForm";
import { Star, Archive, Trash2 } from "lucide-react";

function Home({ notes, addNote, setNotes }) {
  const toggleFavorite = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, favorite: !note.favorite }
          : note
      )
    );
  };

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

  return (
    <div>
      <NoteForm addNote={addNote} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-6">

        {notes.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">
            No Notes Added
          </p>
        ) : (
          notes
            .filter((note) => !note.archive && !note.trash)
            .map((note) => (
              <div
                key={note.id}
                className="bg-[#2b2c2f] border border-gray-700 rounded-xl p-5"
              >
                <h2 className="text-xl font-bold text-white">
                  {note.title}
                </h2>

                <p className="text-gray-300 mt-3">
                  {note.note}
                </p>

                <div className="flex gap-2 mt-4">

                  <button
                    onClick={() => toggleFavorite(note.id)}
                    className={`p-2 rounded-lg ${
                      note.favorite
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    <Star size={18} />
                  </button>

                  <button
                    onClick={() => moveToArchive(note.id)}
                    className="p-2 rounded-lg bg-blue-600 text-white"
                  >
                    <Archive size={18} />
                  </button>

                  <button
                    onClick={() => moveToTrash(note.id)}
                    className="p-2 rounded-lg bg-red-600 text-white"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>
            ))
        )}

      </div>
    </div>
  );
}

export default Home;