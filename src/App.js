// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

   this.state = {
     count: 0
   }

   this.increment = this.increment.bind(this)
  }

  increment = () =>  {

    const amountToAdd = prompt('How much do you want to add?')
    // const currentCount = this.state.count
    const newCount = this.state.count + parseInt(amountToAdd)

    this.setState({ count: newCount })
  }

  decrement = () => {
    const amountToSubtract = prompt('How much do you want to subtract?')
    // const currentCount = this.state.count
    const newCount = this.state.count - parseInt(amountToSubtract)

    this.setState({ count: newCount })
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default App;
