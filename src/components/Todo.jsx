import React, { useCallback, useState } from "react";
import gsap from "gsap";

const Task = ({ task, onDeleteClick }) => {
  const { id, text } = task;

  return (
    <div className={"task"}>
      <div>{id}</div>
      <div>{text}</div>
      <button onClick={(event) => onDeleteClick(event, id)}>delete</button>
    </div>
  );
};

const Todo = () => {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState(() => [
    {
      id: 0,
      text: "do homework",
    },
    {
      id: 1,
      text: "finish university",
    },
    { id: 2, text: "pass exam" },
  ]);

  const onDeleteClick = useCallback(
    async (event, id) => {
      const taskParent = event.target.parentNode;
      await gsap.to(taskParent, {
        duration: 0.3,
        opacity: 0,
        ease: "power3.easeOut",
        x: 40,
      });

      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
    },
    [tasks]
  );

  const onTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.length === 0) return;
    const task = { id: Date.now(), text: taskText };
    setTasks((state) => [...state, task]);
    setTaskText("");
  };

  return (
    <div className="tasks">
      <div className="tasksInput">
        <input value={taskText} onChange={onTaskTextChange} type="text" />
        <button onClick={handleAddTask}>Add</button>
      </div>

      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => (
          <Task key={task.id} onDeleteClick={onDeleteClick} task={task} />
        ))}
    </div>
  );
};

export default Todo;
