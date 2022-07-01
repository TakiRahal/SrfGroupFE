import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchFindOffer: (state: any) => {
        state.findOffer.loadingFindEntities = true;
    },
    fetchFindOfferSuccess: (state: any, action: PayloadAction) => {
        state.findOffer.loadingFindEntities = false;
        state.findOffer.findEntities = action.payload;
    },
    fetchFindOfferFailure: (state: any, action: PayloadAction) => {
        state.findOffer.loadingFindEntities = false;
    },

    resetFindOffer: (state: any) => {
        return {
            ...state,
            ...initialState.findOffer
        };
    },
}

export default reducer;
