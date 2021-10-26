import axios from 'axios'
import React, { Component } from 'react'
import Navbar from './Navbar'

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            isLoggedIn: false
        }
    }

    componentDidMount(){
        axios.get('/users/profile')
        .then(response => {
            console.log(response)
            this.setState({firstName: response.data.FirstName, lastName: response.data.LastName, username: response.data.Username, email: response.data.Email})
            this.setState({isLoggedIn: true})
        })
        .catch(error => {
            console.log(error)
        })
    }


    logOut = () => {
        axios.get('/users/logout')
        this.setState({firstName: '', lastName: '', username: '', email: '', isLoggedIn: false})
        window.location.href="http://localhost:3000/"
    }

    logIn = () => {
        window.location.href="http://localhost:3000/login"
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            return (
                <div>
                    <Navbar></Navbar>
                    <h1>Hello {this.state.firstName}!</h1>
                    <p>Full Name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Username: {this.state.username}</p>
                    <p>Email: {this.state.email}</p>
                    <button onClick={this.logOut} type='submit' className="btn btn-primary btn-lg">Log Out</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Navbar></Navbar>
                    <h1>Login to access profile</h1>
                    <button onClick={this.logIn} type='submit' className="btn btn-primary btn-lg">Return to login</button>
                </div>
            )
        }
    }
}

export default Profile
