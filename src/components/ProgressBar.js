import React from "react";

const styles = {
  main: {
    backgroundColor: "#E07C7C",
    borderRadius: "20px",
    padding: "15px",
    color: "white",
    marginBottom: "1rem",
  },
  progressBar: {
    backgroundColor: "#3B3B3B",
    height: "7.5px",
    borderRadius: "999px",
    marginBottom: "0.5rem",
  },
  progressing: {
    backgroundColor: "white",
    height: "7.5px",
    borderRadius: "999px",
  },
};

const ProgressBar = ({ completedCount, todos }) => {
  const widthPercentage = (100 * completedCount) / todos.length + "%";
  return (
    <div style={styles.main}>
      <div style={{ fontSize: "25px", marginBottom: "0.5rem" }}>
        <strong>Progress</strong>
      </div>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progressing, width: widthPercentage }}></div>
      </div>
      <div style={{ fontSize: "16px" }}>{completedCount} completed</div>
    </div>
  );
};

export default ProgressBar;
