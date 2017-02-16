import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';

class Random extends React.Component {
  constructor(props) {
    super()
    this.random = ()=> {
      return _.shuffle(['a','b','c'])
    }
  }
  render() {
    return <span>{this.random()}</span>
  }
}

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      v: 1,
    }
    this.onClick = ()=> {
      this.setState({ v: this.state.v + 1 })
    }
  }
  render() {
    return <div style={{ textAlign: 'center', color: 'gray' }}>
      <h1> (<Random />) - {this.props.name}</h1> 
      <button onClick={this.onClick} >Counter: {this.state.v}</button>
    </div>
  }
}

ReactDOM.render(<App name='random' />, document.getElementById('root'))

