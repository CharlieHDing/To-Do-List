import React from "react";
import "./App.css";
import ToDoList from "./components/to-do-list";
import AddTask from "./components/add-task";

class App extends React.Component {
  state = {
    listItems: [
      {
        description: "Walk the dogs",
        dueDate: "2020-08-25",
        priority: "medium",
      },
      {
        description: "feed the dogs",
        dueDate: "2020-08-24",
        priority: "high",
      },
    ],
  };

  render = () => {
    console.log(this.state.listItems)
    return (
      <div className="App">
        <header>
          <h1>To Do List</h1>
        </header>
        <main>
          <AddTask addNewTask={this.addNewTask}/>
          <ToDoList listItems={this.state.listItems} />
        </main>
      </div>
    );
  };

  addNewTask = (newTask) => {
    this.setState((currentState)=>{
      return {listItems: [...currentState.listItems, {description: newTask.newDescription, dueDate: newTask.newDueDate, priority: newTask.newPriority}]}
    })
  }
}

export default App;
