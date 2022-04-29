import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'user',
    initialState: {
        userName: localStorage.getItem('userName'),
    },
    reducers: {
        setUser(state, action) {
            state.userName = action.payload.user;
            localStorage.setItem('userName', action.payload.user);
        },
        removeUser(state) {
            localStorage.clear();
            state.userName = '';
        },
    }
}) 

export const {setUser, removeUser} = authSlice.actions;
export default authSlice.reducer;