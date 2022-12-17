import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list:[]
}

const userListSlice = createSlice({
    name:'userList',
    initialState,
    reducers:{
        setUserList: (state, action) => {state.list = action.payload},
        removeUserList: state => {state.list = []}
    }
})

export const { setUserList, removeUserList } = userListSlice.actions

export default userListSlice.reducer