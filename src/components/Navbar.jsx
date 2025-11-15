import { Link, NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react"; // lightweight icon lib

export default function Navbar({ theme, setTheme }) {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 text-sm font-medium transition-all ${
      isActive
        ? "text-black dark:text-white border-b-2 border-black dark:border-white"
        : "text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
    }`;

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <Link
        to="/"
        className="text-2xl font-light tracking-tight text-black dark:text-white"
      >
        FeelWellFurniture
      </Link>
      <div className="flex gap-6 items-center">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/collection" className={navLinkClass}>
          Collection
        </NavLink>
        <NavLink to="/reviews" className={navLinkClass}>
          Reviews
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>

        {/* Light/Dark toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
}
