import React, {useState, useEffect} from 'react'
// import { Outlet } from 'react-router-dom'
import { reqUserList } from '../API'
import '../style/Users.css'

const Users = () => {

    let [userList, getUserList] = useState([])

    useEffect( () => {

        async function fetchUserList (){
            let data =  await reqUserList()
            getUserList((prevArr)  => [...prevArr, ...data])
        }
       fetchUserList()
    }, [] )



    return (
        <div className='flex user'>

            {userList.map( (user) => {
                return <div className='list' key={user.id}>
                    <img src={user.avatar} alt='' className='avatar' />
                    <div className='userText'>
                        <h1> {user.first_name + ' ' +user.last_name}  </h1>
                        <h1> {user.email} </h1>
                    </div>
                </div>
            })}

        </div>
    )
}

export default Users