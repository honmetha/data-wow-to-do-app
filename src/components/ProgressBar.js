import React from "react";

const styles = {
  component: {
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
    width: "50%",
    borderRadius: "999px",
  },
};

const ProgressBar = () => {
  return (
    <div style={styles.component}>
      <div style={{ fontSize: "25px", marginBottom: "0.5rem" }}>
        <strong>Progress</strong>
      </div>
      <div style={styles.progressBar}>
        <div style={styles.progressing}></div>
      </div>
      <div style={{ fontSize: "16px" }}>12 completed</div>
    </div>
  );
};

export default ProgressBar;
