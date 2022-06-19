import { createAction } from '@reduxjs/toolkit';
import { ProfileType } from '../../types/common.type';

export const updateProfile = createAction<ProfileType>('profile/fetchProfileData');