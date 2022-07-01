import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchFindOfferSuccess, fetchFindOfferFailure} from "../slice";

const apiUrl = 'api/sell-offer';

export function* fetchFindOfferHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/public?page=${data.payload?.page}&size=${data.payload?.size}${data.payload?.queryParams}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchFindOfferSuccess(result?.data?.content));
    } catch (e) {
        console.error(e);
        yield put(fetchFindOfferFailure(e));
    }
}
