import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import Task from "./components/Task";
import AddTodoInput from "./components/AddTodoInput";
import Dropdown from "./components/Dropdown";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: true,
    },
    {
      text: "Build really cool todo app",
      isCompleted: true,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const editTodo = (index) => {};

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completedCount = todos.filter((todo) => todo.isCompleted === true)
    .length;

  return (
    <div className="App">
      <Card>
        <ProgressBar todos={todos} completedCount={completedCount} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          {/* use space between */}
          <span style={{ fontSize: "24px", fontWeight: "500" }}>Tasks</span>
          <Dropdown />
        </div>
        {todos.map((todo, index) => (
          <Task
            key={index}
            index={index}
            todo={todo}
            editTodo={editTodo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <AddTodoInput addTodo={addTodo} />
      </Card>
    </div>
  );
}

export default App;
