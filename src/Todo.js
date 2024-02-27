import React, { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState(["Bantuin emak"]);
  const [task, setTask] = useState("");

  const addTask = () => {
    const storeTask = task;

    setTasks((tks) => [...tks, storeTask]);
    setTask("");
  };
  const taskinputTrack = (target) => {
    setTask((tk) => (tk = target.target.value));
  };
  const moveUp = (key) => {
    if (key > 0 && key < tasks.length) {      
      const storeArray = [...tasks];
      const storeElement = storeArray[key];
      [storeArray[key], storeArray[key - 1]] = [
        storeArray[key - 1],
        storeElement,
      ];
  
      setTasks((tks) => (tks = storeArray));
    }
  };
  const moveDown = (key) => {
    if (key < tasks.length - 1) {      
      const storeArray = [...tasks];
      const storeElement = storeArray[key];
      [storeArray[key], storeArray[key + 1]] = [
        storeArray[key + 1],
        storeElement,
      ];
  
      setTasks((tks) => (tks = storeArray));
    }
  };
  const delTask = (key) => {
    setTasks((tks) => tks.filter((_, i) => i !== key));
  };

  return (
    <>
      <div className="TodoApp">
        <div className="todo-header">
          <h1>To do</h1>
        </div>
        <div className="todo-body">
          <div className="todo-input">
            <input
              type="text"
              placeholder="Cuci piring..."
              className="todo-input-form"
              value={task}
              onChange={taskinputTrack}
            />
            <button className="button todo-input-button-add" onClick={addTask}>
              ➕
            </button>
          </div>
          <div className="todo-tasks">
            <ul className="todo-tasks-ul">
              {tasks.map((x, id) => (
                <li className="task" key={id}>
                  <p className="task-name">{x}</p>
                  <div className="task-buttons">
                    <button
                      className="button task-button-moveup"
                      onClick={() => moveUp(id)}
                    >
                      ⬆️
                    </button>
                    <button
                      className="button task-button-movedown"
                      onClick={() => moveDown(id)}
                    >
                      ⬇️
                    </button>
                    <button
                      className="button task-button-delete"
                      onDoubleClick={() => delTask(id)}
                    >
                      🗑️
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
