import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchCommentsOfferSuccess, fetchCommentsOfferFailure, addCommentOfferSuccess, addCommentOfferFailure} from "../slice";

const apiUrl = 'api/comment-offer';

export function* fetchCommentsOfferHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/by-offer/${data.payload?.offerId}?page=${data.payload?.page}&size=${data.payload?.size}${data.payload?.queryParams}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchCommentsOfferSuccess(result?.data));
    } catch (e) {
        console.error(e);
        yield put(fetchCommentsOfferFailure(e));
    }
}


export function* addCommentOfferHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/create`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.post,
        }, {
            ...data.payload
        })
        yield put(addCommentOfferSuccess(result?.data?.content));
    } catch (e) {
        console.error(e);
        yield put(addCommentOfferFailure(e));
    }
}
