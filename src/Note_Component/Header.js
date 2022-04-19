import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

library.add(faBookOpen);

const Header = ({ handleToogleMode, toggle }) => {
  return (
    <div className="header-body">
      <h1 className="header-head">
        <FontAwesomeIcon icon={faBookOpen} style={{ color: "#3dde45" }} />
        <strong>My</strong> <span style={{ color: "#3dde45" }}>Notepad</span>
      </h1>

      <input
        type="checkbox"
        className={toggle}
        onClick={() => handleToogleMode((id) => !id)}
      />
    </div>
  );
};

export default Header;
