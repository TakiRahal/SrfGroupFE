import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchConversationSuccess, fetchConversationFailure} from "../slice";

const apiUrl = 'api/conversation';

export function* fetchConversationHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/current-user?page=${data.payload?.page}&size=${data.payload?.size}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchConversationSuccess(result?.data));
    } catch (e) {
        console.error(e);
        yield put(fetchConversationFailure(e));
    }
}
