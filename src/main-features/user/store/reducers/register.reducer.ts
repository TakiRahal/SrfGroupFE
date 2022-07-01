import {PayloadAction} from "@reduxjs/toolkit";

const reducer = {
    registerUser: (state: any) => {
        state.login.isLoading = true;
    },
    registerUserSuccess: (state: any, action: PayloadAction) => {
        state.login.isLoading = false;
        state.login.isAuthenticated = true;
    },
    registerUserFailure: (state: any, action: PayloadAction) => {
        state.login.isLoading = false;
    },
}

export default reducer;
