import axios from 'axios';
import {defaultValue, IPostHomeFeature} from "../model/post-home-feature.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import {ITopHomeSlidesImages} from "../model/top-home-slides-images.model";

export const ACTION_TYPES = {
    FETCH_POST_HOME_FEATURE_LAST: 'postHomeFeature/FETCH_POST_HOME_FEATURE_LAST',
    RESET: 'postHomeFeature/RESET',
};

const initialState = {
    loadingEntity: false,
    entity: defaultValue,
    errorMessage: null
};

export type PostHomeFeatureState = Readonly<typeof initialState>;

// Reducer

export default (state: PostHomeFeatureState = initialState, action: any): PostHomeFeatureState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_POST_HOME_FEATURE_LAST):
            return {
                ...state,
                loadingEntity: true
            }
        case FAILURE(ACTION_TYPES.FETCH_POST_HOME_FEATURE_LAST):
            return {
                ...state,
                loadingEntity: false,
                errorMessage: action.payload,
            }
        case SUCCESS(ACTION_TYPES.FETCH_POST_HOME_FEATURE_LAST):
            return {
                ...state,
                loadingEntity: false,
                entity: action.payload.data,
            }

        case ACTION_TYPES.RESET:
            return {
                ...initialState,
            };

        default:
            return state;
    }
};

const apiUrl = 'api/post-home-feature';

// Actions


export const getEntity = () => {
    const requestUrl = `${apiUrl}/public/last`;
    return {
        type: ACTION_TYPES.FETCH_POST_HOME_FEATURE_LAST,
        payload: axios.get<ITopHomeSlidesImages>(requestUrl),
    };
};

export const reset = () => ({
    type: ACTION_TYPES.RESET,
});
