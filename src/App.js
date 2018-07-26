import React, { Component } from 'react';
// import logo from './logo.svg';
import github_logo from './github-logo.png'
import facebook_logo from './facebook-logo.png'
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
        <div className="top-header">
          <div className="background-effect"></div>
          <h2 className="owner-name">Mitsuhiro Murawaki</h2>

          <div className="service-links-container">
            <a className="service-link" href="https://github.com/murawakimitsuhiro">
              <img src={github_logo}/>
            </a>
            <a className="service-link" href="https://www.facebook.com/profile.php?id=100009198817209">
              <img src={facebook_logo}/>
            </a>
          </div>

          <div className="introduction-container">
            <p className="affiliation">Keio University</p>

            <p className="skill-chips-container">
              <span className="skill-chip">Swift</span>
              <span className="skill-chip">go</span>
              <span className="skill-chip">Kotlin</span>
            </p>
            <p className="skill-chips-container">
              <span className="skill-chip">TypeScript</span>
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">Angular</span>
              <span className="skill-chip">React</span>
            </p>
            <p>
              <span className="skill-chip">openFrameworks(c++)</span>
              <span className="skill-chip">Arduino</span>
              <span className="skill-chip">Processing</span>
            </p>
            <p className="skill-chips-container">
              <span className="skill-chip">Unity(C#)</span>
              <span className="skill-chip">AWS</span>
            </p>
          </div>
        </div>


        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to {this.props.greet} + {this.state.name}</h1>*/}
        {/*</header>*/}
        {/*{this.state.greetings.map((g,i) => {*/}
          {/*return <p key={i}>{g}</p>*/}
        {/*})}*/}
        {/*<input onKeyDown={this.handleClick}/>*/}
      </div>
    );
  }

}

export default App;
