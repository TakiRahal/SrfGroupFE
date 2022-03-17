import axios from 'axios';
import {defaultValue, IOffer} from "../model/offer.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import {defaultValueOFU, IOfferFavoriteUser} from "../model/offer-favorite-user";

export const ACTION_TYPES = {
    FETCH_OFFER_LIST: 'offer/FETCH_OFFER_LIST',
    UPLOAD_FILE_OFFER: 'offer/UPLOAD_FILE_OFFER',
    FETCH_MY_OFFER_LIST: 'offer/FETCH_MY_OFFER_LIST',
    FETCH_OFFER_LIST_FOR_USER: 'offer/FETCH_OFFER_LIST_FOR_USER',
    FETCH_OFFER_LIST_ADDED_RECENTLY: 'offer/FETCH_OFFER_LIST_ADDED_RECENTLY',
    FETCH_OFFER_WITH_FAVORITE_USER: 'offer/FETCH_OFFER_WITH_FAVORITE_USER',
    FETCH_OFFER: 'offer/FETCH_OFFER',
    CREATE_OFFER: 'offer/CREATE_OFFER',
    UPDATE_OFFER: 'offer/UPDATE_OFFER',
    PARTIAL_UPDATE_OFFER: 'offer/PARTIAL_UPDATE_OFFER',
    DELETE_OFFER: 'offer/DELETE_OFFER',
    SET_BLOB: 'offer/SET_BLOB',
    RESET: 'offer/RESET',
};

const initialState = {
    loadingEntity: false,
    entityWithFavoriteUser: defaultValueOFU,
    entity: defaultValue,
    updateSuccess: false,
    deleteSuccess: false,
    entities: [] as ReadonlyArray<IOffer>,
    loadingEntities: false,
    errorMessage: null,
    totalItems: 0,

    entitiesForUser: [] as ReadonlyArray<IOffer>,
    loadingEntitiesForUser: false,

    loadingMyOffers: false,
    entitiesMyOffers: [] as ReadonlyArray<IOffer>,
    totalItemsMyOffers: 0,

    loadingRecentlyAddedOffers: false,
    entitiesRecentlyAddedOffers: [] as ReadonlyArray<IOffer>,
    totalItemsRecentlyAddedOffers: 0,
};

export type OfferState = Readonly<typeof initialState>;

// Reducer

export default (state: OfferState = initialState, action: any): OfferState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_OFFER_LIST):
            return {
                ...state,
                loadingEntities: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_OFFER_LIST):
            return {
                ...state,
                loadingEntities: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_OFFER_LIST):
            return {
                ...state,
                loadingEntities: false,
                entities: action.payload.data.content,
                totalItems: action.payload.data.totalElements
            };


        case REQUEST(ACTION_TYPES.FETCH_OFFER_WITH_FAVORITE_USER):
            return {
                ...state,
                loadingEntity: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_OFFER_WITH_FAVORITE_USER):
            return {
                ...state,
                loadingEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_OFFER_WITH_FAVORITE_USER):
            return {
                ...state,
                loadingEntity: false,
                entityWithFavoriteUser: action.payload.data,
            };


        case REQUEST(ACTION_TYPES.FETCH_OFFER_LIST_FOR_USER):
            return {
                ...state,
                loadingEntitiesForUser: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_OFFER_LIST_FOR_USER):
            return {
                ...state,
                loadingEntitiesForUser: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_OFFER_LIST_FOR_USER): {
            return {
                ...state,
                loadingEntitiesForUser: false,
                entitiesForUser: action.payload.data.content,
            };
        }


        case REQUEST(ACTION_TYPES.FETCH_MY_OFFER_LIST):
            return {
                ...state,
                loadingMyOffers: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_MY_OFFER_LIST):
            return {
                ...state,
                loadingMyOffers: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_MY_OFFER_LIST):
            return {
                ...state,
                loadingMyOffers: false,
                entitiesMyOffers: action.payload.data.content,
                totalItemsMyOffers: action.payload.data.totalElements,
            };


        case REQUEST(ACTION_TYPES.DELETE_OFFER):
            return {
                ...state,
                deleteSuccess: false,
            };
        case FAILURE(ACTION_TYPES.DELETE_OFFER):
            return {
                ...state,
                deleteSuccess: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.DELETE_OFFER):
            return {
                ...state,
                deleteSuccess: true,
                // entity: {},
            };


        case REQUEST(ACTION_TYPES.FETCH_OFFER_LIST_ADDED_RECENTLY):
            return {
                ...state,
                loadingMyOffers: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_OFFER_LIST_ADDED_RECENTLY):
            return {
                ...state,
                loadingMyOffers: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_OFFER_LIST_ADDED_RECENTLY):
            return {
                ...state,
                loadingRecentlyAddedOffers: false,
                entitiesRecentlyAddedOffers: action.payload.data.content,
                totalItemsRecentlyAddedOffers: action.payload.data.totalElements,
            };


        case REQUEST(ACTION_TYPES.FETCH_OFFER):
            return {
                ...state,
                loadingEntity: false,
            };
        case FAILURE(ACTION_TYPES.FETCH_OFFER):
            return {
                ...state,
                loadingEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_OFFER):
            return {
                ...state,
                loadingEntity: false,
                entity: action.payload.data,
            };

        case ACTION_TYPES.RESET:
            return {
                ...initialState,
            };

        default:
            return state;
    }
}


