import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { reqUserList } from '../API'
import '../style/Users.css'

const Users = () => {

    let [userList, getUserList] = useState([])

    useEffect( () => {
        if (userList.length > 0) return
        async function fetchUserList (){
            let data =  await reqUserList()
            getUserList(data)
        }
       fetchUserList()
    }, [userList.length] )

    return (
        <div className='flex user'>

            {userList?.length > 0 && userList.map( (user) => {
                return (
                    <Link to={'/user/'+user.id} className='list text' key={user.id}>
                        <img src={user.avatar} alt='' className='avatar' />
                        <div className='userText'>
                            <h1> {user.first_name + ' ' +user.last_name}  </h1>
                            <h1> {user.email} </h1>
                        </div>
                    </Link>
                )
            })}

        </div>
    )
}

export default Users