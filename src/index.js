import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import Navbar from './components/Navbar'
import RegisterForm from './components/Register'
import LoginForm from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // children: [{
    //   path: '/',
    //   element: <RegisterForm/>
    // }]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


