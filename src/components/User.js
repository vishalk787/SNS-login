import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from './Loader'
import { reqUser } from '../API'

export default function User () {

    const isLoggedIn = useSelector( state => state.userStatus.isLoggedIn )
    const users = useSelector( state => state.userList.list )
    const navigate = useNavigate()

    useEffect(
        () => {
            if(!isLoggedIn) navigate('/', {replace: true}) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isLoggedIn])

    const [user, setUser] = useState({})
    const {id} = useParams()
    if (id > 12) throw new Error('User not Found',{cause: 404})
    async function getUser () {
        let user = await reqUser(id)
        // console.log(user, 'from web')
        setUser( user )
    }
    useEffect( () => {
        if(!users.length) getUser()
        else{
            const findUser = users.filter( user => user.id === +id )
            setUser(findUser[0]) 
            }
    }, [id, users] )

    if(!user.avatar) return <Loader/>
    return (
        <div className='container flex' style={{textAlign:'center'}} >
            <img src={user.avatar} alt='' className='avatar' />
            <div className='userText'>
                <h1> {`${user.first_name ?? ''} ${user.last_name ?? ''}`}  </h1>
                <h1> {user.email ?? ''} </h1>
            </div>
        </div>
    )
}