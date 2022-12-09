import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import LoginForm from './components/Login'
import Users from './components/Users'
import Profile from './components/Profile'
import { LoginError } from './components/Error'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route element={<Navbar/>} errorElement={<LoginError/>}>
        <Route path='/' element={<LoginForm/>}  />
        <Route path='/users' element={<Users/>} />
        <Route path='/profile' element={<Profile/>} />
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