import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Details from "./Components/Pages/Details/Details";
import Favourite from "./Components/Pages/Favourite/Favourite";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-item/:id" element={<Details />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
};

export default App;
