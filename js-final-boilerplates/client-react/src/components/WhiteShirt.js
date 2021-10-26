import React from 'react'
import Navbar from './Navbar';
import WhiteShirtImg from '../images/White Shirt.jpg'
export const WhiteShirt = () => {
  
    return (
        <div className='container-fluid text-center'>
            <Navbar></Navbar>
            <h1>This is the white Shirt page</h1>
            
            <a href='http://localhost:3000/whiteshirt'><img src={WhiteShirtImg} alt="" className='shirt'></img></a>
                        <h3>For All Your White Shirt Festivities</h3>
                        <h4>Different From Our Other Shirt!</h4>
                        <p>Reviews</p>
                            <div class='text-center'>
                            <ul>
                                <p>That other Gym Guy- wow a new color</p>
                                
                                
                                <p>Other College Dude- goes with anything</p>
                                
                                
                                <p>That Other Dog- Other Wow</p>
                            </ul>
                            </div>
                
            <button type="button" className="btn btn-outline-dark"><a href="http://localhost:3000/">Continue Shopping</a></button>
        </div>
    )
}

export default WhiteShirt;