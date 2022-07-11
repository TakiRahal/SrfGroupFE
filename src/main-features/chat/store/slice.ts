import {createSlice, Slice} from "@reduxjs/toolkit";
import {initialState} from "./initial.state";
import conversationReducer from "./reducers/conversation.reducer";

export const CHAT_KEY_IN_STORE = 'chat';

export const chatSlice: Slice = createSlice({
    name: CHAT_KEY_IN_STORE,
    initialState: initialState,
    reducers: {
        ...conversationReducer,
    }
})

export const {
    //? ********************| FETCH CONVERSATION ACTIONS |*******************/
    fetchConversation,
    fetchConversationSuccess,
    fetchConversationFailure,
    resetConversation

} = chatSlice.actions;

//? ********************| CONVERSATION SELECTORS |*******************/
export const loadingConversation = (state: any) => state[CHAT_KEY_IN_STORE].conversation.loading;
export const entityConversation = (state: any) => state[CHAT_KEY_IN_STORE].conversation.entity;
export const loadingEntitiesConversation = (state: any) => state[CHAT_KEY_IN_STORE].conversation.loadingEntities;
export const entitiesConversation = (state: any) => state[CHAT_KEY_IN_STORE].conversation.entities;
export const totalItemsConversation = (state: any) => state[CHAT_KEY_IN_STORE].conversation.totalItems;
export const totalPagesConversation = (state: any) => state[CHAT_KEY_IN_STORE].conversation.totalPages;
export const deleteSuccessConversation = (state: any) => state[CHAT_KEY_IN_STORE].conversation.deleteSuccess;

