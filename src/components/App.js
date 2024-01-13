import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="app">
      <header className="header">
        <img
          className="nasa-logo"
          src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
          alt="nasaLogo"
        />
      </header>
      <main>
        <section>
          <Search setSearchResults={setSearchResults} />
        </section>
        <section>
          <div className="search-results">
            <SearchResults searchResults={searchResults} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
