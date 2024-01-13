import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ searchResults }) => {
  if (!searchResults.length) {
    return (
      <p className="search-info">
        Please enter a relevant search term to return image results from Nasa's
        API
      </p>
    );
  } else {
    return (
      <>
        {searchResults.map((image) => (
          <div>
            <img className="card-image" src={image} alt="List of results" />
          </div>
        ))}
      </>
    );
  }
};

export default SearchResults;
