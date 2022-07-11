import {all, takeEvery} from "redux-saga/effects";
import {fetchMyNotifications} from './slice';
import {fetchMyNotificationsHandler} from "./saga-handler/notification.generator";

export function* notificationSaga() {
    yield all([
        takeEvery(fetchMyNotifications, fetchMyNotificationsHandler),
    ]);
}

export default notificationSaga;
