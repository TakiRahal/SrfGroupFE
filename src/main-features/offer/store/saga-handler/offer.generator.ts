import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchPublicOffersSuccess, fetchPublicOffersFailure,
    fetchDetailsPublicOfferSuccess, fetchDetailsPublicOfferFailure, fetchOffersByUserSuccess, fetchOffersByUserFailure,
    fetchRecentlyOfferSuccess, fetchRecentlyOfferFailure, uploadFilesOfferSuccess, uploadFilesOfferFailure} from "../../../offer/store/slice";

const apiUrl = 'api/offer';

export function* fetchPublicOffersHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/public?page=${data.payload?.page}&size=${data.payload?.size}${data.payload?.queryParams}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchPublicOffersSuccess(result?.data));
    } catch (e) {
        yield put(fetchPublicOffersFailure(e));
    }
}


export function* fetchDetailsPublicOfferHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/public/${data.payload?.id}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchDetailsPublicOfferSuccess(result?.data));
    } catch (e) {
        yield put(fetchDetailsPublicOfferFailure(e));
    }
}


/**
 *
 * @param data
 */
export function* uploadFilesOfferHandler(data: any): Generator<any, any, any> {
    try {
        console.log('uploadFilesOfferHandler ', data.payload)
        const requestUrl = `${apiUrl}/upload-images`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.post,
        }, data.payload.formData)
        yield put(uploadFilesOfferSuccess(result?.data));
    } catch (e) {
        yield put(uploadFilesOfferFailure(e));
    }
}


/**
 *
 * @param data
 */
export function* fetchOffersByUserHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/public?page=${data.payload?.page}&size=${data.payload?.size}${data.payload?.queryParams}&user.id=${data.payload?.userId}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchOffersByUserSuccess(result?.data));
    } catch (e) {
        yield put(fetchOffersByUserFailure(e));
    }
}


export function* fetchRecentlyOfferHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/public?page=${data.payload?.page}&size=${data.payload?.size}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchRecentlyOfferSuccess(result?.data));
    } catch (e) {
        console.error(e);
        yield put(fetchRecentlyOfferFailure(e));
    }
}

