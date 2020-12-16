import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="dropdown" style={{ marginLeft: "auto" }}>
      <button
        onClick={handleClick}
        onBlur={() => setDisplay(false)}
        className="dropbtn"
      >
        <div style={{ display: "flex", width: "110px" }}>
          <span>All</span>
          <span style={{ marginLeft: "auto" }}>v</span>
        </div>
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
