import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <AddTaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
