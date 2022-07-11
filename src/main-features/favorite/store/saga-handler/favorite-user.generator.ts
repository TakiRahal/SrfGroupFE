import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {fetchFavoriteUsersSuccess, fetchFavoriteUsersFailure} from "../slice";

const apiUrl = 'api/favoriteuser';

export function* fetchFavoriteUsersHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}/current-user?page=${data.payload?.page}&size=${data.payload?.size}${data.payload?.queryParams}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchFavoriteUsersSuccess(result?.data?.content));
    } catch (e) {
        console.error(e);
        yield put(fetchFavoriteUsersFailure(e));
    }
}
