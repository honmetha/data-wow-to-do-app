import "./App.css";
import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import Task from "./components/Task";
import AddTodoInput from "./components/AddTodoInput";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <Card>
        <ProgressBar />
        <div>
          Tasks and <Dropdown />
        </div>
        <Task />
        <Task />
        <Task />
        <Task />
        <AddTodoInput />
      </Card>
    </div>
  );
}

export default App;
