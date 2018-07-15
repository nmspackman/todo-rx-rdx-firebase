import React, { Component } from 'react';
import TodoList from "./components/ToDoList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ToDoList />
      </div>
    );
  }
}

export default App;
