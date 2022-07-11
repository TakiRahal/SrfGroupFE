import { createSlice, Slice } from '@reduxjs/toolkit';
import {initialState} from "./initial.state";
import favoriteUserReducer from './reducers/favorite-user.reducer';

export const FAVORITE_KEY_IN_STORE = 'favorite';

export const favoriteSlice: Slice = createSlice({
    name: FAVORITE_KEY_IN_STORE,
    initialState: initialState,
    reducers: {
        ...favoriteUserReducer,
    }
})

export const {
    //? ********************| FAVORITE USERS ACTIONS |*******************/
    fetchFavoriteUsers,
    fetchFavoriteUsersSuccess,
    fetchFavoriteUsersFailure,
    resetFavoriteUsers,


} = favoriteSlice.actions;

//? ********************| COMMENTS OFFER SELECTORS |*******************/
export const loadingFavoriteUser = (state: any) => state[FAVORITE_KEY_IN_STORE].favoriteUser.loading;
export const entityFavoriteUser = (state: any) => state[FAVORITE_KEY_IN_STORE].favoriteUser.entity;
export const loadingEntitiesFavoriteUser = (state: any) => state[FAVORITE_KEY_IN_STORE].favoriteUser.loadingEntities;
export const entitiesFavoriteUser = (state: any) => state[FAVORITE_KEY_IN_STORE].favoriteUser.entities;
export const totalItemsFavoriteUser = (state: any) => state[FAVORITE_KEY_IN_STORE].favoriteUser.totalItems;
export const totalPagesFavoriteUser = (state: any) => state[FAVORITE_KEY_IN_STORE].favoriteUser.totalPages;
export const deleteSuccessFavoriteUser = (state: any) => state[FAVORITE_KEY_IN_STORE].favoriteUser.deleteSuccess;
