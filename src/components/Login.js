import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

// import {LoginError} from './Error'
import { isLoggedInContext } from '../context'
import { loginUser } from '../API'
import Input from './Input'


let LoginForm = () => {

    let {isLoggedIn, toggleLoggedIn} = useContext(isLoggedInContext)
    let [userFound, toggleUserFound] = useState(false)
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    function handleChange (e) {
        // console.log(e.target.value, e.target.id)
        if(e.target.id === 'email') setEmail(e.target.value)
        if(e.target.id === 'password') setPassword(e.target.value)
    } 
    useEffect(
        () => {
            // console.log('im in useEffect')
            isLoggedIn ? navigate('/users',{replace: true}) : navigate('/', {replace: true})
        }, [isLoggedIn, navigate]
    )

    async function handleSubmit (e) {
        e.preventDefault();

        let responseStatus = await loginUser(email, password)
        responseStatus === 200 ? toggleLoggedIn(!isLoggedIn) : toggleUserFound(!userFound)

        setEmail('')
        setPassword('')
        // if(responseStatus === 200) {
        //     toggleLoggedIn(!isLoggedIn)
        // } else {
        //     navigate('/error')
        //     console.log('reached here')
        //     throw new Error({status:responseStatus, statusText: 'User not found'})
        // }
        // console.log(isLoggedIn)
    }
    
    return (
        <form className='container flex' id='loginForm' onSubmit={handleSubmit} onChange={handleChange}>
            {/* <Outlet/> */}
            <Input lable='E-Mail' id='email' value={email} userFound={userFound} />
            <Input lable='Password' id='password'  value={password}/>
            <button type='submit' className='loginBtn' > Login </button>
        </form>
    )
}

export default LoginForm