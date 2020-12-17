import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todoList";

function App() {
  useEffect(() => {
    console.log("hey");
  }, []);

  const [inputText, setIinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(
          todos.filter((todo) => {
            todo.completed === true;
          })
        );
    }
  };
  return (
    <div className="App">
      <header>
        <h1>To do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setIinputText={setIinputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
