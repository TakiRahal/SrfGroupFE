import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchSellerOffer: (state: any) => {
        state.sellerOffer.loadingSellerEntities = true;
    },
    fetchSellerOfferSuccess: (state: any, action: PayloadAction) => {
        state.sellerOffer.loadingSellerEntities = false;
        state.sellerOffer.sellerEntities = action.payload;
    },
    fetchSellerOfferFailure: (state: any, action: PayloadAction) => {
        state.sellerOffer.loadingSellerEntities = false;
    },

    resetSellerOffer: (state: any) => {
        return {
            ...state,
            ...initialState.sellerOffer
        };
    },
}

export default reducer;
