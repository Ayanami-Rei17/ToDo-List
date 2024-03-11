import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-header">TO-DO LIST</h1>
      <div className="todo-list-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="todo-list-input"
        />
        <button onClick={addTask} className="todo-list-add-button">
          Add
        </button>
      </div>{" "}
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-list-item">
            <span className="todo-list-text">{task}</span>
            <button
              className="todo-list-remove-button"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
