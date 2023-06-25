import React from "react";
import "./Card.css";

function Cards({ movies }) {
  return (
    <>
      <div className="container ">
        {movies.map((movie) => (
          <div className="card ">
            <div className="desc ">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "http://via.placeholder.com/600"
                }
                alt=""
                srcSet=""
              />
              <p>{movie.Type.toUpperCase()}</p>
              <p>{movie.Title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
