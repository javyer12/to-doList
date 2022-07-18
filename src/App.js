import { useState } from "react";
import { nanoid } from "nanoid";
import { ToDo } from "./components/ToDo";
import { Form } from "./components/Form";
import { FilterButton } from "./components/FilterButton";

export function App(props) {
  const [tasks, setTask] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTask(updatedTasks);
  }
  const taskList = tasks.map((task) => (
    <ToDo
      name={task.name}
      completed={task.completed}
      ID={task.id}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  function addTask(name) {
    if (name === " ") {
      alert("No task inserted");
    } else {
      const newTask = { id: "todo" + nanoid(), name: name, completed: false };
      setTask([...tasks, newTask]);
    }
  }

  function editTask(id, newName) {
    console.log(newName);

    const editedTask = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    console.log(editedTask);
    setTask(editedTask);
  }

  function deleteTask(id) {
    const remainingTask = tasks.filter((task) => id !== task.id);
    setTask(remainingTask);
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>Do List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading"> {headingText}</h2>
      <ul
        // role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
