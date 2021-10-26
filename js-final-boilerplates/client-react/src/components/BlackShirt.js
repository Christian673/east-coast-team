import React, { Component } from 'react'
import Navbar from './Navbar';
import "../styling/BlackShirt.css"
import BlackShirtImg from "../images/Black Shirt.jpg"
import MoreShirtImg from "../images/More Shirt.jpg"

export class BlackShirt extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    continueShopping = () => {
        window.location.href="http://localhost:3000/"
    }

    render() {
        return (
            <div className='container-fluid'>
            <Navbar></Navbar>
                <div>
                    <div className="row">
                        <div className='col center'>
                            <h4>This is the Black Shirt page</h4>
                            <img src={BlackShirtImg} alt="" className='shirt'>
                            </img> <img src={MoreShirtImg} alt="" className='shirt'></img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col description text-center'>
                            
                            <h5>This is a marvelous, comfortable black shirt this is
                            made of only the finest cotton. Sizes range from small to large.</h5>
                            <p>Reviews</p>
                            <div class='text-center'>
                            <ul>
                                <p>That Gym Guy- Very soft</p>
                                
                                
                                <p>College Dude- Helped me pass class</p>
                                
                                
                                <p>That One Dog- Much Wow</p>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row center'>
                        <div className='col'>
                            <button type="button" class="btn btn-primary btn-lg contShopping" onClick={this.continueShopping}>Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlackShirt
