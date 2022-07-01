import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchRentOfferSuccess, fetchRentOfferFailure} from "../slice";

const apiUrl = 'api/sell-offer';

export function* fetchRentOfferHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/public?page=${data.payload?.page}&size=${data.payload?.size}${data.payload?.queryParams}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchRentOfferSuccess(result?.data?.content));
    } catch (e) {
        console.error(e);
        yield put(fetchRentOfferFailure(e));
    }
}
