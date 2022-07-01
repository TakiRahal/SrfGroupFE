import { createSlice, Slice } from '@reduxjs/toolkit';
import {initialState} from "./initial.state";
import offerReducer from './reducers/offer.reducer';
import sellerOfferReducer from './reducers/seller.offer.reducer';
import rentOfferReducer from './reducers/rent.offer.reducer';
import findOfferReducer from './reducers/find.offer.reducer';

export const OFFER_KEY_IN_STORE = 'offer';

export const offerSlice: Slice = createSlice({
    name: OFFER_KEY_IN_STORE,
    initialState: initialState,
    reducers: {
        ...offerReducer,
        ...sellerOfferReducer,
        ...rentOfferReducer,
        ...findOfferReducer
    }
})

export const {
    //? ********************| PUBLIC_OFFER ACTIONS |*******************/
    fetchPubliOffer,
    fetchPubliOfferSuccess,
    fetchPubliOfferFailure,
    resetPubliOffer,


    //? ********************| SELLER_OFFER ACTIONS |*******************/
    fetchSellerOffer,
    fetchSellerOfferSuccess,
    fetchSellerOfferFailure,
    resetSellerOffer,


    //? ********************| RENT ACTIONS |*******************/
    fetchRentOffer,
    fetchRentOfferSuccess,
    fetchRentOfferFailure,
    resetRentOffer,


    //? ********************| FIND ACTIONS |*******************/
    fetchFindOffer,
    fetchFindOfferSuccess,
    fetchFindOfferFailure,
    resetFindrOffer

} = offerSlice.actions;

//? ********************| PUBLIC OFFER SELECTORS |*******************/
export const allPublicOffersSelector = (state: any) => state[OFFER_KEY_IN_STORE].publicOffer;


//? ********************| SELLER OFFER SELECTORS |*******************/
export const allSellerOffersSelector = (state: any) => state[OFFER_KEY_IN_STORE].sellerOffer;


//? ********************| RENT OFFER SELECTORS |*******************/
export const allRentOffersSelector = (state: any) => state[OFFER_KEY_IN_STORE].rentOffer;


//? ********************| FIND OFFER SELECTORS |*******************/
export const allFindOffersSelector = (state: any) => state[OFFER_KEY_IN_STORE].findOffer;
