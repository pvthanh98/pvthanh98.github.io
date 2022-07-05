import { createReducer } from '@reduxjs/toolkit'
import { UserRoleEnum } from '../../enum/user-role.enum';
import { setRoleAction } from '../actions/role.action';

const initialState = {
    value: localStorage.getItem('userRole') || UserRoleEnum.NORMAL_USER
}

const userRoleReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setRoleAction, (state, action) => {
            state.value = action.payload
        })
});

export default userRoleReducer;