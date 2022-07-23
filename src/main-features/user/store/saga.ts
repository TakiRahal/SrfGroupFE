import {all, put, takeEvery} from "redux-saga/effects";
import {
    loginUser,
    loginWithFacebook,
    loginWithGoogle,
    loginWithGoogleOneTap,
    sessionUser,
    getNumberOfNotificationsNotSee,
    updateAvatarAccount,
    registerUser,
    getNumberOfMessagesNotSee,
    fetchProfileUser,
    resetPasswordInit,
    logout,
    updateInfosAccount,
    fetchListConnectedUsersWS
} from "./slice";
import {
    fetchProfileUserHandler,
    getNumberOfMessagesNotSeeHandler,
    getNumberOfNotificationsNotSeeHandler,
    loginCustomerHandler,
    loginWithFacebookHandler, loginWithGoogleHandler, loginWithGoogleOneTapHandler,
    logoutHandler,
    registerHandler, resetPasswordInitUserHandler,
    sessionUserHandler,
    updateAvatarAccountHandler, updateInfosAccountHandler
} from "./saga-handler/user.generator";
import {fetchListConnectedUsersWSHandler} from "./saga-handler/websocket.generator";


export function* userSaga() {
    yield all([
        takeEvery(loginUser, loginCustomerHandler),
        takeEvery(loginWithFacebook, loginWithFacebookHandler),
        takeEvery(loginWithGoogle, loginWithGoogleHandler),
        takeEvery(loginWithGoogleOneTap, loginWithGoogleOneTapHandler),
        takeEvery(sessionUser, sessionUserHandler),
        takeEvery(updateAvatarAccount, updateAvatarAccountHandler),
        takeEvery(getNumberOfNotificationsNotSee, getNumberOfNotificationsNotSeeHandler),
        takeEvery(getNumberOfMessagesNotSee, getNumberOfMessagesNotSeeHandler),
        takeEvery(registerUser, registerHandler),
        takeEvery(fetchProfileUser, fetchProfileUserHandler),
        takeEvery(resetPasswordInit, resetPasswordInitUserHandler),
        takeEvery(updateInfosAccount, updateInfosAccountHandler),
        takeEvery(fetchListConnectedUsersWS, fetchListConnectedUsersWSHandler),
        takeEvery(logout, logoutHandler)
    ]);
}

export default userSaga;
