import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'stateの名前',
      greetings: ['Hello World']
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if (e.keyCode === 13) {
      this.setState({name: e.target.value})

      this.setState({greetings: [...this.state.greetings, 'hello ' + e.target.value]})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.greet} + {this.state.name}</h1>
        </header>
        {this.state.greetings.map((g,i) => {
          return <p key={i}>{g}</p>
        })}
        <input onKeyDown={this.handleClick}/>
      </div>
    );
  }

}

export default App;
