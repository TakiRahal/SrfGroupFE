import axios from "axios";
import {REQUEST, FAILURE, SUCCESS} from "./action-type.util";
import {StorageService} from "../services/storage.service";
import {AllAppConfig} from "../../core/config/all-config";
import {IFacebook, IGooglePlus, IUser} from "../model/user.model";
import {IUpdatePassword} from "../model/update-password.model";

export const ACTION_TYPES = {
    CREATE_ACCOUNT: 'register/CREATE_ACCOUNT',
    RESET_CREATE_ACCOUNT: 'register/RESET_CREATE_ACCOUNT',
    ACTIVATE_ACCOUNT: 'activate/ACTIVATE_ACCOUNT',
    LOGIN: 'authentication/LOGIN',
    GET_SESSION: 'authentication/GET_SESSION',
    GET_PROFILE: 'authentication/GET_PROFILE',
    GET_CURRENT_USER: 'authentication/GET_CURRENT_USER',
    UPLOAD_AVATAR: 'account/UPLOAD_AVATAR',
    UPDATE_INFOS_USER: 'account/UPDATE_INFOS_USER',
    UPDATE_PASSWORD_USER: 'account/UPDATE_PASSWORD_USER',
    ONE_SIGNAL_ID: 'account/ONE_SIGNAL_ID',
    LOGOUT: 'logout/LOGOUT'
}

const CURRENT_USER = StorageService.local.get(AllAppConfig.VALUE_CURRENT_USER) ? JSON.parse(StorageService.local.get(AllAppConfig.VALUE_CURRENT_USER)) : null;

const initialState = {
    isAuthenticated: CURRENT_USER ? true : false,
    currentUser: CURRENT_USER ? CURRENT_USER : {},
    nbeNotificationsNotRead: 0,
    oneSignalId: '',

    registrationLoading: false,
    registrationSuccess: false,
    registrationErrorMessage: null,

    loginLoading: false,
    loginSuccess: false,
    loginErrorMessage: null,

    sessionLoading: false,
    sessionSuccess: false,
    sessionErrorMessage: null,

    profileLoading: false,
    profileEntity: {} as IUser,
    profileErrorMessage: null,

    activationAccountSuccess: false,

    account: {} as any,
    loadingAccount: false,

    accountUploadAvatar: null,
    loadingUploadAvatar: false,
    uploadAvatarSuccess: false,

    entityUpdateInfosAccount: {} as any,
    loadingUpdateInfosAccount: false,
    updateSuccessInfosAccount: false,

    loadingPasswordAccount: false,
    updateSuccessPasswordAccount: false
}

export type UserState = Readonly<typeof initialState>;

