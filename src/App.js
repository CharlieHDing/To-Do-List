import React from 'react';
import './App.css';
import ToDoList from "./components/to-do-list"

class App extends React.Component {
  state = {
    listItems:[{
      description: "Walk the dogs", 
      dueDate: "25-08-2020", 
      priority: "medium"},
      {
        description: "feed the dogs", 
        dueDate: "24-08-2020", 
        priority: "high"}
    ]}

  render = () => {
   return (
      <div className="App">
        <header>
          <h1>To Do List</h1>
        </header>
        <main>
          <ToDoList listItems={this.state.listItems}/>
        </main>
      </div>
    )   
  } 
  //methods


}

export default App;
