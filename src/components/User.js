import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { reqUser } from '../API'

export default function User () {
    
    let [user, setUser] = useState({})
    let {id} = useParams()
    if (id > 12) throw new Error('User not Found',{cause: 404})
    useEffect( () => {
        async function getUser () {
            let user = await reqUser(id)
            // console.log(user)
            setUser( user )
        }
        getUser()
    }, [id] )

    return (
        <div className='container flex' style={{textAlign:'center'}} >
            <img src={user.avatar} alt='' className='avatar' />
            <div className='userText'>
                <h1> {user.first_name + ' ' +user.last_name}  </h1>
                <h1> {user.email} </h1>
            </div>
        </div>
    )
}