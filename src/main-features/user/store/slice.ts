import { createSlice, Slice } from '@reduxjs/toolkit';
import {initialState} from "./initial.state";
import loginReducer from './reducers/login.reducer';
import sessionReducer from './reducers/session.reducer';
import registerReducer from './reducers/register.reducer';
import accountReducer from './reducers/account.reducer';
import profileReducer from './reducers/profile.reducer';
import localeReducer from './reducers/locale.reducer';

export const USER_KEY_IN_STORE = 'user';

export const userSlice: Slice = createSlice({
    name: USER_KEY_IN_STORE,
    initialState: initialState,
    reducers: {
        ...loginReducer,
        ...sessionReducer,
        ...registerReducer,
        ...accountReducer,
        ...profileReducer,
        ...localeReducer
    }
})

export const {
    //? ********************| LOGIN ACTIONS |*******************/
    loginUser,
    loginUserSuccess,
    loginUserFailure,


    //? ********************| LOGIN VIA FACEBOOK ACTIONS |*******************/
    loginWithFacebook,
    loginWithFacebookSuccess,
    loginWithFacebookFailure,


    //? ********************| LOGIN VIA GOOGLE ACTIONS |*******************/
    loginWithGoogle,
    loginWithGoogleSuccess,
    loginWithGoogleFailure,


    //? ********************| LOGIN VIA GOOGLE ONE TAP ACTIONS |*******************/
    loginWithGoogleOneTap,
    loginWithGoogleOneTapSuccess,
    loginWithGoogleOneTapFailure,


    //? ********************| SESSION ACTIONS |*******************/
    sessionUser,
    sessionUserSuccess,
    sessionUserFailure,


    //? ********************| NUMBER_NOTIFICATIONS ACTIONS |*******************/
    getNumberOfNotificationsNotSee,
    getNumberOfNotificationsNotSeeSuccess,
    getNumberOfNotificationsNotSeeFailure,
    resetNumberOfNotificationsNotSee,


    //? ********************| NUMBER_MESSAGES ACTIONS |*******************/
    getNumberOfMessagesNotSee,
    getNumberOfMessagesNotSeeSuccess,
    getNumberOfMessagesNotSeeFailure,

    //? ********************| REGISTER ACTIONS |*******************/
    registerUser,
    registerUserSuccess,
    registerUserFailure,
    resetRegisterUser,


    //? ********************| UPDATE ACCOUNT INFOS ACTIONS |*******************/
    updateInfosAccount,
    updateInfosAccountSuccess,
    updateInfosAccountFailure,


    //? ********************| UPDATE ACCOUNT PASSWORD ACTIONS |*******************/
    updatePasswordAccount,
    updatePasswordAccountSuccess,
    updatePasswordAccountFailure,


    //? ********************| UPDATE AVATAR ACCOUNT ACTIONS |*******************/
    updateAvatarAccount,
    updateAvatarSuccess,
    updateAvatarFailure,


    //? ********************| FETCH ACTIONS |*******************/
    fetchProfileUser,
    fetchProfileUserSuccess,
    fetchProfileUserFailure,


    //? ********************| CHANGE LOCALE ACTIONS |*******************/
    changeLocale,


    logout


} = userSlice.actions;

//? ********************| LOGIN SELECTORS |*******************/
export const allLoginSelector = (state: any) => state[USER_KEY_IN_STORE].login;
// export const allLoginSelector = '';

//? ********************| LOCALE SELECTORS |*******************/
export const allLocaleSelector = (state: any) => state[USER_KEY_IN_STORE].locale;
// export const allLocaleSelector = '';


//? ********************| SESSION SELECTORS |*******************/
export const allSessionSelector = (state: any) => state[USER_KEY_IN_STORE].session;
export const loadingSession = (state: any) => state[USER_KEY_IN_STORE].session.loading;


//? ********************| ACCOUNT SELECTORS |*******************/
export const loadingUpdateInfosAccount = (state: any) => state[USER_KEY_IN_STORE].account.loadingUpdateInfos;
export const updateSuccessInfosAccount = (state: any) => state[USER_KEY_IN_STORE].account.updateSuccessInfos;
export const loadingPasswordAccount = (state: any) => state[USER_KEY_IN_STORE].account.loadingPassword;
export const updateSuccessPasswordAccount = (state: any) => state[USER_KEY_IN_STORE].account.updateSuccessPassword;
export const entityUpdateInfosAccount = (state: any) => state[USER_KEY_IN_STORE].account.entityUpdateInfos;


//? ********************| PROFILE SELECTORS |*******************/
export const loadingProfile = (state: any) => state[USER_KEY_IN_STORE].profile.loading;
export const entityProfile = (state: any) => state[USER_KEY_IN_STORE].profile.entity;


//? ********************| REGISTER SELECTORS |*******************/
export const loadingRegister = (state: any) => state[USER_KEY_IN_STORE].register.loading;
export const addSuccessRegister = (state: any) => state[USER_KEY_IN_STORE].register.addSuccess;
export const errorMessageRegister = (state: any) => state[USER_KEY_IN_STORE].register.errorMessage;


//? ********************| AVATAR SELECTORS |*******************/
export const loadingUpdateAvatar = (state: any) => state[USER_KEY_IN_STORE].account.loadingUpdateAvatar;
export const updateSuccessAvatar = (state: any) => state[USER_KEY_IN_STORE].account.updateSuccessAvatar;
export const entityUpdateAvatar = (state: any) => state[USER_KEY_IN_STORE].account.entityUpdateAvatar;
