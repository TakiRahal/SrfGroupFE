import {PayloadAction} from "@reduxjs/toolkit";

const reducer = {
    fetchConversation: (state: any) => {
        state.conversation.loadingEntities = true;
    },
    fetchConversationSuccess: (state: any, action: PayloadAction) => {
        state.conversation.loadingEntities = false;
        state.conversation.entities = action.payload;
    },
    fetchConversationFailure: (state: any, action: PayloadAction) => {
        state.conversation.loadingEntities = false;
    },
}

export default reducer;
