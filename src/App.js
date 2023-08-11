import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //underline constructor from classes extending from.
    this.state = {
      monsters: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
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
    console.log('render')
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const filterMonsters = this.state.monsters.filter(el => el.name.toLowerCase().includes(event.target.value.toLowerCase()))

          this.setState(
            () => {
              return { monsters: filterMonsters}
            }
          )
        }}/>
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
