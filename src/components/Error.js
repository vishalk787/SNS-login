import React from 'react'
import { Outlet, useRouteError } from 'react-router-dom'
import Navbar from './Navbar'

const LoginError = () => {
    const error = useRouteError()
    console.log(error,error.message,error.cause, 'this is error page')
    return(
        <>
            <Navbar/>
            <div className='errorPage container flex'>
                <Outlet/>
                <h1> Error {error?.cause} </h1>
                <br></br>
                <h2> {error?.message ?? 'An Error Occurred'} </h2>
            </div>
        </>
    )
}

export {LoginError}