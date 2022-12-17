import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn : false,
}

const userStatusSlice = createSlice({
    name:'userStatus',
    initialState,
    reducers:{
        logInUser: state => {state.isLoggedIn = true},
        logOutUser: state => {state.isLoggedIn = false},
    },
})

export const { logInUser, logOutUser} = userStatusSlice.actions
export default userStatusSlice.reducer