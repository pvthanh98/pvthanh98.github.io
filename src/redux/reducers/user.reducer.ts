import { createReducer } from '@reduxjs/toolkit'
import { FriendRowType, ProfileType } from '../../types/common.type';
import { appendUserAction, updateFriendAction, updateUserAction } from '../actions/user.action';

const initialState = {
    value: [] as Array<ProfileType>,
    friends: [] as Array<FriendRowType>,
    friendRequests: [] as Array<ProfileType>
}


const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(appendUserAction, (state, action) => {
            state.value = [...state.value, ...action.payload]
        })
        .addCase(updateUserAction, (state, action) => {
            state.value = [...action.payload]
        })
        .addCase(updateFriendAction, (state, action) => {
            state.friends = [...action.payload]
        })
});

export default userReducer;