import React from 'react';

function ToDoList(props) {
    return (
        <ul >
            {props.listItems.map((task)=>{
                return (
                <li key={task.description}>
                    <ul id="task">
                        <li>{task.description}</li>
                        <li>{task.dueDate}</li>
                        <li>{task.priority}</li>
                    </ul>
                </li>
                )
            })}
        </ul>
    );
}

export default ToDoList;