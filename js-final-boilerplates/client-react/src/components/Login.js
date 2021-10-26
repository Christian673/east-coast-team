import React, { Component } from 'react'
import Navbar from "./Navbar"
import axios from "axios"
import "../styling/Login.css"

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
       username: "",
       password: ""
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post("/users/login", this.state)
      .then(response =>{
        console.log(response)
        window.location.href="http://localhost:3000/profile"
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { username, password } = this.state
    return (
      <div>
        <Navbar></Navbar>
        <div className='container-fluid form'>
          <div className='row'>
            <div className='col text-center'>
              <form onSubmit={this.submitHandler}>
                <div className='form-group'>
                  <input type="text" className='form-control-lg' name="username" value={username} 
                  placeholder='Username' onChange={this.changeHandler}></input>
                </div>
                <div className='form-group'>
                  <input type="password" className='form-control-lg' name="password" value={password} 
                  placeholder='Password' onChange={this.changeHandler}></input>
                </div>
                <a href='http://localhost:3000/signup'>Don't have an account? Click here to sign up!</a> <br></br>
                <button type='submit' className="btn btn-primary btn-lg">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
