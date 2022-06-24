import { createAction } from '@reduxjs/toolkit';
import { Socket } from 'socket.io-client';
import { UserSideBarEnum } from '../../types/common.type';

export const updateUserSidebarAction = createAction<UserSideBarEnum>('common/userSidebar/updateUserSidebar');
// export const updateSocketIoClient = createAction<any|null>('common/updateSocketIoClient');