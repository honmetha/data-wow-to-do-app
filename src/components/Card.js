import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        borderRadius: "20px",
        padding: "3rem 5rem",
        height: "620px",
        width: "720px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
