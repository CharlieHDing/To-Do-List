import React from "react";

function ToDoList(props) {
  const onClick = (event) => {
    const targetTask = event.target.parentNode.id;
    const targetIndex = props.listItems.findIndex((task) => {
      return task.description === targetTask;
    });
    props.removeTask(targetIndex);
  };
  return (
    <ul>
      {props.listItems.map((task) => {
        return (
          <li
            key={task.description}
            className="container"
            id={task.description}
          >
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <p>{task.priority}</p>
            <button onClick={onClick}>Delete Note!</button>
          </li>
        );
      })}
    </ul>
  );
}

export default ToDoList;
