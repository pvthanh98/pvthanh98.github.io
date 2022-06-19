import { createReducer } from '@reduxjs/toolkit'
import { FriendRequestRowType, FriendRowType, ProfileType } from '../../types/common.type';
import { appendUserAction, updateFriendAction, updateUserAction, updateFriendRequestAction } from '../actions/user.action';

const initialState = {
    value: [] as Array<ProfileType>,
    friends: [] as Array<FriendRowType>,
    friendRequests: [] as Array<FriendRequestRowType>
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
        .addCase(updateFriendRequestAction, (state, action) => {
            state.friendRequests = [...action.payload]
        })
});

export default userReducer;