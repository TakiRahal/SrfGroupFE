import SockJS from 'sockjs-client';

import Stomp, {Client} from 'webstomp-client';
import {Observable} from 'rxjs';
import {StorageService} from "../../shared/services/storage.service";
import {AllAppConfig} from "./all-config";
import {FAILURE, SUCCESS} from "../../shared/reducers/action-type.util";
import {ACTION_TYPES as WS_ACTIONS, getWebsocketListConnectedUsers} from '../../shared/reducers/web-socket.reducer';
import {ACTION_TYPES as AUTH_ACTIONS} from '../../shared/reducers/user-reducer';

let stompClient: any = null;

let subscriber: any = null;
let connection: Promise<any>;
let connectedPromise: any = null;
let listener: Observable<any>;
let listenerObserver: any;
let alreadyConnectedOnce = false;

const createConnection = (): Promise<any> => new Promise((resolve, reject) => (connectedPromise = resolve));

const createListener = (): Observable<any> =>
    new Observable(observer => {
        listenerObserver = observer;
    });

export const sendActivity = (page: string) => {
    connection?.then(() => {
        stompClient?.send(
            '/topic/activity', // destination
            JSON.stringify({page}), // body
            {} // header
        );
    });
};


export const sendConnectedNewUser = () => {
    connection?.then(() => {
        stompClient?.send(
            '/topic/user.connectedUser', // destination
            JSON.stringify({
                userEmail: 'test@taki.com'
            }), // body
            {} // header
        );
    });
};


/**
 *
 */
const subscribeConnectedUsers = () => {
    connection.then(() => {
        subscriber = stompClient.subscribe('/topic/connected-user', (data: any) => {
            console.log('data connected ', JSON.parse(data.body));
            listenerObserver.next(JSON.parse(data.body));
        });


    });
};

/**
 *
 */
const subscribeDisConnectedUsers = () => {
    connection.then(() => {
        subscriber = stompClient.subscribe('/topic/disconnected-user', (data: any) => {
            console.log('data disconnected ', JSON.parse(data.body));
            listenerObserver.next(JSON.parse(data.body));
        });
    });
};

/**
 *
 * @returns {any}
 */
export const getStompClient = (): Client => {
    return stompClient;
}

const connect = () => {
    console.log('connect WS');
    if (connectedPromise !== null || alreadyConnectedOnce) {
        // the connection is already being established
        return;
    }
    connection = createConnection();
    listener = createListener();

    // building absolute path so that websocket doesn't fail when deploying with a context path
    const loc = window.location;
    const baseHref = document.querySelector('base')?.getAttribute('href')?.replace(/\/$/, '');

    const authToken = StorageService.local.get(AllAppConfig.NAME_TOKEN_CURRENT_USER) || StorageService.session.get(AllAppConfig.NAME_TOKEN_CURRENT_USER);
    const headers = {};
    // let url = '//' + loc.host + baseHref + '/websocket/tracker';
    let url = AllAppConfig.BASE_URL_BE+'websocket/tracker';
    if (authToken) {
        url += '?access_token=' + authToken;
    }
    const socket = new SockJS(url);
    stompClient = Stomp.over(socket, {protocols: ['v12.stomp']});

    stompClient.connect(headers, () => {
        connectedPromise('success');
        connectedPromise = null;
        // sendActivity(window.location.pathname);
        alreadyConnectedOnce = true;

        sendConnectedNewUser();
    });
};

const disconnect = () => {
    if (stompClient !== null) {
        if (stompClient.connected) {
            stompClient.disconnect();
        }
        stompClient = null;
    }
    alreadyConnectedOnce = false;
};

const receive = () => listener;

const unsubscribe = () => {
    if (subscriber !== null) {
        subscriber.unsubscribe();
    }
    listener = createListener();
};

export default (store: any) => (next: any) => (action: any) => {
    if (action.type === SUCCESS(WS_ACTIONS.CONNECTED_WEBSOCKET)) {

        connect();
        subscribeConnectedUsers();
        subscribeDisConnectedUsers();


        connection.then((result) => {
            console.log('connection result ', result);
            if(result==='success'){
                store.dispatch(getWebsocketListConnectedUsers());
            }
        }, error => {
            console.log('connection error ', error);
        })


        receive().subscribe(activity => {
            console.log('new subscribe ', activity);
            if( activity.nameModule === 'ConnectedUser' ){
                return store.dispatch({
                    type: WS_ACTIONS.PUSH_LISTE_CONNECTED_USER,
                    payload: activity.userEmail,
                });
            }
            else if( activity.nameModule ==='DisconnectedUser' ){
                return store.dispatch({
                    type: WS_ACTIONS.POP_LISTE_CONNECTED_USER,
                    payload: activity.userEmail,
                });
            }
        })
        //


        // subscribe();
        // const isAdmin = action.payload.data.authorities.includes('ROLE_ADMIN');
        // if (!alreadyConnectedOnce && isAdmin) {
        //     subscribe();
        //     receive().subscribe(activity => {
        //         return store.dispatch({
        //             type: ADMIN_ACTIONS.WEBSOCKET_ACTIVITY_MESSAGE,
        //             payload: activity,
        //         });
        //     });
        // }
    } else if (action.type === AUTH_ACTIONS.LOGOUT) {
        unsubscribe();
        disconnect();
    }
    return next(action);
};