import React, { useState } from 'react';
import './App.css';

function App() {
  // State for the new task and the task list
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Handle task input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Add task to the list
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); // Reset the input field
    }
  };

  // Handle task deletion
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Input Field and Add Button */}
      <div>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
