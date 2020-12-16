import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "MaxState", age: 19 },
      { name: "ManuState", age: 29 },
      { name: "MaxxxxState", age: 49 },
    ],
  };

  switchNameHendler = (newName) => {
    console.log("switchNameHendler", this);
    console.log("newName", newName);
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: "Manu", age: 19 },
        { name: "Maxxxx", age: 39 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    console.log(event.target);
    this.setState({
      persons: [
        { name: "Max", age: 29 },
        { name: event.target.value, age: 19 },
        { name: "Maxxxx", age: 29 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid red",
      font: "inherit",
      cursor: "pointer",
      padding: "3px",
    };
    return (
      <div className="App">
        <h1>hi react app</h1>
        <p>working</p>
        <button style={style} onClick={() => this.switchNameHendler("test")}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHendler.bind(this, "maun!!!")}
          changed={this.nameChangeHandler}
        >
          my hobies
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );

    // return React.createElement(
    //   "div",
    //   { className: "classC" },
    //   React.createElement("h1", { className: "App" }, "new react")
    // );
  }
}

export default App;
