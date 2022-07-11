import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchCartSuccess, fetchCartFailure} from "../slice";

const apiUrl = 'api/cart';

export function* fetchCartHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/current-user?page=${data.payload?.page}&size=${data.payload?.size}${data.payload?.queryParams}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchCartSuccess(result?.data));
    } catch (e) {
        console.error(e);
        yield put(fetchCartFailure(e));
    }
}
