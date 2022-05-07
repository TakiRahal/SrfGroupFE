import axios from 'axios';
import {defaultValue, ICommentOffer} from "../model/comment-offer.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";

export const ACTION_TYPES = {
    FETCH_COMMENTOFFER_LIST: 'commentOffer/FETCH_COMMENTOFFER_LIST',
    FETCH_COMMENTOFFER_LIST_BY_OFFER: 'commentOffer/FETCH_COMMENTOFFER_LIST_BY_OFFER',
    FETCH_COMMENTOFFER: 'commentOffer/FETCH_COMMENTOFFER',
    CREATE_COMMENTOFFER: 'commentOffer/CREATE_COMMENTOFFER',
    UPDATE_COMMENTOFFER: 'commentOffer/UPDATE_COMMENTOFFER',
    PARTIAL_UPDATE_COMMENTOFFER: 'commentOffer/PARTIAL_UPDATE_COMMENTOFFER',
    DELETE_COMMENTOFFER: 'commentOffer/DELETE_COMMENTOFFER',
    REPORT_COMMENTOFFER: 'commentOffer/REPORT_COMMENTOFFER',
    SET_BLOB: 'commentOffer/SET_BLOB',
    RESET: 'commentOffer/RESET',
};

const initialState = {
    loadingEntity: false,
    errorMessage: null,
    entities: [] as ReadonlyArray<ICommentOffer>,
    loadingEntities: false,
    entity: defaultValue,
    totalItems: 0,
    loadingAddEntity: false,
    addSuccess: false,
    updateSuccess: false,
    entitiesByOffer: [] as ReadonlyArray<ICommentOffer>,
    loadingEntitiesByOffer: false,
    loadingUpdateEntity: false,
    totalItemsEntitiesByOffer: 0,
    loadingDeleteEntity: false,
    deleteSuccess: false,
};

export type CommentOfferState = Readonly<typeof initialState>;

// Reducer

export default (state: CommentOfferState = initialState, action: any): CommentOfferState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_COMMENTOFFER_LIST_BY_OFFER):
            return {
                ...state,
                loadingEntitiesByOffer: true
            };
        case FAILURE(ACTION_TYPES.FETCH_COMMENTOFFER_LIST_BY_OFFER):
            return {
                ...state,
                loadingEntitiesByOffer: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_COMMENTOFFER_LIST_BY_OFFER): {
            return {
                ...state,
                loadingEntitiesByOffer: false,
                entitiesByOffer: [
                    ...state.entitiesByOffer,
                    ...action.payload.data.content
                ],
                totalItemsEntitiesByOffer: action.payload.data.totalElements
            };
        }


        case REQUEST(ACTION_TYPES.CREATE_COMMENTOFFER):
            return {
                ...state,
                loadingAddEntity: true,
                addSuccess: false,
            };
        case FAILURE(ACTION_TYPES.CREATE_COMMENTOFFER):
            return {
                ...state,
                loadingAddEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.CREATE_COMMENTOFFER):
            return {
                ...state,
                loadingAddEntity: false,
                addSuccess: true,
                entity: action.payload.data,
            };


        case REQUEST(ACTION_TYPES.UPDATE_COMMENTOFFER):
            return {
                ...state,
                updateSuccess: false,
                loadingUpdateEntity: true,
            };
        case FAILURE(ACTION_TYPES.UPDATE_COMMENTOFFER):
            return {
                ...state,
                loadingUpdateEntity: false,
                updateSuccess: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.UPDATE_COMMENTOFFER):
            return {
                ...state,
                loadingUpdateEntity: false,
                updateSuccess: true,
                entity: action.payload.data,
            };

        case REQUEST(ACTION_TYPES.DELETE_COMMENTOFFER):
            return {
                ...state,
                loadingDeleteEntity: true,
                deleteSuccess: false
            };
        case FAILURE(ACTION_TYPES.DELETE_COMMENTOFFER):
            return {
                ...state,
                loadingDeleteEntity: false,
            };
        case SUCCESS(ACTION_TYPES.DELETE_COMMENTOFFER):
            return {
                ...state,
                loadingDeleteEntity: false,
                deleteSuccess: true
            };

        case ACTION_TYPES.SET_BLOB: {
            const {name, data, contentType} = action.payload;
            return {
                ...state,
                entity: {
                    ...state.entity,
                    [name]: data,
                    [name + 'ContentType']: contentType,
                },
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

const apiUrl = 'api/comment-offer';

// Actions


export const getEntitiesByOffer = (offerId: number, page: number, size: number, sort: string) => {
    // const requestUrl = `${apiUrl}/by-offer/${offerId}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    const requestUrl = `${apiUrl}/by-offer/${offerId}?page=${page}&size=${size}`;
    return {
        type: ACTION_TYPES.FETCH_COMMENTOFFER_LIST_BY_OFFER,
        payload: axios.get<ICommentOffer>(`${requestUrl}`),
    };
};

export const addCommentOffer: (entity: ICommentOffer) => void = (entity: ICommentOffer) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_COMMENTOFFER,
        payload: axios.post(`${apiUrl}/create`, entity),
    });
    return result;
};

export const updateEntity: (entity: ICommentOffer) => void = (entity: ICommentOffer) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.UPDATE_COMMENTOFFER,
        payload: axios.put(`${apiUrl}/${entity.id}`, entity),
        // meta: {
        //     successMessage: 'Comment update succefully',
        // },
    });
    return result;
};

export const deleteEntity: (id: number) => void = (id: number) => async (dispatch: any) => {
    const requestUrl = `${apiUrl}/${id}`;
    const result = await dispatch({
        type: ACTION_TYPES.DELETE_COMMENTOFFER,
        payload: axios.delete(requestUrl),
        // meta: {
        //     successMessage: 'Comment delete succefully',
        // },
    });
    return result;
};

export const reset = () => ({
    type: ACTION_TYPES.RESET,
});
