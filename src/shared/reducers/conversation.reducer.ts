import {defaultValue} from "../model/faq.model";
import axios from "axios";
import {IConversationMessage} from "../model/conversation-message.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import {IConversationContent} from "../model/conversation-content";


export const ACTION_TYPES = {
    FETCH_CONVERSATION_LIST: 'conversation/FETCH_CONVERSATION_LIST',
    FETCH_MY_CONVERSATION_LIST: 'conversation/FETCH_MY_CONVERSATION_LIST',
    CREATE_CONVERSATION_MESSAGE: 'conversation/CREATE_CONVERSATION_MESSAGE',
    FETCH_CONVERSATION: 'conversation/FETCH_CONVERSATION',
    CREATE_CONVERSATION: 'conversation/CREATE_CONVERSATION',
    UPDATE_CONVERSATION: 'conversation/UPDATE_CONVERSATION',
    PARTIAL_UPDATE_CONVERSATION: 'conversation/PARTIAL_UPDATE_CONVERSATION',
    DELETE_CONVERSATION: 'conversation/DELETE_CONVERSATION',
    RESET: 'conversation/RESET',
};


const initialState = {
    loadingEntities: false,
    errorMessage: null,
    entities: [] as ReadonlyArray<IConversationMessage>,
    loadingEntity: false,
    entity: defaultValue,
    addSuccess: false,
    updateSuccess: false,
    totalItems: 0,
}

export type ConversationState = Readonly<typeof initialState>;

// Reducer

export default (state: ConversationState = initialState, action: any): ConversationState => {
    switch (action.type) {

        case REQUEST(ACTION_TYPES.FETCH_MY_CONVERSATION_LIST):
            return {
                ...state,
                loadingEntities: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_MY_CONVERSATION_LIST):
            return {
                ...state,
                errorMessage: action.payload,
                loadingEntities: false,
            };
        case SUCCESS(ACTION_TYPES.FETCH_MY_CONVERSATION_LIST):
            return {
                ...state,
                entities: action.payload.data.content,
                loadingEntities: false,
                totalItems: action.payload.data.totalElements
            };

        case REQUEST(ACTION_TYPES.CREATE_CONVERSATION_MESSAGE):
            return {
                ...state,
                loadingEntity: true,
                addSuccess: false,
            };
        case FAILURE(ACTION_TYPES.CREATE_CONVERSATION_MESSAGE):
            return {
                ...state,
                loadingEntity: false,
                errorMessage: action.payload,
                addSuccess: false,
            };
        case SUCCESS(ACTION_TYPES.CREATE_CONVERSATION_MESSAGE):
            return {
                ...state,
                loadingEntity: false,
                entity: action.payload.data,
                addSuccess: true,
            };


        case ACTION_TYPES.RESET:
            return {
                ...initialState,
            };

        default:
            return state;
    }
}

const apiUrl = 'api/conversation/';

// Actions

export const getEntitiesCurrentUser = (page: number, size: number, sort: string) => {
    const requestUrl = `${apiUrl}current-user?page=${page}&size=${size}`;
    return {
        type: ACTION_TYPES.FETCH_MY_CONVERSATION_LIST,
        payload: axios.get<IConversationMessage>(`${requestUrl}`),
    };
};

export const createConversation = (entity: IConversationContent) => {
    return {
        type: ACTION_TYPES.CREATE_CONVERSATION_MESSAGE,
        payload: axios.post(`${apiUrl}create/message`, entity),
    };
};

export const reset = () => ({
    type: ACTION_TYPES.RESET,
});