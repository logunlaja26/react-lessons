import React from "react";
import Header from "./Header";
import Greeting from "./Greeting";

// function App() {
//   return (
//     <div className="App">
//       <h1>Test my page</h1>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Header name="Ly" />
        <Greeting />
      </div>
    );
  }
}

export default App;
