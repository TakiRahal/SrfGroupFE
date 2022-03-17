import {IOfferImages} from "../model/offer-images.model";
import axios from "axios";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";


export const ACTION_TYPES = {
    FETCH_OFFERIMAGES_LIST: 'offerImages/FETCH_OFFERIMAGES_LIST',
    FETCH_OFFERIMAGES_LIST_EXIST: 'offerImages/FETCH_OFFERIMAGES_LIST_EXIST',
    FETCH_OFFERIMAGES: 'offerImages/FETCH_OFFERIMAGES',
    CREATE_OFFERIMAGES: 'offerImages/CREATE_OFFERIMAGES',
    UPDATE_OFFERIMAGES: 'offerImages/UPDATE_OFFERIMAGES',
    PARTIAL_UPDATE_OFFERIMAGES: 'offerImages/PARTIAL_UPDATE_OFFERIMAGES',
    DELETE_OFFERIMAGES: 'offerImages/DELETE_OFFERIMAGES',
    RESET: 'offerImages/RESET',
};

const initialState = {
    errorMessage: null,
    entitiesExistOfferImages: [],
    loadingExistOfferImages: false,
    totalItemsExistOfferImages: 0,
};

export type OfferImagesState = Readonly<typeof initialState>;

// Reducer

export default (state: OfferImagesState = initialState, action: any): OfferImagesState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_OFFERIMAGES_LIST_EXIST):
            return {
                ...state,
                loadingExistOfferImages: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_OFFERIMAGES_LIST_EXIST):
            return {
                ...state,
                errorMessage: action.payload,
                loadingExistOfferImages: false,
            };
        case SUCCESS(ACTION_TYPES.FETCH_OFFERIMAGES_LIST_EXIST):
            return {
                ...state,
                loadingExistOfferImages: false,
                entitiesExistOfferImages: action.payload.data.content,
            };


        default:
            return state;
    }
}


const apiUrl = 'api/offer-images';

// Actions

export const getEntitiesExistOfferImages = (page: number, size: number, sort: string) => {
    const requestUrl = `${apiUrl}/public/offer-images-content${sort ? `?page=${page}&size=${size}` : ''}`;
    return {
        type: ACTION_TYPES.FETCH_OFFERIMAGES_LIST_EXIST,
        payload: axios.get<IOfferImages>(`${requestUrl}`),
    };
};