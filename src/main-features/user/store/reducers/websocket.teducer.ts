import {PayloadAction} from "@reduxjs/toolkit";


export const ACTION_TYPES = {
    CONNECTED_WEBSOCKET: 'user/connectedUserWS',
    GET_CURRENT_USER_WS_LIST: 'user/GET_CURRENT_USER_WS_LIST',
    NEW_CONNECTED_USER: 'user/NEW_CONNECTED_USER',
    DISCONNECTED_USER: 'user/DISCONNECTED_USER',
}

const reducer = {

    connectedUserWS: (state: any) => {

    },

    fetchListConnectedUsersWS: (state: any, action: PayloadAction) => {

    },
    fetchListConnectedUsersWSSuccess: (state: any, action: PayloadAction) => {
        state.websocket.listConnectedUsers = action.payload;
    },
    fetchListConnectedUsersWSFailure: (state: any, action: PayloadAction) => {

    },
    addNewConnectedUser: (state: any, action: any) => {
        console.log('addNewConnectedUser ', action);
        state.websocket.listConnectedUsers =  pushListConnectedUser(state.websocket.listConnectedUsers.slice(), action.payload.email)
    },
    removeDisconnectedUser: (state: any, action: any) => {
        console.log('removeDisconnectedUser ', action);
        state.websocket.listConnectedUsers =  popListConnectedUser(state.websocket.listConnectedUsers.slice(), action.payload.email)
    },

}

export default reducer;


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
function popListConnectedUser (list: any[], email: string): any[] {
    const index = list.findIndex((item: any) => item.principal.email == email);
    if(index>=0){
        list.splice(index, 1);
    }
    return list;
}
