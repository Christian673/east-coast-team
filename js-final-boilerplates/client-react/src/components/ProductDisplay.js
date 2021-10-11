import React from 'react'
import WhiteShirt from "../images/White Shirt.jpg"
import BlackShirt from "../images/Black Shirt.jpg"
import '../styling/ProductDisplay.css'

export const ProductDisplay = () => {
    return (
        <div>
            <div className='container'>
                <h1 className="text-center">Our Products</h1>
                <div className="title row">
                    <h3 className="col-6 text-center">White Shirt</h3>
                    <h3 className="col-6 text-center">Black Shirt</h3>
                </div>
                <div className="image row">
                    <div className="col-6 text-center">
                        <a href='http://localhost:3000/whiteshirt'><img src={WhiteShirt} alt="" className='shirt'></img></a>
                    </div>
                    <div className="col-6 text-center">
                        <a href='http://localhost:3000/blackshirt'><img src={BlackShirt} alt="" className="shirt"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay;