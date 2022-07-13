
import {put} from "redux-saga/effects";
import {invokeWS, MethodHttp} from "../../../../../core/config/api-service";
import {addNewsLetterFailure, addNewsLetterSuccess } from "../slice";

const apiUrl = 'api/faq';

export function* addNewsLetterHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/public`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(addNewsLetterSuccess(result?.data));
    } catch (e) {
        console.error(e);
        yield put(addNewsLetterFailure(e));
    }
}
