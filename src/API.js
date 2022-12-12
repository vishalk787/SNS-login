// import React from 'react'
import axios from 'axios'

const baseURL = 'https://reqres.in/api'
const reqUserListURL = '/users?per_page=12'
const loginURL = '/login'
const reqUserURL = '/users/'

async function reqUserList()  {
    let URL = baseURL+reqUserListURL
    let res = await axios.get(URL).then(resp => {return resp?.data?.data})
    // console.log(res, 'log 2')
    return res
}

async function reqUser(id) {
    let URL = baseURL+reqUserURL+id
    // console.log(URL)
    let res = await axios.get(URL).then( resp => {return resp?.data?.data} )
    // console.log(res)
    return res
}

async function loginUser (email, Password) {
    let URL = baseURL+loginURL
    let obj = {"email" :email, "password": Password}
    // console.log(obj)
    let data = await axios.post(URL, obj)
    .then( (resp) => {return resp.status} )
    .catch( (err) => {return  err.response.status} )
    // console.log(data, 'logUser')
    return data
}


export  {reqUserList, loginUser, reqUser}