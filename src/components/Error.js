import React from 'react'
import { Outlet, useRouteError } from 'react-router-dom'
import '../style/Error.css'

const LoginError = () => {
    const error = useRouteError()
    console.log(error, 'this is error page')
    return(
        <div className='errorPage container flex'>
            <Outlet/>
            <h1> Error {error?.statusText ?? ' Code '} </h1>
            <br></br>
            <h2> {error?.status ?? 'An Error Occurred'} </h2>
        </div>
    )
}

export {LoginError}