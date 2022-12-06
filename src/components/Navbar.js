import React from 'react'
import '../style/Navbar.css'

let Navbar = () => {
    return (
        <div className='navbar'>
            <h1 className='logo'>SNS</h1>
            <h2>Users</h2>
            <h2>Profile</h2>
            <button className='logout'><h2>Logout</h2></button>
        </div>
    )
}

export default Navbar