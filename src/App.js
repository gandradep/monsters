import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //underline constructor from classes extending from.
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) =>
        this.setState(
          () => {
            return {monsters: response}
          },
          () => {
            console.log(this.state)
          }
        )
      );
  }


  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
              </div>);
          })
        }
      </div>
    );
  }
}

export default App;
