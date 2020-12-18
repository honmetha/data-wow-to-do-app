import React, { useState } from "react";
import ArrowDropdownSVG from "../assets/ArrowDropdownSVG";
import "./Header.scss";

const styles = {
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "24px",
    fontWeight: "500",
  },
  dropdownMain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "110px",
  },
};

const Header = () => {
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState("All");

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleDropdownClick = (option) => {
    setValue(option);
    setDisplay(!display);
  };

  return (
    <div style={styles.main}>
      <span style={styles.text}>Tasks</span>
      <div className="dropdown">
        <button
          onClick={handleClick}
          // onBlur={() => setDisplay(false)}
          className="dropbtn"
        >
          <div style={styles.dropdownMain}>
            {value}
            <ArrowDropdownSVG />
          </div>
        </button>
        <div
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
