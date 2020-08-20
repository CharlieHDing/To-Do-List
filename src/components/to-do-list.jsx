import React from "react";

function ToDoList(props) {
  return (
    <ul>
      {props.listItems.map((task) => {
        return (
          <li key={task.description} className="container">
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <p>{task.priority}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ToDoList;
