import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  Search,
  Bell,
  UserCircle2,
  StickyNote,
  Star,
  Archive,
  Trash2,
  Settings,
  X,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "All Notes",
      path: "/",
      icon: <StickyNote size={20} />,
    },
    {
      name: "Favorites",
      path: "/favorite",
      icon: <Star size={20} />,
    },
    {
      name: "Archive",
      path: "/archive",
      icon: <Archive size={20} />,
    },
    {
      name: "Trash",
      path: "/trash",
      icon: <Trash2 size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#202124] border-b border-gray-700 shadow-lg">

        <div className="flex items-center justify-between px-6 h-16">

          {/* Left */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-700"
            >
              <Menu className="text-white" />
            </button>

            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white">
              N
            </div>

            <h1 className="text-2xl font-bold text-white">
              NoteSpace
            </h1>

          </div>

          {/* Search */}

          <div className="hidden md:flex items-center bg-[#303134] rounded-xl w-[500px] px-4 py-2">

            <Search className="text-gray-400 mr-3" />

            <input
              type="text"
              placeholder="Search your notes..."
              className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
            />

          </div>

          {/* Right */}

          <div className="flex items-center gap-5">

            <Bell className="text-gray-300 hover:text-white cursor-pointer" />

            <UserCircle2
              size={35}
              className="text-gray-300 hover:text-white cursor-pointer"
            />

          </div>

        </div>

      </header>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-[#202124] border-r border-gray-700 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Sidebar Header */}

        <div className="flex items-center justify-between p-5 border-b border-gray-700">

          <h2 className="text-white text-xl font-bold">
            NoteSpace
          </h2>

          <button onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>

        </div>

        {/* Menu */}

        <nav className="mt-5 flex flex-col gap-2 px-3">

          {menuItems.map((item) => (

            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all

              ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }
              `}
            >

              {item.icon}

              <span>{item.name}</span>

            </Link>

          ))}

        </nav>

      </aside>
    </>
  );
}

export default Navbar;