import { createReducer } from '@reduxjs/toolkit'
import { Conversation } from '../../interfaces/messenger';
import { updateConversationListAction } from '../actions/messenger.action';

const initialState = {
    conversations: [] as Conversation[]
}

const messengerAppReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateConversationListAction, (state, action) => {
            state.conversations = [...action.payload]
        })
});

export default messengerAppReducer;