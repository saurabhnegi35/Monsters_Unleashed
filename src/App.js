import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Saurabh",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header>">
          <p>Hi {this.state.name}</p>
          <button
            onClick={() => {
              this.setState({ name: "Hero" });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
