import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todoList";

function App() {
  const [inputText, setIinputText] = useState("");
  const [todos, setTodos] = useState([]);
  console.log("todos", todos);
  console.log("setTodos", setTodos);
  return (
    <div className="App">
      <header>
        <h1>hello</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setIinputText={setIinputText}
      />
      <TodoList />
    </div>
  );
}

export default App;
