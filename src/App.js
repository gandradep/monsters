import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //underline constructor from classes extending from.
    this.state = {
      monsters: [],
      searchField: ''
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
    const filterMonsters = this.state.monsters.filter((el) => {
      return el.name.toLowerCase().includes(this.state.searchField)
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const searchField = event.target.value.toLowerCase()

          this.setState(
            () => {
              return { searchField };
            }
          )
        }}/>
        {
          filterMonsters.map((monster) => {
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
