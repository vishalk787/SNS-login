import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

// import '../style/Register.css'
// import {LoginError} from './Error'
import { isLoggedInContext } from '../context'
import { loginUser } from '../API'
import Input from './Input'


let LoginForm = () => {

    let {isLoggedIn, toggleLoggedIn} = useContext(isLoggedInContext)
    let [userFound, toggleUserFound] = useState(false)
    const navigate = useNavigate()
    
    useEffect(
        () => {
            // console.log('im in useEffect')
            isLoggedIn ? navigate('/users',{replace: true}) : navigate('/', {replace: true})
        }, [isLoggedIn, navigate]
    )

    async function handleSubmit (e) {
        e.preventDefault();
        let email = e.target[0].value
        let Password = e.target[2].value
        // console.log('submit', e , email, Password)
        let responseStatus = await loginUser(email, Password)

        responseStatus === 200 ? toggleLoggedIn(!isLoggedIn) : toggleUserFound(!userFound)
        // if(responseStatus === 200) {
        //     toggleLoggedIn(!isLoggedIn)
        // } else {
        //     navigate('/error')
        //     console.log('reached here')
        //     throw new Error({status:responseStatus, statusText: 'User not found'})
        // }
        document.getElementById('loginForm').reset()
        // console.log(isLoggedIn)
    }
    
    return (
        <form className='container flex' id='loginForm' onSubmit={handleSubmit}>
            {/* <Outlet/> */}
            <Input lable='E-Mail' userFound={userFound}/>
            <Input lable='Password'/>
            <button type='submit' className='loginBtn' > Login </button>
        </form>
    )
}

export default LoginForm