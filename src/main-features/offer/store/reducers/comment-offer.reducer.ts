import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchCommentsOffer: (state: any) => {
        state.commentsOffer.loadingEntities = true;
    },
    fetchCommentsOfferSuccess: (state: any, action: any) => {
        state.commentsOffer.loadingEntities = false;
        state.commentsOffer.entities = action.payload.content;
        state.commentsOffer.totalItems = action.payload?.totalElements;
        state.commentsOffer.totalPages = action.payload?.totalPages;
    },
    fetchCommentsOfferFailure: (state: any, action: PayloadAction) => {
        state.commentsOffer.loadingEntities = false;
    },

    addCommentOffer: (state: any) => {
        state.commentsOffer.loading = true;
        state.commentsOffer.addSuccess = false;
    },
    addCommentOfferSuccess: (state: any, action: PayloadAction) => {
        state.commentsOffer.loading = false;
        state.commentsOffer.addSuccess = true;
        state.commentsOffer.entity = action.payload;
    },
    addCommentOfferFailure: (state: any, action: PayloadAction) => {
        state.commentsOffer.loading = false;
    },

    resetFetchCommentsOffer: (state: any) => {
        return {
            ...state,
            ...initialState.commentsOffer
        };
    },
}

export default reducer;
