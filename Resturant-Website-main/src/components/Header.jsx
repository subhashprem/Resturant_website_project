import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-gradient-to-r from-amber-900 to-amber-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-serif italic font-bold tracking-tight hover:text-amber-200 transition-colors duration-300"
        >
          Savory<span className="text-amber-300">Bites</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["/", "/menu", "/about", "/contact"].map((path, index) => {
            const labels = ["Home", "Menu", "About", "Contact"];
            return (
              <Link
                key={path}
                to={path}
                className="font-medium hover:text-amber-200 transition-colors duration-300 relative group"
              >
                {labels[index]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
          <Link
            to="/reserve"
            className="ml-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg"
          >
            Reserve
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-amber-800 transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center justify-center gap-4 bg-amber-900 py-6">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-white hover:text-amber-300 text-lg font-medium"
          >
            Home
          </Link>
          <Link
            to="/menu"
            onClick={toggleMenu}
            className="text-white hover:text-amber-300 text-lg font-medium"
          >
            Menu
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-white hover:text-amber-300 text-lg font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="text-white hover:text-amber-300 text-lg font-medium"
          >
            Contact
          </Link>
          <Link
            to="/reserve"
            className="ml-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg"
          >
            Reserve
          </Link>
        </div>
      )}
    </header>
  );
}
