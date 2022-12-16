import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { isLoggedInContext } from '../context'
import { loginUser } from '../API'
import Input from './Input'


const LoginForm = () => {

    const {isLoggedIn, toggleLoggedIn} = useContext(isLoggedInContext)
    const [userFound, toggleUserFound] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isLoggedIn]
    )

    async function handleSubmit (e) {
        e.preventDefault();

        let responseStatus = await loginUser(email, password)
        responseStatus === 200 ? toggleLoggedIn(!isLoggedIn) : toggleUserFound(!userFound)

        setEmail('')
        setPassword('')
    }
    
    return (
        <form className='container flex' id='loginForm' onSubmit={handleSubmit} onChange={handleChange}>
            <Input lable='E-Mail' id='email' value={email} userFound={userFound} />
            <Input lable='Password' id='password'  value={password}/>
            <button type='submit' className='loginBtn' > Login </button>
        </form>
    )
}

export default LoginForm