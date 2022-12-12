import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import LoginForm from './components/Login'
import Users from './components/Users'
import User from './components/User'
import { LoginError } from './components/Error'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route element={<Navbar/>} errorElement={<LoginError/>}>
        <Route path='/' element={<LoginForm/>}  />
        <Route path='/users' element={<Users/>} />
        <Route path='/user/:id' element={<User/>}  />
        <Route path='/error' element={<LoginError />}/>
      </Route>
    
  )
)
// const App = ( ) => {

 
//   return (
//     <>
//     <Navbar/>
//     {/* <LoginForm/> */}

//     </>
//   )
// }

export { router}