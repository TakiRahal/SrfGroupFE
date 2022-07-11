import {PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "../initial.state";

const reducer = {
    updateInfosAccount: (state: any) => {
        state.account.loadingUpdateInfos = true;
    },
    updateInfosAccountSuccess: (state: any, action: PayloadAction) => {
        state.account.loadingUpdateInfos = false;
        state.account.updateSuccessInfos = true;
        // state.account.currentUser = action.payload;
    },
    updateInfosAccountFailure: (state: any, action: PayloadAction) => {
        state.account.loadingUpdateInfos = false;
        state.account.updateSuccessInfos = false;
    },


    updatePasswordAccount: (state: any) => {
        state.account.loadingPassword = true;
        state.account.updateSuccessPassword = false;
    },
    updatePasswordAccountSuccess: (state: any, action: PayloadAction) => {
        state.account.loadingPassword = false;
        state.account.updateSuccessPassword = true;
    },
    updatePasswordAccountFailure: (state: any, action: PayloadAction) => {
        state.account.loadingPassword = false;
        state.account.updateSuccessPassword = false;
    },


}

export default reducer;
