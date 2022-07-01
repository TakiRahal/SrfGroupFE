import {PayloadAction} from "@reduxjs/toolkit";

const reducer = {
    loginUser: (state: any) => {
        state.login.loading = true;
    },
    loginUserSuccess: (state: any, action: PayloadAction) => {
        state.login.loading = false;
        state.login.token = action.payload;
    },
    loginUserFailure: (state: any, action: PayloadAction) => {
        state.login.loading = false;
    },
}

export default reducer;
