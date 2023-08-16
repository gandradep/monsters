import { useState } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
  const [ searchField, setSearchField] = useState(''); //Value, setValue;
  console.log(searchField);
  const onSearchChange = (event) => {
    const searchFieldInput = event.target.value.toLowerCase();
    setSearchField(searchFieldInput);


  }
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Cards </h1>
      <SearchBox
           className='monsters-search-box'
           onChangeHandler={onSearchChange}
           placeholder='Search monsters'
      />
    </div>
  )
}
// class App extends Component {
//   constructor() {
//     super(); //underline constructor from classes extending from.
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((response) =>
//         this.setState(
//           () => {
//             return {monsters: response}
//           },
//           () => {
//           }
//         )
//       );
//   }


//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filterMonsters = monsters.filter((el) => {
//       return el.name.toLowerCase().includes(searchField)
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Cards </h1>
//         <SearchBox
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='Search monsters'
//         />
//         <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

export default App;
