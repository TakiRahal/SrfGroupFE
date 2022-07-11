import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchConversation: (state: any) => {
        state.conversation.loadingEntities = true;
    },
    fetchConversationSuccess: (state: any, action: any) => {
        state.conversation.loadingEntities = false;
        state.conversation.entities = action.payload.content;
        state.conversation.totalItems = action.payload?.totalElements;
        state.conversation.totalPages = action.payload?.totalPages;
    },
    fetchConversationFailure: (state: any, action: PayloadAction) => {
        state.conversation.loadingEntities = false;
    },
    resetConversation: (state: any) => {
        return {
            ...state,
            ...initialState.conversation
        };
    },
}

export default reducer;
