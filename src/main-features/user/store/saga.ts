import {all, put, takeEvery} from "redux-saga/effects";
import {loginUser, loginWithFacebook, loginWithGoogle, loginWithGoogleOneTap, sessionUser, getNumberOfNotificationsNotSee, updateAvatarAccount,
    registerUser, getNumberOfMessagesNotSee, fetchProfileUser, resetPasswordInit, logout} from "./slice";
import {
    fetchProfileUserHandler,
    getNumberOfMessagesNotSeeHandler,
    getNumberOfNotificationsNotSeeHandler,
    loginCustomerHandler,
    loginWithFacebookHandler, loginWithGoogleHandler, loginWithGoogleOneTapHandler,
    logoutHandler,
    registerHandler, resetPasswordInitUserHandler,
    sessionUserHandler,
    updateAvatarAccountHandler
} from "./saga-handler/user.generator";


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
        takeEvery(logout, logoutHandler)
    ]);
}

export default userSaga;
