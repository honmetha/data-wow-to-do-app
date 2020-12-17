import React, { useState } from "react";
import ArrowDropdownSVG from "../assets/ArrowDropdownSVG";
import "./Header.scss";

const Header = () => {
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState("All");
  console.log("value", value);

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleDropdownClick = (option) => {
    setValue(option);
    setDisplay(!display);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >
      <span style={{ fontSize: "24px", fontWeight: "500" }}>Tasks</span>
      <div className="dropdown">
        <button
          onClick={handleClick}
          // onBlur={() => setDisplay(false)}
          className="dropbtn"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "110px",
            }}
          >
            <span>{value}</span>
            <span>
              <ArrowDropdownSVG />
            </span>
          </div>
        </button>
        <div
          id="myDropdown"
          className="dropdown-content"
          style={{ display: display ? "" : "none" }}
        >
          <div onClick={() => handleDropdownClick("All")}>All</div>
          <div onClick={() => handleDropdownClick("Done")}>Done</div>
          <div onClick={() => handleDropdownClick("Undone")}>Undone</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
