import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchProfileUserSuccess, fetchProfileUserFailure} from "../slice";

const apiUrl = 'api/user/';

export function* fetchProfileUserHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}public/profile/${data.payload?.userId}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchProfileUserSuccess(result?.data));
    } catch (e) {
        console.error(e);
        yield put(fetchProfileUserFailure(e));
    }
}
