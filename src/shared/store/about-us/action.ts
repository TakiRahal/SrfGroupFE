import {FAILURE, REQUEST, SUCCESS} from "../../reducers/action-type.util";

export const ACTION_TYPES = {
    FETCH_ABOUTUS: 'aboutUs/FETCH_ABOUTUS',
    RESET: 'aboutUs/RESET',
};

export const getEntitiesAboutUs = () => {
    return {
        type: REQUEST(ACTION_TYPES.FETCH_ABOUTUS)
    };
};
export const getEntitiesAboutUsSuccess = (posts: any) => {
    return {
        type: SUCCESS(ACTION_TYPES.FETCH_ABOUTUS),
        payload: posts,
    };
};
export const getEntitiesAboutUsFail = (error: any) => {
    return {
        type: FAILURE(ACTION_TYPES.FETCH_ABOUTUS),
        payload: error,
    };
};

