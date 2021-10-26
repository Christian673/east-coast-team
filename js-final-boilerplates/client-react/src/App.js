import React, { Component } from 'react'
import "./App.css";
import Routes from "./components/Routes";



export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        BlackShirt: 0,
        WhiteShirt: 0
    }
  }

  componentDidMount() {
    this.setState(prevState => ({BlackShirt: prevState.BlackShirt + 1}))
    this.setState(prevState => ({WhiteShirt: prevState.WhiteShirt + 1}))
    console.log(this.state)
  }
  
  incrementBlackShirt = () => {
    this.setState(prevState => ({BlackShirt: prevState.BlackShirt + 1}))
    console.log(this.state)
  }


  render() {
    return (
      <div className="App">
        <Routes></Routes>
        <button onClick={this.incrementBlackShirt}>Test me</button>
      </div>
    )
  }
}

export default App

