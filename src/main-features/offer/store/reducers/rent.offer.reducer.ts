import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchRentOffer: (state: any) => {
        state.rentOffer.loadingRentEntities = true;
    },
    fetchRentOfferSuccess: (state: any, action: PayloadAction) => {
        state.rentOffer.loadingRentEntities = false;
        state.rentOffer.rentEntities = action.payload;
    },
    fetchRentOfferFailure: (state: any, action: PayloadAction) => {
        state.rentOffer.loadingRentEntities = false;
    },

    resetRentOffer: (state: any) => {
        return {
            ...state,
            ...initialState.rentOffer
        };
    },
}

export default reducer;
