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
  input: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "17px",
  },
  saveButton: {
    width: "64px",
    height: "36px",
    backgroundColor: "#585292",
    border: "none",
    outline: "none",
    borderRadius: "99px",
    color: "white",
    marginLeft: "auto",
  },
};

const Task = ({ todo, index, editTodo, completeTodo, removeTodo }) => {
  const [display, setDisplay] = useState(false);
  const [isEditing, setIsEditing] = useState();
  const [value, setValue] = useState(todo.title);

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(index, value);
    setValue("");
    setIsEditing(false);
  };

  return isEditing ? (
    <div style={{ ...styles.main, padding: "6px 6px 6px 15px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={styles.input}
        />
      </form>
      <button onClick={handleSubmit} style={styles.saveButton}>
        Save
      </button>
    </div>
  ) : (
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
        style={{ marginLeft: "auto" }}
        className="dropdown"
      >
        <EllipsisSVG />
        <div
          className="dropdown-content"
          style={{ display: display ? "" : "none" }}
        >
          <div onClick={() => setIsEditing(true)}>edit</div>
          <div onClick={() => removeTodo(index)}>delete</div>
        </div>
      </span>
    </div>
  );
};

export default Task;
