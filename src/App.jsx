import Header from "./shared/Header";
import MoviesList from "./home/MoviesList";
import DetailedMoviesList from "./movies/DetailedMoviesList";
import FullMovie from "./movie/FullMovie";
import TheaterList from "./theaters/TheaterList";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies" element={<DetailedMoviesList />} />
        <Route path="/movies/:movieId" element={<FullMovie />} />
        <Route path="/theaters" element={<TheaterList />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
