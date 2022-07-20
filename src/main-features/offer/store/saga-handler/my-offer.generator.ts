import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchMyOffersSuccess, fetchMyOffersFailure} from "../../../offer/store/slice";

const apiUrl = 'api/offer';

export function* myOffersHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/current-user?page=${data.payload?.page}&size=${data.payload?.size}${data.payload?.queryParams}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchMyOffersSuccess(result?.data));
    } catch (e) {
        console.error(e);
        yield put(fetchMyOffersFailure(e));
    }
}
