import React from "react";

function Todoitems(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.completed} />
      <h2>{props.text}</h2>
      <hr />
    </div>
  );
}

export default Todoitems;
