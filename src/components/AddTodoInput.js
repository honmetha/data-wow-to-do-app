import React, { useState } from "react";

const styles = {
  main: {
    backgroundColor: "#FFFFFF",
    borderRadius: "9999px",
    padding: "10px 15px",
  },
  input: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "17px",
  },
};

const AddTodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div style={styles.main}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Add to do..."
          onChange={(e) => setValue(e.target.value)}
          style={styles.input}
        />
      </form>
    </div>
  );
};

export default AddTodoInput;
