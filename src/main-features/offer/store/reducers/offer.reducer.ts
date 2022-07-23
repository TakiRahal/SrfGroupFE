import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchPublicOffers: (state: any) => {
        state.publicOffer.loadingEntities = true;
    },
    fetchPublicOffersSuccess: (state: any, action: any) => {
        state.publicOffer.loadingEntities = false;
        state.publicOffer.entities = [
            ...state.publicOffer.entities,
            ...action.payload.content
        ];
        state.publicOffer.totalItems = action.payload?.totalElements;
        state.publicOffer.totalPages = action.payload?.totalPages;
    },
    fetchPublicOffersFailure: (state: any, action: PayloadAction) => {
        state.publicOffer.loadingEntities = false;
    },

    uploadFilesOffer: (state: any) => {
    },
    uploadFilesOfferSuccess: (state: any, action: PayloadAction) => {
    },
    uploadFilesOfferFailure: (state: any, action: PayloadAction) => {
    },

    reportOffers: (state: any) => {
        state.publicOffer.loadingReport = true;
        state.publicOffer.reportSuccess = false;
    },
    reportOffersSuccess: (state: any, action: PayloadAction) => {
        state.publicOffer.loadingReport = false;
        state.publicOffer.reportSuccess = true;
    },
    reportOffersFailure: (state: any, action: PayloadAction) => {
        state.publicOffer.loadingReport = false;
    },

    resetPublicOffers: (state: any) => {
        state.publicOffer = initialState.publicOffer;
    },


    fetchDetailsPublicOffer: (state: any) => {
        state.publicOffer.loading = true;
    },
    fetchDetailsPublicOfferSuccess: (state: any, action: PayloadAction) => {
        state.publicOffer.loading = false;
        state.publicOffer.entity = action.payload;
    },
    fetchDetailsPublicOfferFailure: (state: any, action: PayloadAction) => {
        state.publicOffer.loading = false;
    },


    fetchOffersByUser: (state: any) => {
        state.userOffers.loading = true;
    },
    fetchOffersByUserSuccess: (state: any, action: any) => {
        state.userOffers.loadingEntities = false;
        state.userOffers.entities = action.payload?.content;
        state.userOffers.totalItems = action.payload?.totalElements;
        state.userOffers.totalPages = action.payload?.totalPages;
    },
    fetchOffersByUserFailure: (state: any, action: any) => {
        state.userOffers.loading = false;
    },


    fetchRecentlyOffer: (state: any) => {
        state.recentlyOffers.loading = true;
    },
    fetchRecentlyOfferSuccess: (state: any, action: any) => {
        state.recentlyOffers.loadingEntities = false;
        state.recentlyOffers.entities = action.payload?.content;
        state.recentlyOffers.totalItems = action.payload?.totalElements;
        state.recentlyOffers.totalPages = action.payload?.totalPages;
    },
    fetchRecentlyOfferFailure: (state: any, action: any) => {
        state.recentlyOffers.loadingEntities = false;
    },


    fetchDescriptionNewOffer: (state: any) => {
        state.descriptionNewOffer.loading = true;
    },
    fetchDescriptionNewOfferSuccess: (state: any, action: any) => {
        state.descriptionNewOffer.loading = false;
        state.descriptionNewOffer.entity = action.payload;
    },
    fetchDescriptionNewOfferFailure: (state: any, action: any) => {
        state.descriptionNewOffer.loading = false;
    },

}

export default reducer;
