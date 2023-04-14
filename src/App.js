import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        // {
        //   name: "Linda",
        //   id: "1",
        // },
        // {
        //   name: "Frank",
        //   id: "2",
        // },
        // {
        //   name: "Jacky",
        //   id: "3",
        // },
        // {
        //   name: "Saurabh",
        //   id: "4",
        // },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header>">
          <input
            className="search-box"
            type="search"
            placeholder="search monsters"
            onChange={(event) => {
              console.log(event.target.value);
              const searchString = event.target.value.toLocaleLowerCase();
              const filteredMonsters = this.state.monsters.filter((monster) => {
                return monster.name.toLocaleLowerCase().includes(searchString);
              });

              this.setState(() => {
                return { monsters: filteredMonsters };
              });
            }}
          />
          {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}> {monster.name}</h1>;
          })}
        </header>
      </div>
    );
  }
}

export default App;
