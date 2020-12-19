import React, { useState } from "react";
import "./Task.scss";
import EllipsisSVG from "../assets/EllipsisSVG";

const styles = {
  main: {
    backgroundColor: "#FFFFFF",
    borderRadius: "9999px",
    padding: "10px",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
  },
};

const Task = ({ todo, index, editTodo, completeTodo, removeTodo }) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div style={styles.main}>
      <label className="container">
        <input
          type="checkbox"
          onChange={() => completeTodo(index)}
          checked={todo.completed}
        />
        <span className="checkmark"></span>
      </label>
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.title}
      </span>
      <span
        onClick={handleClick}
        style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        className="dropdown"
      >
        <EllipsisSVG />
        <div
          className="dropdown-content"
          style={{ display: display ? "" : "none" }}
        >
          <div onClick={() => editTodo(index)}>edit</div>
          <div onClick={() => removeTodo(index)}>delete</div>
        </div>
      </span>
    </div>
  );
};

export default Task;
