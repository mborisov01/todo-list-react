import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { name: "Max", age: 28 },
      { name: "Ivan", age: 18 },
      { name: "Ivaaan", age: 28 },
    ],
  };

  buttonHendler = (newName) => {
    console.log(this);

    this.setState({
      person: [
        { name: newName, age: 18 },
        { name: "hello", age: 15 },
        { name: "hello test", age: 25 },
      ],
    });
  };

  render() {
    return (
      <div className="App" id="test">
        <h1>hello</h1>
        <h2>test</h2>
        <button onClick={() => this.buttonHendler("new1")}>switch names</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.buttonHendler.bind(this, "!!!")}
        ></Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
    // const test = "hello React";
    // return React.createElement(
    //   "div",
    //   { className: "App", id: "test1" },
    //   React.createElement("h1", null, test)
    // );
  }
}

export default App;
