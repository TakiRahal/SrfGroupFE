import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    fetchFavoriteUsers: (state: any) => {
        state.favoriteUser.loadingEntities = true;
    },
    fetchFavoriteUsersSuccess: (state: any, action: any) => {
        state.favoriteUser.loadingEntities = false;
        state.favoriteUser.entities = action.payload?.content;
        state.favoriteUser.totalItems = action.payload?.totalElements;
        state.favoriteUser.totalPages = action.payload?.totalPages;
    },
    fetchFavoriteUsersFailure: (state: any, action: PayloadAction) => {
        state.favoriteUser.loadingEntities = false;
    },
    resetFavoriteUsers: (state: any) => {
        return {
            ...state,
            ...initialState.favoriteUser
        };
    },
}

export default reducer;
