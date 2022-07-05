import { createAction } from '@reduxjs/toolkit'
import { UserRoleEnum } from '../../enum/user-role.enum';

export const setRoleAction = createAction<UserRoleEnum>('role/setRole');