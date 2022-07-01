import {StorageService} from "../../../shared/services/storage.service";
import {AllAppConfig} from "../../../core/config/all-config";

const CURRENT_USER = StorageService.local.get(AllAppConfig.VALUE_CURRENT_USER) ? JSON.parse(StorageService.local.get(AllAppConfig.VALUE_CURRENT_USER)) : null;


export const initialState = {
    login: {
        token: '',
        loading: false,
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

    },
    locale: {
        currentLocale: 'fr'
    }
};
