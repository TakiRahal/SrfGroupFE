import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchPubliOffer: (state: any) => {
        state.publicOffer.loadingPublicEntities = true;
    },
    fetchPubliOfferSuccess: (state: any, action: PayloadAction) => {
        state.publicOffer.loadingPublicEntities = false;
        state.publicOffer.publicEntities = action.payload;
    },
    fetchPubliOfferFailure: (state: any, action: PayloadAction) => {
        state.publicOffer.loadingPublicEntities = false;
    },

    resetPubliOffer: (state: any) => {
        return {
            ...state,
            ...initialState.publicOffer
        };
    },
}

export default reducer;
