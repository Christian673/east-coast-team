import React, { Component } from 'react'
import WhiteShirtImg from "../images/White Shirt.jpg"
import BlackShirtImg from "../images/Black Shirt.jpg"
import '../styling/ProductDisplay.css'

export class ProductDisplay extends Component {
    render() {
        return (
            <div>
            <div className='container'>
                <h1 className="text-center">Our Products</h1>
                <h2 className="text-center">For All Your Shirt Needs</h2>
                <div className="title row">
                    <h3 className="col-6 text-center">White Shirt</h3>
                    <h3 className="col-6 text-center">Black Shirt</h3>
                </div>
                <div className="image row">
                    <div className="col-6 text-center">
                        <a href='http://localhost:3000/whiteshirt'><img src={WhiteShirtImg} alt="" className='shirt'></img></a>
                        <h3>For All Your White Shirt Festivities</h3>
                        <h4>At a low cost of $5</h4>
                    </div>
                    <div className="col-6 text-center">
                        <a href='http://localhost:3000/blackshirt'><img src={BlackShirtImg} alt="" className="shirt"></img></a>
                        <h3>For All Your Black Shirt Festivities</h3>
                        <h4>Also at a low cost of $5</h4>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ProductDisplay


