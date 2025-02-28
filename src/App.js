import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieDetail from "./pages/MovieDetail";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
       <Helmet>
        <title>Movie Streaming Site</title>
        <meta name="description" content="Watch your favorite movies online." />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
};

export default App;
