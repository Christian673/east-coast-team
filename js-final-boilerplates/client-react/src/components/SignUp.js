import React, { Component } from 'react'
import Navbar from "./Navbar"
import axios from "axios"
import "../styling/SignUp.css"

export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
       firstName: "",
       lastName: "",
       username: "",
       email: "",
       password: ""
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post("/users/signup", this.state)
      .then(response =>{
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    window.location.href="http://localhost:3000/login"
  }
  render() {
    const { firstName, lastName, username, email, password } = this.state
    return (
      <div>
        <Navbar></Navbar>
        <div className='container-fluid form'>
          <div className='row'>
            <div className='col text-center'>
              <form onSubmit={this.submitHandler}>
                <div className='form-group'>
                  <input type="text" className='form-control-lg' name="firstName" value={firstName} 
                  placeholder='First Name' onChange={this.changeHandler}></input>
                </div>
                <div className='form-group'>
                  <input type="text" className='form-control-lg' name="lastName" value={lastName} 
                  placeholder='Last Name' onChange={this.changeHandler}></input>
                </div>
                <div className='form-group'>
                  <input type="text" className='form-control-lg' name="username" value={username} 
                  placeholder='Username' onChange={this.changeHandler}></input>
                </div>
                <div className='form-group'>
                  <input type="text" className='form-control-lg' name="email" value={email} 
                  placeholder='email' onChange={this.changeHandler}></input>
                </div>
                <div className='form-group'>
                  <input type="password" className='form-control-lg' name="password" value={password} 
                  placeholder='Password' onChange={this.changeHandler}></input>
                </div>
                <button type='submit' className="btn btn-primary btn-lg">Submit</button>
              </form>
              <a href='http://localhost:3000/login'>Already have an account? Click here to login!</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
