import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await fetch("http://localhost:3000/api/tasks");
    const data = await response.json();

    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async (title) => {
    await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });

    getTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    });

    getTasks();
  };

  const completeTask = async (task) => {
    await fetch(`http://localhost:3000/api/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    });

    getTasks();
  };

  const editTask = async (task) => {

    const newTitle = prompt("Edit your task:", task.title);

    if (!newTitle || newTitle.trim() === "") {
      return;
    }

    await fetch(`http://localhost:3000/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    });

    getTasks();

  };

  return (
    <div className="app">
      <h1>My Tasks</h1>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
