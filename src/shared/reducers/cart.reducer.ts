import {defaultValue, ICart} from "../model/cart.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import axios from "axios";
import {IOffer} from "../model/offer.model";
import {invokeWS, MethodHttp} from "../../core/config/api-service";


export const ACTION_TYPES = {
    FETCH_CART_LIST: 'cart/FETCH_CART_LIST',
    CREATE_CART: 'cart/CREATE_CART',
    UPDATE_CART: 'cart/UPDATE_CART',
    DELETE_CART: 'cart/DELETE_CART',
    FETCH_DETAILS_CART: 'cart/FETCH_DETAILS_CART'
}

const initialState = {
    loadingEntity: false,
    entity: defaultValue,
    addSuccess: false,
    updateSuccess: false,
    deleteSuccess: false,
    loadingDeleteEntity: false,
    entities: [] as ReadonlyArray<ICart>,
    loadingEntities: false,
    errorMessage: null,
    totalItems: 0,
    totalPages: 0,
    entityDetails: {}
}

export type CartState = Readonly<typeof initialState>;

// Reducer

export default (state: CartState = initialState, action: any): CartState => {
    switch (action.type) {

        case REQUEST(ACTION_TYPES.CREATE_CART):
            return {
                ...state,
                loadingEntity: true,
                addSuccess: false
            };
        case FAILURE(ACTION_TYPES.CREATE_CART):
            return {
                ...state,
                loadingEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.CREATE_CART):
            return {
                ...state,
                loadingEntity: false,
                entity: action.payload.data,
                addSuccess: true
            };


        case REQUEST(ACTION_TYPES.UPDATE_CART):
            return {
                ...state,
                updateSuccess: false
            };
        case FAILURE(ACTION_TYPES.UPDATE_CART):
            return {
                ...state,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.UPDATE_CART):
            return {
                ...state,
                updateSuccess: true,
                entityDetails: action.payload.data
            };


        case REQUEST(ACTION_TYPES.FETCH_DETAILS_CART):
            return {
                ...state,
            };
        case FAILURE(ACTION_TYPES.FETCH_DETAILS_CART):
            return {
                ...state,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_DETAILS_CART):
            return {
                ...state,
                entityDetails: action.payload.data
            };


        case REQUEST(ACTION_TYPES.FETCH_CART_LIST):
            return {
                ...state,
                loadingEntities: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_CART_LIST):
            return {
                ...state,
                errorMessage: action.payload,
                loadingEntities: false,
            };
        case SUCCESS(ACTION_TYPES.FETCH_CART_LIST):
            return {
                ...state,
                entities: action.payload.data.content,
                loadingEntities: false,
                totalItems: action.payload.data.totalElements
            };


        case REQUEST(ACTION_TYPES.DELETE_CART):
            return {
                ...state,
                loadingDeleteEntity: true,
                deleteSuccess: false
            };
        case FAILURE(ACTION_TYPES.DELETE_CART):
            return {
                ...state,
                loadingDeleteEntity: false,
            };
        case SUCCESS(ACTION_TYPES.DELETE_CART):
            return {
                ...state,
                loadingDeleteEntity: false,
                deleteSuccess: true
            };


        default:
            return state;
    }
}

const apiUrl = 'api/cart';

// Actions

export const createEntity: (entity: ICart) => void = (entity: ICart) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_CART,
        payload: axios.post(`${apiUrl}/create`, entity),
    });
    return result;
};

export const getEntities = (page: number, size: number, queryParams?: string) => {
    const requestUrl = `${apiUrl}/current-user?page=${page}&size=${size}${queryParams}`;
    return {
        type: ACTION_TYPES.FETCH_CART_LIST,
        // payload: axios.get<IOffer>(`${requestUrl}`),
        payload: invokeWS({
            url: `${requestUrl}`,
            method: 'GET',
        }, {}),
    };
};


export const getDetailsEntity = () => {
    return {
        type: ACTION_TYPES.FETCH_DETAILS_CART,
        // payload: axios.get<IOffer>(`${requestUrl}`),
        payload: invokeWS({
            url: `${apiUrl}/details-cart`,
            method: 'GET',
        }, {}),
    };
};


/**
 *
 * @param id
 */
export const deleteEntity: (id: number) => void = (id: number) => async (dispatch: any) => {
    const requestUrl = `${apiUrl}/${id}`;
    const result = await dispatch({
        type: ACTION_TYPES.DELETE_CART,
        payload: invokeWS({
            url: `${requestUrl}`,
            method: 'DELETE',
            loading: true
        }, {})
    });
    return result;
};


/**
 *
 * @param entity
 */
export const updateEntityByQuantity: (entity: ICart) => void = (entity: ICart) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.UPDATE_CART,
        // payload: axios.post(`${apiUrl}/update-quantity`, entity),
        payload: invokeWS({
            url: `${apiUrl}/update-quantity`,
            method: MethodHttp.put,
            loading: true
        }, entity)
    });
    return result;
};