import axios from 'axios';
import {defaultValue, IAddress} from "../model/address.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";


export const ACTION_TYPES = {
    FETCH_ADDRESS_LIST: 'address/FETCH_ADDRESS_LIST',
    // FETCH_PUBLIC_ADDRESS_LIST: 'address/FETCH_PUBLIC_ADDRESS_LIST',
    // FETCH_ADDRESS: 'address/FETCH_ADDRESS',
    // CREATE_ADDRESS: 'address/CREATE_ADDRESS',
    // UPDATE_ADDRESS: 'address/UPDATE_ADDRESS',
    // PARTIAL_UPDATE_ADDRESS: 'address/PARTIAL_UPDATE_ADDRESS',
    // DELETE_ADDRESS: 'address/DELETE_ADDRESS',
    RESET: 'address/RESET',
};

const initialState = {
    loadingEntity: false,
    entity: defaultValue,
    entities: [] as ReadonlyArray<IAddress>,
    loadingEntities: false,
    updateSuccess: false,
    errorMessage: null,
    totalItems: 0,
};

export type AddressState = Readonly<typeof initialState>;

// Reducer

export default (state: AddressState = initialState, action: any): AddressState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_ADDRESS_LIST):
            return {
                ...state,
                loadingEntity: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_ADDRESS_LIST):
            return {
                ...state,
                loadingEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_ADDRESS_LIST): {
            return {
                ...state,
                loadingEntity: false,
                entities: action.payload.data.content,
                totalItems: action.payload.data.totalElements
            };
        }
        case ACTION_TYPES.RESET:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

const apiUrl = 'api/address';

// Actions


export const getEntities = (page: number, size: number, sort: string) => {
    const requestUrl = `${apiUrl}/public${`?page=${page}&size=${size}&sort=${sort}`}`;
    return {
        type: ACTION_TYPES.FETCH_ADDRESS_LIST,
        payload: axios.get<IAddress>(requestUrl),
    };
};


export const reset = () => ({
    type: ACTION_TYPES.RESET,
});