import { RotateCcw, Star, Trash2 } from "lucide-react";

function Archive({ notes, setNotes }) {
  const archiveNotes = notes.filter((note) => note.archive);

  // Restore Note
  const restoreNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              archive: false,
            }
          : note
      )
    );
  };

  // Move to Favorite
  const moveToFavorite = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              archive: false,
              favorite: true,
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
              archive: false,
              trash: true,
            }
          : note
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-blue-500 mb-8">
        📦 Archive Notes
      </h1>

      {archiveNotes.length === 0 ? (
        <p className="text-center text-gray-400 text-xl">
          No Archived Notes
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {archiveNotes.map((note) => (
            <div
              key={note.id}
              className="bg-[#2b2c2f] border border-gray-700 rounded-xl p-5"
            >
              <h2 className="text-white text-xl font-bold">
                {note.title}
              </h2>

              <p className="text-gray-300 mt-3">
                {note.note}
              </p>

              <div className="flex gap-3 mt-6">

                {/* Restore */}
                <button
                  onClick={() => restoreNote(note.id)}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  <RotateCcw size={18} />
                  Restore
                </button>

                {/* Favorite */}
                <button
                  onClick={() => moveToFavorite(note.id)}
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg"
                >
                  <Star size={18} />
                  Favorite
                </button>

                {/* Trash */}
                <button
                  onClick={() => moveToTrash(note.id)}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  <Trash2 size={18} />
                  Trash
                </button>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Archive;