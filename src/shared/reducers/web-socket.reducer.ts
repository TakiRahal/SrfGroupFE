import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import {IUser} from "../model/user.model";
import axios from "axios";


export const ACTION_TYPES = {
    CONNECTED_WEBSOCKET: 'webSocket/CONNECTED_WEBSOCKET',
    GET_CURRENT_USER_WS_LIST: 'webSocket/GET_CURRENT_USER_WS_LIST',
}

const initialState = {
    listConnectedUsers: [] as IUser[]
}

export type WebSocketState = Readonly<typeof initialState>;

export default (state: WebSocketState = initialState, action: any): WebSocketState => {
    switch (action.type) {

        case REQUEST(ACTION_TYPES.GET_CURRENT_USER_WS_LIST):
            return {
                ...state,
            };
        case FAILURE(ACTION_TYPES.GET_CURRENT_USER_WS_LIST):
            return {
                ...state,
            };
        case SUCCESS(ACTION_TYPES.GET_CURRENT_USER_WS_LIST):
            return {
                ...state,
                listConnectedUsers: action.payload.data
            };

        default:
            return state;
    }
}


const apiUrl = 'api/websocket/';


export const getWebsocketListConnectedUsers: () => void = () => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.GET_CURRENT_USER_WS_LIST,
        payload: axios.get(`${apiUrl}connected-users`),
    });
    return result;
};


export const dispatchSuccessSession: () => void = () => (dispatch: any) => {
    dispatch({
        type: SUCCESS(ACTION_TYPES.CONNECTED_WEBSOCKET)
    })
};