import { StarOff, Archive, Trash2 } from "lucide-react";

function Favorite({ notes, setNotes }) {
  const favoriteNotes = notes.filter(
    (note) => note.favorite && !note.archive && !note.trash
  );

  const removeFavorite = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, favorite: false }
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
              favorite: false,
              archive: true,
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
              favorite: false,
              trash: true,
            }
          : note
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        ⭐ Favorite Notes
      </h1>

      {favoriteNotes.length === 0 ? (
        <div className="text-center text-gray-400 text-xl mt-20">
          No Favorite Notes Found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteNotes.map((note) => (
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

                <button
                  onClick={() => removeFavorite(note.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-lg"
                >
                  <StarOff size={18} />
                </button>

                <button
                  onClick={() => moveToArchive(note.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                >
                  <Archive size={18} />
                </button>

                <button
                  onClick={() => moveToTrash(note.id)}
                  className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg"
                >
                  <Trash2 size={18} />
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;