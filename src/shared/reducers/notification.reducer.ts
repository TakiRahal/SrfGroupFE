import axios from "axios";
import {INotification} from "../model/notification.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";


export const ACTION_TYPES = {
    FETCH_NOTIFICATION_LIST: 'notification/FETCH_NOTIFICATION_LIST',
    FETCH_MY_NOTIFICATION_LIST: 'notification/FETCH_MY_NOTIFICATION_LIST',
    FETCH_NUMBER_NOT_READ_NOTIFICATIONS: 'notification/FETCH_NUMBER_NOT_READ_NOTIFICATIONS',
    FETCH_NOTIFICATION: 'notification/FETCH_NOTIFICATION',
    CREATE_NOTIFICATION: 'notification/CREATE_NOTIFICATION',
    UPDATE_NOTIFICATION: 'notification/UPDATE_NOTIFICATION',
    PARTIAL_UPDATE_NOTIFICATION: 'notification/PARTIAL_UPDATE_NOTIFICATION',
    DELETE_NOTIFICATION: 'notification/DELETE_NOTIFICATION',
    SET_BLOB: 'notification/SET_BLOB',
    RESET: 'notification/RESET',
};

const initialState = {
    loadingEntities: false,
    errorMessage: null,
    entities: [] as ReadonlyArray<INotification>,
    totalItems: 0,
}

export type NotificationState = Readonly<typeof initialState>;

// Reducer

export default (state: NotificationState = initialState, action: any): NotificationState => {
    switch (action.type) {

        case REQUEST(ACTION_TYPES.FETCH_NOTIFICATION_LIST):
            return {
                ...state,
                loadingEntities: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_NOTIFICATION_LIST):
            return {
                ...state,
                loadingEntities: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_NOTIFICATION_LIST):
            return {
                ...state,
                loadingEntities: false,
                entities: action.payload.data.content,
                totalItems: action.payload.data.totalElements
            };
        default:
            return state;
    }
};

const apiUrl = 'api/notification';

// Actions

export const getEntities = (page: number, size: number, sort: string) => {
    const requestUrl = `${apiUrl}/current-user${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    return {
        type: ACTION_TYPES.FETCH_NOTIFICATION_LIST,
        payload: axios.get<INotification>(`${requestUrl}`),
    };
};