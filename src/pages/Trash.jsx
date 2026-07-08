import { RotateCcw, Trash2 } from "lucide-react";

function Trash({ notes, setNotes }) {
  const trashNotes = notes.filter((note) => note.trash);

  // Restore Note
  const restoreNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              trash: false,
            }
          : note
      )
    );
  };

  // Delete Permanently
  const deleteForever = (id) => {
    setNotes((prev) =>
      prev.filter((note) => note.id !== id)
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-red-500 mb-8">
        🗑 Trash
      </h1>

      {trashNotes.length === 0 ? (
        <p className="text-center text-gray-400 text-xl">
          Trash is Empty
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {trashNotes.map((note) => (
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

                {/* Delete Forever */}
                <button
                  onClick={() => deleteForever(note.id)}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  <Trash2 size={18} />
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Trash;