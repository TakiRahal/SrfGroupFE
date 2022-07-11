import {all, put, takeEvery} from "redux-saga/effects";
import {loginUser, sessionUser, getNumberOfNotificationsNotSee,
    registerUser, getNumberOfMessagesNotSee, fetchProfileUser, logout} from "./slice";
import {
    getNumberOfMessagesNotSeeHandler,
    getNumberOfNotificationsNotSeeHandler,
    loginCustomerHandler, logoutHandler,
    registerHandler,
    sessionUserHandler
} from "./saga-handler/login.generator";
import {fetchProfileUserHandler} from "./saga-handler/profile.generator";


export function* userSaga() {
    yield all([
        takeEvery(loginUser, loginCustomerHandler),
        takeEvery(sessionUser, sessionUserHandler),
        takeEvery(getNumberOfNotificationsNotSee, getNumberOfNotificationsNotSeeHandler),
        takeEvery(getNumberOfMessagesNotSee, getNumberOfMessagesNotSeeHandler),
        takeEvery(registerUser, registerHandler),
        takeEvery(fetchProfileUser, fetchProfileUserHandler),
        takeEvery(logout, logoutHandler)
    ]);
}

export default userSaga;
