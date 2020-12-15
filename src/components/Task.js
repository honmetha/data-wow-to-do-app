import React, { useState } from "react";

const Task = ({ todo, index, completeTodo }) => {
  const [check, setCheck] = useState(todo.isCompleted);

  const handleChange = () => {
    setCheck(!check);
    completeTodo(index);
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "9999px",
        padding: "10px",
      }}
    >
      <label className="container">
        <input type="checkbox" onChange={handleChange} checked={check} />
        <span className="checkmark"></span>
      </label>
      <span style={{ textDecoration: check ? "line-through" : "" }}>
        {todo.text}
      </span>{" "}
      + ellipsis
    </div>
  );
};

export default Task;
