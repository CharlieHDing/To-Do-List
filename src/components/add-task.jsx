import React from "react";

class AddTask extends React.Component {
  state = {
    newDescription: "",
    newDueDate: "",
    newPriority: "",
  };
  render = () => {
    const { newDescription, newDueDate, newPriority } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="newDescription">Description</label>
        <input
          type="text"
          name=""
          id="newDescription"
          onChange={this.handleChange}
        />
        <label htmlFor="newDueDate">Due Date</label>
        <input
          type="date"
          name=""
          id="newDueDate"
          onChange={this.handleChange}
        />
        <label htmlFor="newPriority">Priority</label>
        <input
          type="text"
          name=""
          id="newPriority"
          onChange={this.handleChange}
        />
        <button>Add Task</button>
      </form>
    );
  };

  handleChange = (changeEvent) => {
    const { id, value } = changeEvent.target;
    console.log(value);
    this.setState({ [id]: value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
  };
}

export default AddTask;
