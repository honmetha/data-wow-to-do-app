import React, { useState } from "react";

const AddTodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "9999px",
        padding: "10px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Add to do..."
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddTodoInput;
