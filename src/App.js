import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Saurabh", lastName: "Negi" },
      company: "Hitachi",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header>">
          <p>
            Hi Iam {this.state.name.firstName} {this.state.name.lastName}, I
            have worked at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "Arun", lastName: "Negi" },
                  };
                },
                () => {
                  console.log(this.state.name);
                }
              );
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
