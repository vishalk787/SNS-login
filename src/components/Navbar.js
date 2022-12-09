import React, {useEffect, useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../style/Navbar.css'
import {isLoggedInContext} from '../context'


let Navbar = () => {

    const [isLoggedIn, toggleLoggedIn ] = useState(false)


    return (
        <isLoggedInContext.Provider value={{isLoggedIn, toggleLoggedIn}} >
            <div className='navbar'>
                <Outlet/>
                <Link className='logo text' to='/'> <h1 >SNS</h1> </Link>
                { isLoggedIn &&
                    <>
                        <Link className='text' to='/users'> <h2>Users</h2> </Link>
                        <Link className='text' to='/profile'> <h2>Profile</h2> </Link>
                        <Link className='text' to='/'> <button className='logout' onClick={ () => toggleLoggedIn(!isLoggedIn) } ><h2>Logout</h2></button> </Link>
                    </>
                }
            </div>
        </isLoggedInContext.Provider>
    )
}

export default Navbar