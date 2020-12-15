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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      Dropdown
    </div>
  );
};

export default Dropdown;
