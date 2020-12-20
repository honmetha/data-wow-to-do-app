import { useState, useEffect } from "react";
import "./App.scss";
import Axios from "axios";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTodoInput from "./components/AddTodoInput";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchTodos = () => {
      Axios.get("http://localhost:3001/todos").then((res) =>
        setTodos(res.data)
      );
    };
    fetchTodos();
  }, []);

  const addTodo = (title) => {
    const id = Math.floor(Math.random() * 100000000);
    const newTodos = [...todos, { id, title, completed: false }];
    Axios.post("http://localhost:3001/todos", { id, title, completed: false });
    setTodos(newTodos);
  };

  const editTodo = (index, value) => {
    Axios.patch(`http://localhost:3001/todos/${todos[index].id}`, {
      title: value,
    });
    const newTodos = [...todos];
    newTodos[index].title = value;
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    Axios.patch(`http://localhost:3001/todos/${todos[index].id}`, {
      completed: !newTodos[index].completed,
    });
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    Axios.delete(`http://localhost:3001/todos/${todos[index].id}`);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const filterTodos = (option) => {
    setFilter(option);
  };

  const completedCount = todos.filter((todo) => todo.completed === true).length;

  return (
    <div className="App">
      <Card>
        <ProgressBar todos={todos} completedCount={completedCount} />
        <Header filterTodos={filterTodos} />
        {todos
          .filter((todo) => {
            if (filter === "Done") return todo.completed;
            if (filter === "Undone") return !todo.completed;
            return todo;
          })
          .map((todo, index) => (
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
