import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => console.log(searchTerm)}>Search</button>
    </div>
  );
}

export default SearchBar;
