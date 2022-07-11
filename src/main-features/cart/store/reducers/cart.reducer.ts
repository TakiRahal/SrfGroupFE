import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchCart: (state: any) => {
        state.cart.loadingEntities = true;
    },
    fetchCartSuccess: (state: any, action: any) => {
        state.cart.loadingEntities = false;
        state.cart.entities = action.payload?.content;
        state.cart.totalItems = action.payload?.totalElements;
        state.cart.totalPages = action.payload?.totalPages;
    },
    fetchCartFailure: (state: any, action: PayloadAction) => {
        state.cart.loadingEntities = false;
    },
    resetCart: (state: any) => {
        return {
            ...state,
            ...initialState.cart
        };
    },
}

export default reducer;
