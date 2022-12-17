import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { logInUser } from '../redux/userStatusSlice'
import { loginUser } from '../API'
import Input from './Input'


const LoginForm = () => {
    // const {isLoggedIn, toggleLoggedIn} = useContext(isLoggedInContext)
    const [userFound, toggleUserFound] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const isLoggedIn = useSelector( state => state.userStatus.isLoggedIn )
    const dispatch = useDispatch()
    
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

    function resetForm () {
        setEmail('')
        setPassword('')
    }

    async function handleSubmit (e) {
        e.preventDefault();
        const responseStatus = await loginUser(email, password)
        responseStatus === 200 ? dispatch(logInUser()) : toggleUserFound(!userFound)
        resetForm()
        // responseStatus === 200 ? toggleLoggedIn(!isLoggedIn) : toggleUserFound(!userFound)
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