export default (state: UserState = initialState, action: any): UserState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.CREATE_ACCOUNT):
            return {
                ...state,
                registrationLoading: true,
                registrationSuccess: false
            };
        case FAILURE(ACTION_TYPES.CREATE_ACCOUNT):
            return {
                ...initialState,
                registrationErrorMessage: action.payload.response.data.message,
            };
        case SUCCESS(ACTION_TYPES.CREATE_ACCOUNT):
            return {
                ...initialState,
                registrationSuccess: true,
            };
        case ACTION_TYPES.RESET_CREATE_ACCOUNT:
            return {
                ...state,
                registrationSuccess: false
            };


        case REQUEST(ACTION_TYPES.UPDATE_INFOS_USER):
            return {
                ...state,
                entityUpdateInfosAccount: {},
                loadingUpdateInfosAccount: true,
                updateSuccessInfosAccount: false
            };
        case FAILURE(ACTION_TYPES.UPDATE_INFOS_USER):
            console.log('action = ', action);
            return {
                ...state,
                loadingUpdateInfosAccount: false,
                updateSuccessInfosAccount: false
            };
        case SUCCESS(ACTION_TYPES.UPDATE_INFOS_USER):
            return {
                ...state,
                entityUpdateInfosAccount: action.payload.data,
                loadingUpdateInfosAccount: false,
                updateSuccessInfosAccount: true
            };


        case REQUEST(ACTION_TYPES.UPDATE_PASSWORD_USER):
            return {
                ...state,
                loadingPasswordAccount: true,
                updateSuccessPasswordAccount: false
            };
        case FAILURE(ACTION_TYPES.UPDATE_PASSWORD_USER):
            return {
                ...state,
                loadingPasswordAccount: false,
                updateSuccessPasswordAccount: false
            };
        case SUCCESS(ACTION_TYPES.UPDATE_PASSWORD_USER):
            return {
                ...state,
                loadingPasswordAccount: false,
                updateSuccessPasswordAccount: true
            };


        case REQUEST(ACTION_TYPES.LOGIN):
            return{
                ...state,
                loginLoading: true,
            }
        case FAILURE(ACTION_TYPES.LOGIN):
            return {
                ...state,
                loginLoading: false,
                loginErrorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.LOGIN):
            return {
                ...state,
                loginLoading: false,
                loginSuccess: true,
            };


        case REQUEST(ACTION_TYPES.GET_SESSION):
            return{
                ...state,
                sessionLoading: true,
            }
        case FAILURE(ACTION_TYPES.GET_SESSION):
            return {
                ...initialState,
                sessionErrorMessage: action.payload.response.data.message,
            };
        case SUCCESS(ACTION_TYPES.GET_SESSION):
            return {
                ...state,
                sessionSuccess: true,
                isAuthenticated: true,
                currentUser: action.payload.data
            };


        case REQUEST(ACTION_TYPES.GET_PROFILE):
            return {
                ...state,
                profileLoading: true,
            };
        case FAILURE(ACTION_TYPES.GET_PROFILE):
            return {
                ...state,
                profileLoading: false,
                profileErrorMessage: action.payload.response.data.message,
            };
        case SUCCESS(ACTION_TYPES.GET_PROFILE): {
            return {
                ...state,
                profileLoading: false,
                profileEntity: action.payload.data,
            };
        }

        case REQUEST(ACTION_TYPES.GET_CURRENT_USER):
            return {
                ...state,
                loadingAccount: true,
            };
        case FAILURE(ACTION_TYPES.GET_CURRENT_USER):
            return {
                ...state,
                loadingAccount: false,
            };
        case SUCCESS(ACTION_TYPES.GET_CURRENT_USER):
            return {
                ...state,
                account: action.payload.data,
                loadingAccount: false,
            };

        case REQUEST(ACTION_TYPES.UPLOAD_AVATAR):
            return {
                ...state,
                loadingUploadAvatar: true,
                uploadAvatarSuccess: false
            };
        case FAILURE(ACTION_TYPES.UPLOAD_AVATAR):
            return {
                ...state,
                loadingUploadAvatar: false,
                uploadAvatarSuccess: false
            };
        case SUCCESS(ACTION_TYPES.UPLOAD_AVATAR):
            console.log('action.payload.data.imageUrl ', action.payload.data.imageUrl);
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    imageUrl: action.payload.data.imageUrl
                },
                loadingUploadAvatar: false,
                uploadAvatarSuccess: true
            };


        case ACTION_TYPES.ONE_SIGNAL_ID:
            return {
                ...state,
                oneSignalId: action.payload
            };

        case ACTION_TYPES.LOGOUT:
            return {
                ...initialState,
                oneSignalId: state.oneSignalId,
                isAuthenticated: false,
                currentUser: {}
            };

        default:
            return state;
    }
}

const apiUrl = 'api/user/';

// Actions
export const handleRegister = (email: string, password: string, sourceRegister: string, oneSignalId: string) => {
    const result = ({
        type: ACTION_TYPES.CREATE_ACCOUNT,
        payload: axios.post(`${apiUrl}public/signup`, {
            email: email,
            password: password,
            sourceRegister: sourceRegister,
            idOneSignal: oneSignalId
        }),
        // meta: {
        //     successMessage: 'register.messages.success',
        //     errorMessage: 'errorMessage'
        // },
    });
    return result;
};

export const resetRegister = () => ({
    type: ACTION_TYPES.RESET_CREATE_ACCOUNT,
});

export const activateAction = (key: string) => {
    const result = ({
        type: ACTION_TYPES.ACTIVATE_ACCOUNT,
        payload: axios.get(`${apiUrl}public/activate-account?key=`+ key),
        meta: {
            errorMessage: 'Invalid key'
        }
    });
    return result;
};

