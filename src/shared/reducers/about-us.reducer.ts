import {defaultValue, IAboutUs} from "../model/about-us.model";
import axios from "axios";
import {getPathApi} from "../utils/utils-functions";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";


export const ACTION_TYPES = {
    FETCH_ABOUTUS: 'aboutUs/FETCH_ABOUTUS',
    RESET: 'aboutUs/RESET',
};


const initialState = {
    errorMessage: null,
    loadingEntity: false,
    entity: defaultValue,
};

export type AboutUsState = Readonly<typeof initialState>;

// Reducer

export default (state: AboutUsState = initialState, action: any): AboutUsState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_ABOUTUS):
            return {
                ...state,
                loadingEntity: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_ABOUTUS):
            return {
                ...state,
                loadingEntity: false,
                errorMessage: action.payload
            };
        case SUCCESS(ACTION_TYPES.FETCH_ABOUTUS):
            return {
                ...state,
                loadingEntity: false,
                entity: action.payload.data,
            };
        default:
            return state;
    }
}


const apiUrl = 'api/aboutus';

// Actions

export const getEntity = () => {
    const requestUrl = `${apiUrl}`;
    return {
        type: ACTION_TYPES.FETCH_ABOUTUS,
        payload: axios.get<IAboutUs>(`${getPathApi(requestUrl)}/public/last`),
    };
};