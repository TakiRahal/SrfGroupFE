import {defaultValue, IMessage} from "../model/message.model";
import axios from "axios";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";

export const ACTION_TYPES = {
    FETCH_MESSAGE_LIST: 'message/FETCH_MESSAGE_LIST',
    CREATE_MESSAGE: 'message/CREATE_MESSAGE',
}

const initialState = {
    loadingEntity: false,
    entity: defaultValue,
    loadingEntities: false,
    errorMessage: null,
    entities: [] as ReadonlyArray<IMessage>,
    addSuccess: false,
    totalItems: 0,
    totalPages: 0
}

export type MessageState = Readonly<typeof initialState>;


// Reducer

export default (state: MessageState = initialState, action: any): MessageState => {
    switch (action.type) {

        case REQUEST(ACTION_TYPES.FETCH_MESSAGE_LIST):
            return {
                ...state,
                loadingEntities: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_MESSAGE_LIST):
            return {
                ...state,
                errorMessage: action.payload,
                loadingEntities: false,
            };
        case SUCCESS(ACTION_TYPES.FETCH_MESSAGE_LIST):
            return {
                ...state,
                entities: action.payload.data.content,
                loadingEntities: false,
                totalItems: action.payload.data.totalElements,
                totalPages: action.payload.data.totalPages
            };


        case REQUEST(ACTION_TYPES.CREATE_MESSAGE):
            return {
                ...state,
                loadingEntity: true,
                addSuccess: false,
            };
        case FAILURE(ACTION_TYPES.CREATE_MESSAGE):
            return {
                ...state,
                errorMessage: action.payload,
                loadingEntity: false,
            };
        case SUCCESS(ACTION_TYPES.CREATE_MESSAGE):
            return {
                ...state,
                loadingEntity: false,
                addSuccess: true,
                entity: action.payload.data,
            };

        default:
            return state;
    }
}

const apiUrl = 'api/message/';


// Actions

export const addMessage = (entity: IMessage) => {
    return {
        type: ACTION_TYPES.CREATE_MESSAGE,
        payload: axios.post(`${apiUrl}create`, entity),
    };
};


export const getMessagesByConversation = (page: number, size: number, sort: string, conversationId?: number) => {
    // const requestUrl = `${apiUrl}current-user${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    const requestUrl = `${apiUrl}by-conversation/${conversationId}?page=${page}&size=${size}`;
    return {
        type: ACTION_TYPES.FETCH_MESSAGE_LIST,
        payload: axios.get<IMessage>(`${requestUrl}`),
    };
};