export const login: (email: string, password: string, oneSignalId: string, rememberMe?: boolean) => void = (email, password, oneSignalId: string, rememberMe = false) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: axios.post(`${apiUrl}public/signin`, {
            email: email,
            password: password,
            rememberMe: rememberMe,
            idOneSignal: oneSignalId
        }),
        // meta: {
        //     successMessage: 'Welcome',
        //     errorMessage: 'User not activated yet !'
        // }
    })
    const bearerToken = result.value.headers.authorization;
    if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        if (rememberMe) {
            StorageService.local.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);
        } else {
            StorageService.session.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);
        }

        await dispatch(getSession());
    }
    return result;
};

export const getSession: () => void = () => async (dispatch: any, getState: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.GET_SESSION,
        payload: axios.get(`${apiUrl}current-user`),
    });

    const account  = result?.value?.data;
    if (account) {
        StorageService.local.set(AllAppConfig.VALUE_CURRENT_USER, JSON.stringify(account));
    }
    return result;
};


export const getProfile: (userId: number) => void = (userId: number) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.GET_PROFILE,
        payload: axios.get<IUser>(`${apiUrl}public/profile/${userId}`),
    });
    return result;
};

export const getCurrentUser: () => void = () => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.GET_CURRENT_USER,
        payload: axios.get(`${apiUrl}current-user`),
    });
    return result;
};

export const uploadAvatar: (avatar: FormData) => void = entity => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.UPLOAD_AVATAR,
        payload: axios.post(`${apiUrl}avatar`, entity),
        meta: {
            successMessage: 'Changed avatar succefully',
        },
    });

    const account  = result?.value?.data;
    if (account) {
        StorageService.local.set(AllAppConfig.VALUE_CURRENT_USER, JSON.stringify(account));
    }

    return result;
};

export const updateInfosUser: (user: IUser) => void = (user: IUser) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.UPDATE_INFOS_USER,
        payload: axios.put(`${apiUrl}update-current-user`, user),
    });
    return result;
};


export const updatePasswordUser: (updatePassword: IUpdatePassword) => void = (updatePassword: IUpdatePassword) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.UPDATE_PASSWORD_USER,
        payload: axios.put(`${apiUrl}update-password-current-user`, updatePassword),
    });
    return result;
};

export const loginGooglePlus: (googlePlus: IGooglePlus) => void = (googlePlus: IGooglePlus) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: axios.post<IGooglePlus>(`${apiUrl}public/signin-google-plus`, googlePlus),
    })
    const bearerToken = result.value.headers.authorization;
    if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        StorageService.local.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);

        await dispatch(getSession());
    }
    return result;
};

export const loginFacebook: (facebook: IFacebook) => void = (facebook: IFacebook) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: axios.post<IFacebook>(`${apiUrl}public/signin-facebook`, facebook),
    })
    const bearerToken = result.value.headers.authorization;
    if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        StorageService.local.set(AllAppConfig.NAME_TOKEN_CURRENT_USER, jwt);

        await dispatch(getSession());
    }
    return result;
};

export const logout: () => void = () => (dispatch: any) => {
    clearAuthToken();
    dispatch({
        type: ACTION_TYPES.LOGOUT,
    });
};


export const clearAuthToken = () => {
    if (StorageService.local.get(AllAppConfig.NAME_TOKEN_CURRENT_USER)) {
        StorageService.local.remove(AllAppConfig.NAME_TOKEN_CURRENT_USER);
    }
    if (StorageService.session.get(AllAppConfig.NAME_TOKEN_CURRENT_USER)) {
        StorageService.session.remove(AllAppConfig.NAME_TOKEN_CURRENT_USER);
    }

    StorageService.local.remove(AllAppConfig.VALUE_CURRENT_USER);
};

export const clearAuthentication = (messageKey: string) => (dispatch: any, getState: any) => {
    clearAuthToken();
    dispatch({
        type: ACTION_TYPES.LOGOUT,
    });
    // clearAuthToken();
    // dispatch(displayAuthError(messageKey));
    // dispatch({
    //     type: ACTION_TYPES.CLEAR_AUTH,
    // });
};