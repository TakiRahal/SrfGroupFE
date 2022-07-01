import {defaultValue, IAboutUs} from "../model/about-us.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import {invokeWS} from "../../core/config/api-service";


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
        // payload: axios.get<IAboutUs>(`${requestUrl}/public/last`),
        payload: invokeWS({
            url: `${requestUrl}/public/last`,
            method: 'GET',
        }, {})
    };
};


export const aboutUsSelector = (state: any) => state.aboutUs;
