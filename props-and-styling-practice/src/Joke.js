import React from "react";

function Joke(props) {
  return (
    <div className="Joke-line">
      <h3 style={{ display: props.question ? "block" : "none" }}>
        Questions: {props.question}
      </h3>
      <h3 style={{ color: props.question ? "black" : "grey" }}>
        Answers: {props.punchLine}
      </h3>
      <hr />
    </div>
  );
}

export default Joke;
