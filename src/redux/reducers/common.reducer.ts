import { createReducer } from '@reduxjs/toolkit'
import { UserSideBarEnum } from '../../types/common.type';
import { updateUserSidebarAction } from '../actions/common.action';

const initialState = {
    userSidebar: UserSideBarEnum.FRIEND_LIST as UserSideBarEnum
}

const commonReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateUserSidebarAction, (state, action) => {
            state.userSidebar = action.payload
        })
});

export default commonReducer;