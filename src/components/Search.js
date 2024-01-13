import React, { useRef, useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();
  const buttonRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          aria-label={"input for search "}
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          aria-label={"find image results button"}
          ref={buttonRef}
          className="search-btn"
          type="submit"
        >
          Find Images!
        </button>
      </form>
    </div>
  );
};

export default Search;
