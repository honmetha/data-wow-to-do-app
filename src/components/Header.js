import React, { useState } from "react";
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
              <svg
                width="17"
                height="17"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.50423 5.4209L6.99998 7.92515L4.49573 5.4209L3.6709 6.24573L6.99998 9.57482L10.3291 6.24573L9.50423 5.4209Z"
                  fill="black"
                />
              </svg>
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
