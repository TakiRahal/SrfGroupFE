import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchPubliOfferSuccess, fetchPubliOfferFailure} from "../../../offer/store/slice";

const apiUrl = 'api/offer';

export function* fetchPublicOfferHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/public?page=${data.payload?.page}&size=${data.payload?.size}${data.payload?.queryParams}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchPubliOfferSuccess(result?.data?.content));
    } catch (e) {
        console.error(e);
        yield put(fetchPubliOfferFailure(e));
    }
}
