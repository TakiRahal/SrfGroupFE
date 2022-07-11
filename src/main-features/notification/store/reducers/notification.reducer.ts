import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchMyNotifications: (state: any) => {
        state.mynotifications.loadingEntities = true;
    },
    fetchMyNotificationsSuccess: (state: any, action: any) => {
        state.mynotifications.loadingEntities = false;
        state.mynotifications.entities = action.payload.content;
        state.mynotifications.totalItems = action.payload?.totalElements;
        state.mynotifications.totalPages = action.payload?.totalPages;
    },
    fetchMyNotificationsFailure: (state: any, action: PayloadAction) => {
        state.mynotifications.loadingEntities = false;
    },
    resetMyNotifications: (state: any) => {
        return {
            ...state,
            ...initialState.mynotifications
        };
    },
}

export default reducer;
