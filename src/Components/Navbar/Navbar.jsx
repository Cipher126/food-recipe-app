import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context";

const Navbar = () => {
  const { search, setSearchParams, handleSubmit } = useContext(GlobalContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto py-6 px-4 ">
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold">FoodRecipe</h2>

        <form onSubmit={handleSubmit} className="flex-1 mx-4 hidden sm:block">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearchParams(e.target.value)}
            placeholder="Enter items..."
            className="w-full lg:w-96 bg-white/75 p-3 px-6 rounded-full mx-75 outline-none shadow-lg shadow-red-100 focus:shadow-red-200"
          />
        </form>

        <ul className="hidden lg:flex gap-6 -ml-10">
          <li>
            <NavLink to="/" className="text-black hover:text-gray-700">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourite" className="text-black hover:text-gray-700">
              Favourites
            </NavLink>
          </li>
        </ul>

        <button
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      <form onSubmit={handleSubmit} className="sm:hidden mt-4">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearchParams(e.target.value)}
          placeholder="Enter items..."
          className="w-full bg-white/75 p-3 px-6 rounded-full outline-none shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <ul className="flex flex-col gap-6 mt-6">
              <li>
                <NavLink
                  to="/"
                  className="text-black hover:text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favourite"
                  className="text-black hover:text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Favourites
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
