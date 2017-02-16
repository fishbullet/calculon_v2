import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = { 
      count: props.state.count
    }
    this.onClick = ()=> {
      new Promise((res, rej)=> {
        fetch(`/${this.state.count}`, {
          method: 'POST'
        }).then(r => {
          return res(r)
        }).catch(e => {
          return rej(e)
        })
      }).then((r)=> {
        return r.json()
      }).then((json)=> {
        this.setState({ count: json.count })
      })
    }
  }
  shouldComponentUpdate() {
    return true
  }
  render() {
    return <div style={{ textAlign: 'center', color: 'gray' }}>
      <h1> ({this.state.count}) </h1> 
      <button onClick={this.onClick} >Add</button>
    </div>
  }
}

ReactDOM.render(<App state={window.state} />, document.getElementById('root'))

