import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";

library.add(faSearch);
const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <input type="text" onChange={(ev) => handleSearch(ev.target.value)} />
      <span>
        <FontAwesomeIcon
          className="font"
          icon={faSearch}
          style={{ fontWeight: "100" }}
        />
      </span>
    </div>
  );
};

export default Search;
