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
          value={newDescription}
        />
        <label htmlFor="newDueDate">Due Date</label>
        <input
          type="date"
          name=""
          id="newDueDate"
          onChange={this.handleChange}
          value={newDueDate}

        />
        <label htmlFor="newPriority">Priority</label>
        <input
          type="text"
          name=""
          id="newPriority"
          onChange={this.handleChange}
          value={newPriority}

        />
        <button>Add Task</button>
      </form>
    );
  };

  handleChange = (changeEvent) => {
    const { id, value } = changeEvent.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    this.props.addNewTask(this.state)
    this.setState({newDescription: "", newDueDate: "", newPriority: ""})
  };
}

export default AddTask;
