import React from "react";
import Todoitems from "./Todoitems";
import todosData from "./todosData";

function App() {
  const todoComponent = todosData.map((todo) => (
    <Todoitems key={todo.id} text={todo.text} completed={todo.completed} />
  ));

  return <div>{todoComponent}</div>;
}

export default App;
