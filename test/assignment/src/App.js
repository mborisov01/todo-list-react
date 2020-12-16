import React, { Component } from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
  state = {
    usernames: [
      { userName: "IvanUsername" },
      { userName: "VankataUsername" },
      { userName: "IvanIvanovUsername" },
    ],
  };

  nameHandler = () => {
    console.log("clicked");

    this.setState({
      usernames: [
        { userName: "Ivan" },
        { userName: "Vankata" },
        { userName: "IvanIvanov" },
      ],
    });
  };

  render() {
    return (
      <div className="App" id="test">
        <h1>assignment 1</h1>
        <button onClick={this.nameHandler}>Change name</button>
        <UserInput />
        <UserOutput userName={this.state.usernames[0].userName} />
        <UserOutput userName={this.state.usernames[1].userName} />
        <UserOutput userName={this.state.usernames[2].userName} />
      </div>
    );
  }
}

export default App;
