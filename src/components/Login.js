import React from 'react'

// import '../style/Register.css'
import Input from './Input'
import FormButton from './Button'

let LoginForm = () => {
    return (
        <div className='container'>
            <Input lable='E-Mail'/>
            <Input lable='Password'/>
            <FormButton buttonText='Login'/>
        </div>
    )
}

export default LoginForm