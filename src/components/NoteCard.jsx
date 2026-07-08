import {
  Star,
  Archive,
  Trash2,
  Pencil,
} from "lucide-react";

function NoteCard({
  note,
  editNote,
  deleteNote,
  favoriteNote,
  archiveNote,
}) {
  return (
    <div className="bg-[#2b2c2f] border border-gray-700 rounded-xl p-5 hover:shadow-lg transition">

      {/* Title */}
      <h2 className="text-xl font-bold text-white">
        {note.title}
      </h2>

      {/* Description */}
      <p className="mt-3 text-gray-300">
        {note.note}
      </p>

      {/* Status */}
      <div className="flex flex-wrap gap-2 mt-4">

        {note.favorite && (
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs">
            ⭐ Favorite
          </span>
        )}

        {note.archive && (
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
            📦 Archive
          </span>
        )}

        {note.trash && (
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs">
            🗑 Trash
          </span>
        )}

      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">

        <button
          onClick={() => editNote(note.id)}
          className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => favoriteNote(note.id)}
          className="p-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black"
        >
          <Star size={18} />
        </button>

        <button
          onClick={() => archiveNote(note.id)}
          className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <Archive size={18} />
        </button>

        <button
          onClick={() => deleteNote(note.id)}
          className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}

export default NoteCard;