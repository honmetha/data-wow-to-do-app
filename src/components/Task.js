import React from "react";

const Task = ({ todo, index, editTodo, completeTodo, removeTodo }) => {
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
        <input type="checkbox" onChange={() => completeTodo(index)} checked={todo.isCompleted} />
        <span className="checkmark"></span>
      </label>
      <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
      </span>{" "}
      <button>edit</button>
      <button onClick={() => removeTodo(index)}>delete</button>
    </div>
  );
};

export default Task;
