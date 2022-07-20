import {PayloadAction} from "@reduxjs/toolkit";

const reducer = {
    resetPasswordInit: (state: any) => {
        state.password.loadingResetInit = true;
        state.password.resetInitSuccess = false;
    },
    resetPasswordInitSuccess: (state: any, action: PayloadAction) => {
        state.password.loadingResetInit = false;
        state.password.resetInitSuccess = true;
    },
    resetPasswordInitFailure: (state: any, action: PayloadAction) => {
        state.password.loadingResetInit = false;
    },
}

export default reducer;
