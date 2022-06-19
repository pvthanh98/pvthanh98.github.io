import { createReducer } from '@reduxjs/toolkit';
import { ProfileType } from '../../types/common.type';
import { updateProfile } from '../actions/profile.action';

interface ProfileTypeState {
    value: ProfileType
}

const initialState : ProfileTypeState  = {
    value: {
        firstName: "",
        lastName:"",
        isActive:false,
        isAdmin:false,
        createdAt: "",
        email: "",
        id:"",
        image:"",
        updatedAt: ""
    }
} 


const profileReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateProfile, (state, action) => {
            state.value = {...action.payload}
        })
});

export default profileReducer;