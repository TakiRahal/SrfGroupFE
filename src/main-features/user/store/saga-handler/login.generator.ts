import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {loginUserSuccess, loginUserFailure, registerUserSuccess, registerUserFailure} from "../slice";
import {StorageService} from "../../../../shared/services/storage.service";
import {AllAppConfig} from "../../../../core/config/all-config";
import {sessionUserSuccess, sessionUserFailure,
    getNumberOfNotificationsNotSeeSuccess, getNumberOfNotificationsNotSeeFailure,
    getNumberOfMessagesNotSeeSuccess, getNumberOfMessagesNotSeeFailure} from "../slice";

const apiUrl = 'api/user/';

export function* loginCustomerHandler(
    data: any,
): Generator<any, any, any> {
    try {
        console.log('loginCustomerHandler ', data?.payload);
        const result = yield invokeWS({
            url: `${apiUrl}public/signin`,
            method: MethodHttp.post,
        },
{
            email: data?.payload?.email,
            password: data?.payload?.password,
            rememberMe: data?.payload?.rememberMe,
            idOneSignal: data?.payload?.oneSignalId
        })

        console.log('result ', result);

        const bearerToken = result?.headers?.authorization;

        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
            const jwt = bearerToken.slice(7, bearerToken.length);
            if (data?.payload?.rememberMe) {
                StorageService.local.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);
            } else {
                StorageService.session.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);
            }
        }

        yield put(loginUserSuccess(bearerToken));
    } catch (e) {
        console.error(e);
        yield put(loginUserFailure(e));
    }
}


export function* sessionUserHandler(): Generator<any, any, any> {
    try {
        const result = yield invokeWS({
                url: `${apiUrl}current-user`,
                method: 'GET',
        })
        const account  = result?.data;
        if (account) {
            StorageService.local.set(AllAppConfig.VALUE_CURRENT_USER, JSON.stringify(account));
        }

        yield put(sessionUserSuccess(result?.data));
    } catch (e) {
        console.error(e);
        yield put(sessionUserFailure(e));
    }
}


/**
 *
 */
export function* getNumberOfNotificationsNotSeeHandler(): Generator<any, any, any> {
    try {
        const result = yield invokeWS({
            url: `${apiUrl}count-not-see-notifications`,
            method: 'GET',
        })
        yield put(getNumberOfNotificationsNotSeeSuccess(result.data));
    } catch (e) {
        console.error(e);
        yield put(getNumberOfNotificationsNotSeeFailure(e));
    }
}


/**
 *
 */
export function* getNumberOfMessagesNotSeeHandler(): Generator<any, any, any> {
    try {
        const result = yield invokeWS({
            url: `${apiUrl}count-not-see-messages`,
            method: 'GET',
        })
        yield put(getNumberOfMessagesNotSeeSuccess(result.data));
    } catch (e) {
        console.error(e);
        yield put(getNumberOfMessagesNotSeeFailure(e));
    }
}

/**
 *
 * @param Data
 */
export function* registerHandler(
    Data: any,
): Generator<any, any, any> {
    try {
        console.log('registerHandler ', Data);
        const result = yield invokeWS({
            url: `https://jsonplaceholder.typicode.com/todos`,
            method: 'GET',
        })
        yield put(registerUserSuccess(result));
    } catch (e) {
        console.error(e);
        yield put(registerUserFailure(e));
    }
}
