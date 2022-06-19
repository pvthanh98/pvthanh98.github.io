import { createAction } from '@reduxjs/toolkit';
import { FriendRowType, ProfileType } from '../../types/common.type';

export const appendUserAction = createAction<Array<ProfileType>>('user/appendUsers');
export const updateUserAction = createAction<Array<ProfileType>>('user/updateUsers');
export const updateFriendAction = createAction<Array<FriendRowType>>('user/updateFriends');