import { Star, Archive, Trash2 } from "lucide-react";

function Favorite({ notes, setNotes }) {
  const favoriteNotes = notes.filter((note) => note.favorite);

  const removeFavorite = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, favorite: false }
          : note
      )
    );
  };

  const archiveNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              archive: true,
              favorite: false,
            }
          : note
      )
    );
  };

  const trashNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              trash: true,
              favorite: false,
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
        <p className="text-gray-400 text-center">
          No Favorite Notes
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favoriteNotes.map((note) => (
            <div
              key={note.id}
              className="bg-[#2b2c2f] rounded-xl border border-gray-700 p-5"
            >
              <h2 className="text-white text-xl font-bold">
                {note.title}
              </h2>

              <p className="text-gray-300 mt-3">
                {note.note}
              </p>

              <div className="flex gap-3 mt-6">

                {/* Remove Favorite */}
                <button
                  onClick={() => removeFavorite(note.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-lg"
                >
                  <Star size={18} />
                </button>

                {/* Archive */}
                <button
                  onClick={() => archiveNote(note.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                >
                  <Archive size={18} />
                </button>

                {/* Trash */}
                <button
                  onClick={() => trashNote(note.id)}
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