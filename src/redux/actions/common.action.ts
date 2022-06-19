import { createAction } from '@reduxjs/toolkit';
import { UserSideBarEnum } from '../../types/common.type';

export const updateUserSidebarAction = createAction<UserSideBarEnum>('common/userSidebar/updateUserSidebar');