// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

   this.state = {
     count: 0,
     inputtedNumber: 0
   }

  //  this.increment = this.increment.bind(this)
  }

  increment = () =>  {
    // const amountToAdd = prompt('How much do you want to add?')
    // const currentCount = this.state.count
    const newCount = this.state.count + this.state.inputtedNumber

    this.setState({ count: newCount })
  }

  decrement = () => {
    // const amountToSubtract = prompt('How much do you want to subtract?')
    // const currentCount = this.state.count
    const newCount = this.state.count - this.state.inputtedNumber

    this.setState({ count: newCount })
  }

  changeInput = (e) => {
    console.log(e.target.value);
    let newValue = parseInt(e.target.value) || ''
    this.setState({inputtedNumber: newValue})

  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <input type="number" value={this.state.inputtedNumber} onChange={this.changeInput}/>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default App;
