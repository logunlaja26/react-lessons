import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
  const jokeComponents = jokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return <div className="Jokes">{jokeComponents}</div>;
}

export default App;

/** map function example
   map returns a new array with the transformed data */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];
const doubled = nums.map((num) => num * 2);
console.log(doubled);

/** Filter
 * map
 * sort
 * reduce
 * every
 * some
 * find
 * findindex
 */
