import {StorageService} from "../../../shared/services/storage.service";
import {AllAppConfig} from "../../../core/config/all-config";
import {loginWithGoogleOneTap} from "./slice";

const CURRENT_USER = StorageService.local.get(AllAppConfig.VALUE_CURRENT_USER) ? JSON.parse(StorageService.local.get(AllAppConfig.VALUE_CURRENT_USER)) : null;


export const initialState = {
    login: {
        token: '',
        loading: false,
        loginWithGoogleOneTapSuccess: false
    },
    session: {
        isAuthenticated: CURRENT_USER ? true : false,
        token: '',
        currentUser: CURRENT_USER ? CURRENT_USER : {},
        nbeNotificationsNotRead: 0,
        nbeMessagesNotRead: 0,
        oneSignalId: '',
        loading: false,
    },
    register: {
        loading: false,
        addSuccess: false,
        errorMessage: null,
    },
    locale: {
        currentLocale: 'fr'
    },
    account: {
        loadingPassword: false,
        updateSuccessPassword: false,
        entityUpdateInfos: {},
        loadingUpdateInfos: false,
        updateSuccessInfos: false,
        loadingUpdateAvatar: false,
        updateSuccessAvatar: false,
        entityUpdateAvatar: {},
    },
    profile: {
        loading: false,
        entity: {},
    },
    password: {
        loadingResetInit: false,
        resetInitSuccess: false
    },
    websocket: {
        listConnectedUsers: []
    }
};
