import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super(); //underline constructor from classes extending from.
    this.state = {
      monsters: [],
      searchField: ''
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
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()

    this.setState(
      () => {
        return { searchField };
      }
    )
  }
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filterMonsters = monsters.filter((el) => {
      return el.name.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={ onSearchChange}/>
        {/* {
          filterMonsters.map((monster) => {
            return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
              </div>);
          })
        } */}
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
