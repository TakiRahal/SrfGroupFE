import axios from "axios";
import {INotification} from "../model/notification.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import {IUser} from "../model/user.model";


export const ACTION_TYPES = {
    FETCH_NOTIFICATION_LIST: 'notification/FETCH_NOTIFICATION_LIST',
    SET_IS_READ_NOTIFICATION_LIST: 'notification/SET_IS_READ_NOTIFICATION_LIST',
    RESET: 'notification/RESET',
};

const initialState = {
    loadingEntities: false,
    errorMessage: null,
    entities: [] as ReadonlyArray<INotification>,
    totalItems: 0,
    totalPages: 0,

    loadIsRead: false,
    addSuccessIsRead: false
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
                entities: [
                    ...state.entities,
                    ...action.payload.data.content
                ],
                totalItems: action.payload.data.totalElements,
                totalPages: action.payload.data.totalPages
            };


        case REQUEST(ACTION_TYPES.SET_IS_READ_NOTIFICATION_LIST):
            return {
                ...state,
                loadIsRead: true,
                addSuccessIsRead: false
            };
        case FAILURE(ACTION_TYPES.SET_IS_READ_NOTIFICATION_LIST):
            return {
                ...state,
                loadIsRead: false,
                addSuccessIsRead: false
            };
        case SUCCESS(ACTION_TYPES.SET_IS_READ_NOTIFICATION_LIST):
            return {
                ...state,
                loadIsRead: false,
                addSuccessIsRead: true
            };


        case ACTION_TYPES.RESET:
            return {
                ...initialState,
            };


        default:
            return state;
    }
};

const apiUrl = 'api/notification';

// Actions

export const getEntities = (page: number, size: number, sort: string) => {
    const requestUrl = `${apiUrl}/current-user?page=${page}&size=${size}`;
    return {
        type: ACTION_TYPES.FETCH_NOTIFICATION_LIST,
        payload: axios.get<INotification>(`${requestUrl}`),
    };
};


export const setIsReadNotifications = (notifications: INotification[]) => {
    const requestUrl = `${apiUrl}/set-is-read`;
    return {
        type: ACTION_TYPES.SET_IS_READ_NOTIFICATION_LIST,
        payload: axios.post<INotification[]>(`${requestUrl}`, notifications),
    };
};

export const reset = () => ({
    type: ACTION_TYPES.RESET,
});