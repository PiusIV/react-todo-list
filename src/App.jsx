import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTasks = (task) => {
    setTasks((tasks) => [...tasks, task]);
  };

  const handleDeleteItem = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleToggleItem = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id !== id ? { ...task, packed: false } : task))
    );
  };

  return (
    <div className="app">
      <div className="content">
        <Header />
        <Form onAddTasks={handleAddTasks} />
        <TodoList
          tasks={tasks}
          onAddTasks={handleAddTasks}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
        <Footer tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
