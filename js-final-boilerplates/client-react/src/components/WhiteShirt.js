import React from 'react'
import Navbar from './Navbar';

export const WhiteShirt = () => {
    return (
        <div className='container-fluid text-center'>
            <Navbar></Navbar>
            <h1>This is the white Shirt page</h1>
            <button type="button" class="btn btn-outline-dark"><a href="http://localhost:3000/">Continue Shopping</a></button>
        </div>
    )
}

export default WhiteShirt;