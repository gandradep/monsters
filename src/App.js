import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //underline constructor from classes extending from.
    this.state = {
      name: 'Gabri  el'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}
          </p>
          <button onClick={() => {
             this.setState({ name:'Changed'})
          }}> Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
