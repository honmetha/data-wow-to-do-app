import React, { useState } from "react";

const Task = ({ todo, index, editTodo, completeTodo, removeTodo }) => {
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
        marginBottom: "1rem"
      }}
    >
      <label className="container">
        <input type="checkbox" onChange={handleChange} checked={check} />
        <span className="checkmark"></span>
      </label>
      <span style={{ textDecoration: check ? "line-through" : "" }}>
        {todo.text}
      </span>{" "}
      <button>edit</button>
      <button onClick={() => removeTodo(index)}>delete</button>
    </div>
  );
};

export default Task;
