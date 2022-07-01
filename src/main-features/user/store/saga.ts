import {all, put, takeEvery} from "redux-saga/effects";
import {loginUser, sessionUser, getNumberOfNotificationsNotSee, registerUser, getNumberOfMessagesNotSee} from "./slice";
import {
    getNumberOfMessagesNotSeeHandler,
    getNumberOfNotificationsNotSeeHandler,
    loginCustomerHandler,
    registerHandler,
    sessionUserHandler
} from "./saga-handler/login.generator";


export function* userSaga() {
    yield all([

        takeEvery(loginUser, loginCustomerHandler),
        takeEvery(sessionUser, sessionUserHandler),
        takeEvery(getNumberOfNotificationsNotSee, getNumberOfNotificationsNotSeeHandler),
        takeEvery(getNumberOfMessagesNotSee, getNumberOfMessagesNotSeeHandler),
        takeEvery(registerUser, registerHandler)
    ]);
}

export default userSaga;
