import React from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider } from 'react-router-dom';

import './index.css';
import {router} from './App'
// import {reqUserList} from './API';

// let userList = reqUserList()
// console.log(userList, 'index')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
  // <React.StrictMode>
  // </React.StrictMode>
);