const apiUrl = 'api/offer';

// Actions

export const getEntities = (page: number, size: number, sort: string) => {
    const requestUrl = `${apiUrl + '/public'}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    return {
        type: ACTION_TYPES.FETCH_OFFER_LIST,
        payload: axios.get<IOffer>(`${requestUrl}`),
    };
};

export const getEntitiesForCurrentUser = (page: number, size: number, sort: string) => {
    const requestUrl = `${apiUrl + '/current-user'}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    return {
        type: ACTION_TYPES.FETCH_MY_OFFER_LIST,
        payload: axios.get<IOffer>(`${requestUrl}`),
    };
};

export const getEntitiesRecentlyAdded = (page: number, size: number, sort: string) => {
    const requestUrl = `${apiUrl + '/public'}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    return {
        type: ACTION_TYPES.FETCH_OFFER_LIST_ADDED_RECENTLY,
        payload: axios.get<IOffer>(`${requestUrl}`),
    };
};

export const getEntity = (id: number) => {
    const requestUrl = `${apiUrl}/${id}`;
    return {
        type: ACTION_TYPES.FETCH_OFFER,
        payload: axios.get<IOffer>(`${requestUrl}`),
    };
};


export const getEntitywithFavorite = (id: string) => {
    const requestUrl = `${apiUrl}/public/${id}`;
    return {
        type: ACTION_TYPES.FETCH_OFFER_WITH_FAVORITE_USER,
        payload: axios.get<IOfferFavoriteUser>(`${requestUrl}`),
    };
};

export const getPublicEntitiesForUser = (page: number, size: number, sort: string, userId: number) => {
    const requestUrl = `${apiUrl + '/public'}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    return {
        type: ACTION_TYPES.FETCH_OFFER_LIST_FOR_USER,
        payload: axios.get<any>(`${requestUrl}?user.id=${userId}`),
    };
};

export const createEntity = (entity: any) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_OFFER,
        payload: axios.post(apiUrl, entity),
    });
    return result;
};

export const updateEntity = (entity: any) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.UPDATE_OFFER,
        payload: axios.put(`${apiUrl}/${entity.id}`, entity),
    });
    return result;
};

export const partialUpdate = (entity: any) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.PARTIAL_UPDATE_OFFER,
        payload: axios.patch(`${apiUrl}/${entity.id}`, entity),
    });
    return result;
};

export const deleteEntity: (id: number) => void = (id: number) => async (dispatch: any) => {
    const requestUrl = `${apiUrl}/${id}`;
    const result = await dispatch({
        type: ACTION_TYPES.DELETE_OFFER,
        payload: axios.delete(`${requestUrl}`),
        meta: {
            successMessage: 'Offer delete succefully',
        },
    });
    return result;
};

export const setBlob = (name: string, data: string, contentType?: string) => ({
    type: ACTION_TYPES.SET_BLOB,
    payload: {
        name,
        data,
        contentType,
    },
});


export const uploadFiles: (entity: FormData) => void = (entity: FormData) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.UPLOAD_FILE_OFFER,
        payload: axios.post(`${apiUrl}/upload-images`, entity),
    });
    return result;
};

export const reset = () => ({
    type: ACTION_TYPES.RESET,
});