import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchMyOffers: (state: any) => {
        state.myOffers.loadingEntities = true;
    },
    fetchMyOffersSuccess: (state: any, action: any) => {
        state.myOffers.loadingEntities = false;
        // state.myOffers.entities = action.payload?.content;
        state.myOffers.entities = [
            ...state.myOffers.entities,
            ...action.payload.content
        ];
        state.myOffers.totalItems = action.payload?.totalElements;
        state.myOffers.totalPages = action.payload?.totalPages;
    },
    fetchMyOffersFailure: (state: any, action: PayloadAction) => {
        state.myOffers.loadingEntities = false;
    },

    resetMyOffers: (state: any) => {
        state.myOffers = initialState.myOffers;
    },
}

export default reducer;
