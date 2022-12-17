import { configureStore } from "@reduxjs/toolkit"
import userStatusReducer from './userStatusSlice'
import userListReducer from './userLIstSlice'


export const store = configureStore({
    reducer:{
        userStatus: userStatusReducer,
        userList: userListReducer
    },
})