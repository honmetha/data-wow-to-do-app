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

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Card>
        <ProgressBar todos={todos} completedTasks={completedTasks} />
        <div>
          Tasks
          <Dropdown />
        </div>
        {todos.map((todo, index) => (
          <Task
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <AddTodoInput addTodo={addTodo} />
      </Card>
    </div>
  );
}

export default App;
