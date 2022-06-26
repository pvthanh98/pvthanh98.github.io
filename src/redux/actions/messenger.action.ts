import { createAction } from '@reduxjs/toolkit';
import { Conversation } from '../../interfaces/messenger';

export const updateConversationListAction = createAction<Conversation[]>('messenger/conversation/updateListConversation');