import {invokeWS, MethodHttp} from "../../../../core/config/api-service";
import {put} from "redux-saga/effects";
import {
    loginUserSuccess,
    loginUserFailure,
    registerUserSuccess,
    registerUserFailure,
    fetchProfileUserSuccess, fetchProfileUserFailure, updateAvatarSuccess, updateAvatarFailure,
    loginWithFacebookSuccess, loginWithFacebookFailure, loginWithGoogleFailure,
    loginWithGoogleSuccess, loginWithGoogleOneTapSuccess, loginWithGoogleOneTapFailure,
    sessionUserSuccess, sessionUserFailure,
    getNumberOfNotificationsNotSeeSuccess, getNumberOfNotificationsNotSeeFailure,
    getNumberOfMessagesNotSeeSuccess, getNumberOfMessagesNotSeeFailure, resetPasswordInitSuccess, resetPasswordInitFailure, updateInfosAccountSuccess, updateInfosAccountFailure
} from "../slice";
import {StorageService} from "../../../../shared/services/storage.service";
import {AllAppConfig} from "../../../../core/config/all-config";

const apiUrl = 'api/user/';

export function* loginCustomerHandler(
    data: any,
): Generator<any, any, any> {
    try {
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
        yield put(loginUserFailure(e));
    }
}


export function* loginWithFacebookHandler(
    data: any,
): Generator<any, any, any> {
    try {
        const result = yield invokeWS({
                url: `${apiUrl}public/signin-facebook`,
                method: MethodHttp.post,
            },
            {...data?.payload}
            )

        const bearerToken = result?.headers?.authorization;

        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
            const jwt = bearerToken.slice(7, bearerToken.length);
            if (data?.payload?.rememberMe) {
                StorageService.local.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);
            } else {
                StorageService.session.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);
            }
        }

        yield put(loginWithFacebookSuccess(bearerToken));
    } catch (e) {
        yield put(loginWithFacebookFailure(e));
    }
}



export function* loginWithGoogleHandler(
    data: any,
): Generator<any, any, any> {
    try {
        const result = yield invokeWS({
                url: `${apiUrl}public/signin-google-plus`,
                method: MethodHttp.post,
            },
            {...data?.payload}
        )

        const bearerToken = result?.headers?.authorization;

        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
            const jwt = bearerToken.slice(7, bearerToken.length);
            if (data?.payload?.rememberMe) {
                StorageService.local.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);
            } else {
                StorageService.session.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);
            }
        }

        yield put(loginWithGoogleSuccess(bearerToken));
    } catch (e) {
        yield put(loginWithGoogleFailure(e));
    }
}


/**
 *
 * @param data
 */
export function* loginWithGoogleOneTapHandler(
    data: any,
): Generator<any, any, any> {
    try {
        const result = yield invokeWS({
                url: `${apiUrl}public/signin-google-plus`,
                method: MethodHttp.post,
            },
            {...data?.payload}
        )

        const bearerToken = result?.headers?.authorization;

        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
            const jwt = bearerToken.slice(7, bearerToken.length);
            if (data?.payload?.rememberMe) {
                StorageService.local.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);
            } else {
                StorageService.session.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);
            }
        }

        yield put(loginWithGoogleOneTapSuccess(bearerToken));
    } catch (e) {
        yield put(loginWithGoogleOneTapFailure(e));
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
    data: any,
): Generator<any, any, any> {
    try {
        console.log('registerHandler ', data.payload);
        const result = yield invokeWS({
            url: `${apiUrl}public/signup`,
            method: MethodHttp.post,
        }, {
            email: data.payload.email,
            password: data.payload.password,
            sourceRegister: data.payload.sourceRegister,
            idOneSignal: data.payload.oneSignalId,
            langKey: data.payload.langKey
        })
        yield put(registerUserSuccess(result));
    } catch (e) {
        console.error(e);
        yield put(registerUserFailure(e));
    }
}


export function* fetchProfileUserHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}public/profile/${data.payload?.userId}`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.get,
        })
        yield put(fetchProfileUserSuccess(result?.data));
    } catch (e) {
        yield put(fetchProfileUserFailure(e));
    }
}


export function* resetPasswordInitUserHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}public/forgot-password/init`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.post,
        }, {...data.payload})
        yield put(resetPasswordInitSuccess(result?.data));
    } catch (e) {
        yield put(resetPasswordInitFailure(e));
    }
}


export function* updateInfosAccountHandler(data: any): Generator<any, any, any> {
    try {
        const requestUrl = `${apiUrl}update-current-user`;
        const result = yield invokeWS({
            url: `${requestUrl}`,
            method: MethodHttp.put,
        }, {...data.payload})
        yield put(updateInfosAccountSuccess(result?.data));
    } catch (e) {
        yield put(updateInfosAccountFailure(e));
    }
}


export function* updateAvatarAccountHandler(data: any): Generator<any, any, any> {
    try {
        const result = yield invokeWS({
            url: `${apiUrl}avatar`,
            method: MethodHttp.post,
        }, data.payload.formData)
        const account  = result?.data;
        if (account) {
            StorageService.local.set(AllAppConfig.VALUE_CURRENT_USER, JSON.stringify(account));
        }

        yield put(updateAvatarSuccess(result?.data));
    } catch (e) {
        console.error(e);
        yield put(updateAvatarFailure(e));
    }
}

export function* logoutHandler(){
    if (StorageService.local.get(AllAppConfig.NAME_TOKEN_CURRENT_USER)) {
        StorageService.local.remove(AllAppConfig.NAME_TOKEN_CURRENT_USER);
    }
    if (StorageService.session.get(AllAppConfig.NAME_TOKEN_CURRENT_USER)) {
        StorageService.session.remove(AllAppConfig.NAME_TOKEN_CURRENT_USER);
    }

    StorageService.local.remove(AllAppConfig.VALUE_CURRENT_USER);
    // yield put(logoutSuccess(true));
}
