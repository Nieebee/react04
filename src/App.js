import React, { Component } from 'react'

const text = () => {
  return "HelloWorld"
}
const number = (n) => { 
  return n*2;
}

export default class App extends Component {
  render() {
    return (
      <div>
        <div>{number(5)}</div>
        <div>{text()}</div>
      </div>
    )
  }
}

