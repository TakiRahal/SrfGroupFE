import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchMyNotificationsSuccess, fetchMyNotificationsFailure} from "../slice";

const apiUrl = 'api/notification';

export function* fetchMyNotificationsHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/current-user?page=${data.payload?.page}&size=${data.payload?.size}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchMyNotificationsSuccess(result?.data));
    } catch (e) {
        console.error(e);
        yield put(fetchMyNotificationsFailure(e));
    }
}
