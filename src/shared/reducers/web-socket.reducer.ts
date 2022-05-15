import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import {IUser} from "../model/user.model";
import axios from "axios";


export const ACTION_TYPES = {
    CONNECTED_WEBSOCKET: 'webSocket/CONNECTED_WEBSOCKET',
    GET_CURRENT_USER_WS_LIST: 'webSocket/GET_CURRENT_USER_WS_LIST',
    PUSH_LISTE_CONNECTED_USER: 'webSocket/PUSH_LISTE_CONNECTED_USER',
    POP_LISTE_CONNECTED_USER: 'webSocket/POP_LISTE_CONNECTED_USER',
}

const initialState = {
    listConnectedUsers: [] as any[]
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

        case ACTION_TYPES.PUSH_LISTE_CONNECTED_USER:
            return{
                ...state,
                listConnectedUsers: pushListConnectedUser(state.listConnectedUsers.slice(), action.payload)
            }
        case ACTION_TYPES.POP_LISTE_CONNECTED_USER:
            return{
                ...state,
                listConnectedUsers: pophListConnectedUser(state.listConnectedUsers.slice(), action.payload)
            }

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


export const removeEmailFromListConnectedUsers = (email: string) => ({
    type: ACTION_TYPES.POP_LISTE_CONNECTED_USER,
    payload: email
});

// Add item
function pushListConnectedUser (list: any[], email: string): any[] {
    const index = list.findIndex((item: any) => item.name == email);
    if(index<0){
        list.push({
            principal: {
                email: email
            }
        });
    }
    return list;
}

// Remove item
function pophListConnectedUser (list: any[], email: string): any[] {
    const index = list.findIndex((item: any) => item.principal.email == email);
    if(index>=0){
        list.splice(index, 1);
    }
    return list;
}

export function isOnLine(list:any[], email: string): boolean {
    console.log('email ', email);
    return false;
}