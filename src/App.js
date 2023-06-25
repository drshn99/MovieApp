import React, { useEffect, useState } from "react";

import "./App.css";
import Heading from "./Heading";
import Cards from "./Cards";
const App = () => {
  const [movies, setMovies] = useState([]);

  const API_url = "http://www.omdbapi.com?apikey=7c2d4bce";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <>
      <Heading searchMovies={searchMovies} />
      {/* {movies.map((movie) => (
        <Cards movie={movie} />
      ))} */}
      {movies?.length > 0 ? <Cards movies={movies} /> : <h3>No movies found</h3>}
    </>
  );
};

export default App;
