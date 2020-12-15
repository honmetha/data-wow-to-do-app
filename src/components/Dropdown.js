import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="dropdown">
      <button
        onClick={handleClick}
        onBlur={() => setDisplay(false)}
        className="dropbtn"
      >
        Dropdown
      </button>
      <div
        id="myDropdown"
        className="dropdown-content"
        style={{ display: display ? "" : "none" }}
      >
        <a href="#all">All</a>
        <a href="#done">Done</a>
        <a href="#undone">Undone</a>
      </div>
    </div>
  );
};

export default Dropdown;
