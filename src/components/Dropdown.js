import React from "react";

const styles = {
  dropdown: { position: "relative", display: "inline-block" },
  "& a:hover": {
    backgroundColor: "#ddd",
  },
  dropbtn: {
    backgroundColor: "#3498DB",
    color: "white",
    padding: "16px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#2980B9",
    },
    "&:focus": {
      backgroundColor: "#2980B9",
    },
  },
  "dropdown-content": {
    display: "none",
    position: "absolute",
    backgroundColor: "#f1f1f1",
    minWidth: "160px",
    overflow: "auto",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
  },
};

const Dropdown = () => {
  return (
    <div style={styles.dropdown}>
      <button onClick="myFunction()" style={styles.dropbtn}>
        Dropdown
      </button>
      <div style={styles["dropdown-content"]}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Dropdown;
