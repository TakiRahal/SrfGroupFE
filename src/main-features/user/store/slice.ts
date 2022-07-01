import { createSlice, Slice } from '@reduxjs/toolkit';
import {initialState} from "./initial.state";
import loginReducer from './reducers/login.reducer';
import sessionReducer from './reducers/session.reducer';
import registerReducer from './reducers/register.reducer';

export const USER_KEY_IN_STORE = 'user';

export const userSlice: Slice = createSlice({
    name: USER_KEY_IN_STORE,
    initialState: initialState,
    reducers: {
        ...loginReducer,
        ...sessionReducer,
        ...registerReducer
    }
})

export const {
    //? ********************| LOGIN ACTIONS |*******************/
    loginUser,
    loginUserSuccess,
    loginUserFailure,

    //? ********************| SESSION ACTIONS |*******************/
    sessionUser,
    sessionUserSuccess,
    sessionUserFailure,


    //? ********************| NUMBER_NOTIFICATIONS ACTIONS |*******************/
    getNumberOfNotificationsNotSee,
    getNumberOfNotificationsNotSeeSuccess,
    getNumberOfNotificationsNotSeeFailure,

    //? ********************| NUMBER_MESSAGES ACTIONS |*******************/
    getNumberOfMessagesNotSee,
    getNumberOfMessagesNotSeeSuccess,
    getNumberOfMessagesNotSeeFailure,

    //? ********************| REGISTER ACTIONS |*******************/
    registerUser,
    registerUserSuccess,
    registerUserFailure

} = userSlice.actions;

//? ********************| LOGIN SELECTORS |*******************/
export const allLoginSelector = (state: any) => state[USER_KEY_IN_STORE].login;
// export const allLoginSelector = '';

//? ********************| LOCALE SELECTORS |*******************/
export const allLocaleSelector = (state: any) => state[USER_KEY_IN_STORE].locale;
// export const allLocaleSelector = '';


//? ********************| SESSION SELECTORS |*******************/
export const allSessionSelector = (state: any) => state[USER_KEY_IN_STORE].session;
