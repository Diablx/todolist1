import React, { Component } from 'react'
import List from './List.js'
import './App.css'

class App extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      key: '',
      values: [],
    }
  }

  onChange = event => {
    this.setState({ key: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({
      key: '',
      values: [...this.state.values, this.state.key],
    })
  }

  valueDelete(valueToBeDeleted) {
    console.log(valueToBeDeleted)
    // const newValues = this.state.values.filter(_value => {
    //   return _value !== valueToBeDeleted
    // })
    // this.setState({ values: newValues })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.key} />
        </form>
        <List valueDelete={this.valueDelete} values={this.state.values} />
      </div>
    )
  }
}

export default App
