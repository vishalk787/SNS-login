import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import { reqUserList } from '../API'
import '../style/Users.css'

const Users = () => {
    
    const [userList, getUserList] = useState([])
    
    async function fetchUserList (){
        const data =  await reqUserList()
        getUserList(data)
    }

    useEffect( () => {
        if (userList.length > 0) return
       fetchUserList()
    }, [userList] )
    if(userList.length === 0) return <Loader/>
    return (
        <div className='flex user'>

            {userList?.length > 0 && userList.map( (user) => {
                return (
                    <Link to={'/user/'+user.id} className='list text' key={user.id}>
                        <img src={user.avatar} alt='' className='avatar' />
                        <div className='userText'>
                            <h1> {`${user.first_name} ${user.last_name}`}  </h1>
                            <h1> {user.email} </h1>
                        </div>
                    </Link>
                )
            })}

        </div>
    )
}

export default Users