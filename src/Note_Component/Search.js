import React from "react";

import "./Search.css";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        onChange={(ev) => handleSearch(ev.target.value)}
        placeholder="Search for your notes..."
      />
    </div>
  );
};

export default Search;
