import { useState } from "react";
import {
  Star,
  Archive,
  Trash2,
  Pencil,
  Palette,
} from "lucide-react";

const colors = [
  "#2b2c2f",
  "#f28b82",
  "#fbbc04",
  "#fff475",
  "#ccff90",
  "#a7ffeb",
  "#cbf0f8",
  "#aecbfa",
  "#d7aefb",
];

function NoteCard({
  note,
  editNote,
  deleteNote,
  favoriteNote,
  archiveNote,
  changeColor,
}) {
  const [showPalette, setShowPalette] = useState(false);

  return (
    <div
      style={{ backgroundColor: note.color }}
      className="relative border border-gray-700 rounded-xl p-5 transition-all duration-300"
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-white">
        {note.title}
      </h2>

      {/* Note */}
      <p className="mt-3 text-gray-200">
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

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6">

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

        {/* Palette */}
        <button
          onClick={() => setShowPalette(!showPalette)}
          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white"
        >
          <Palette size={18} />
        </button>

      </div>

      {/* Color Picker */}
      {showPalette && (
        <div className="absolute bottom-16 right-4 bg-[#202124] border border-gray-600 rounded-xl p-3 shadow-xl">

          <div className="grid grid-cols-3 gap-2">

            {colors.map((color) => (
              <button
                key={color}
                onClick={() => {
                  changeColor(note.id, color);
                  setShowPalette(false);
                }}
                className="w-8 h-8 rounded-full border-2 border-white"
                style={{ backgroundColor: color }}
              />
            ))}

          </div>

        </div>
      )}
    </div>
  );
}

export default NoteCard;