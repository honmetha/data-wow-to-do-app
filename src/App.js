import { useState, useEffect } from "react";
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
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    const newCompletedTasks = todos.reduce(
      (acc, todo) => (todo.isCompleted ? (acc = acc + 1) : acc),
      0
    );
    setCompletedTasks(newCompletedTasks);
  }, [todos]);

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

  return (
    <div className="App">
      <Card>
        <ProgressBar todos={todos} completedTasks={completedTasks} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
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
