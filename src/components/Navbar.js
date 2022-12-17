import React, {useEffect, useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import '../style/Navbar.css'
import { logInUser, logOutUser } from '../redux/userStatusSlice'
import { removeUserList } from '../redux/userLIstSlice'


const Navbar = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector( state => state.userStatus.isLoggedIn )
    const [randomID, setRandomID] = useState('')

    useEffect( () => {
        if(localStorage.getItem('isLoggedIn')) {
            dispatch(logInUser())
            // toggleLoggedIn(localStorage.getItem('isLoggedIn'))
        }
    }, [] )

    useEffect( () => {
        if(isLoggedIn) localStorage.setItem('isLoggedIn' , isLoggedIn)
    } )

    const getRandomID = () => { 
       let id =  Math.floor(Math.random() * 13) ;
        if(id === 0) id = id + 1
       return id
    }
    useEffect( () => { 
        setRandomID( getRandomID() ) 
    }, [])
    // console.log(randomID)

    function logout(){
        // toggleLoggedIn(!isLoggedIn)
        localStorage.clear()
        dispatch(removeUserList())
        dispatch(logOutUser())
    }

    return (
            // <isLoggedInContext.Provider value={{isLoggedIn, toggleLoggedIn}} >
                <div className='navbar'>
                    <Outlet/>
                    <Link className='logo text' to='/'> <h1 >SNS</h1> </Link>
                    { isLoggedIn &&
                        <>
                            <Link className='text' to='/users'> <h2>Users</h2> </Link>
                            <Link className='text' to={'/user/'+ randomID} state={randomID} onClick={() => setRandomID(getRandomID())}> <h2>Random User</h2> </Link>
                            <Link className='text' to='/'> <button className='logout' onClick={ logout } ><h2>Logout</h2></button> </Link>
                        </>
                    }
                </div>
            // </isLoggedInContext.Provider>
    )
}

export default Navbar