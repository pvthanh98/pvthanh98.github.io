import { createReducer } from '@reduxjs/toolkit'
import { setAuth } from '../actions/auth.action';

const initialState = {
    value: localStorage.getItem("accessToken") ? true : false
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setAuth, (state, action) => {
            state.value = action.payload
        })
});

export default authReducer;