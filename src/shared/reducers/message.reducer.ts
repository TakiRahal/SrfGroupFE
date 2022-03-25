import {IMessage} from "../model/message.model";
import axios from "axios";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";

export const ACTION_TYPES = {
    FETCH_MESSAGE_LIST: 'message/FETCH_MESSAGE_LIST',
    CREATE_MESSAGE: 'message/CREATE_MESSAGE',
}

const initialState = {
    loadingEntities: false,
    errorMessage: null,
    entities: [] as ReadonlyArray<IMessage>,
    totalItems: 0,
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
                totalItems: action.payload.data.totalElements
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


export const getMessagesByConversation = (conversationId?: number) => {
    // const requestUrl = `${apiUrl}current-user${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    const requestUrl = `${apiUrl}by-conversation/${conversationId}`;
    return {
        type: ACTION_TYPES.FETCH_MESSAGE_LIST,
        payload: axios.get<IMessage>(`${requestUrl}`),
    };
};