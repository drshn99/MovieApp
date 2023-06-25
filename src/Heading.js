import React from "react";
import { useState } from "react";
import "./Heading.css";
function Heading(props) {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="title">MOVIELAND</div> <br />
      <div className="searchbar">
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></textarea>
        <button
          className="btn button-24"
          onClick={() => props.searchMovies(search)}
        >
          search
        </button>
      </div>
    </>
  );
}

export default Heading;
