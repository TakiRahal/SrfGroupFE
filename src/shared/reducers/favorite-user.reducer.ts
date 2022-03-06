import {defaultValue} from "../model/about-us.model";
import {IFavoriteUser} from "../model/favorite.model";
import {getPathApi} from "../utils/utils-functions";
import axios from "axios";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";

export const ACTION_TYPES = {
    CREATE_FAVORITE: 'favorite/CREATE_FAVORITE',
    RESET: 'favorite/RESET',
};

const initialState = {
    errorMessage: null,
    loadingEntity: false,
    entity: defaultValue,
    addSuccess: false,
}

export type FavoriteUserState = Readonly<typeof initialState>;


// Reducer

export default (state: FavoriteUserState = initialState, action: any): FavoriteUserState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.CREATE_FAVORITE):
            return {
                ...state,
                loadingEntity: true,
            };
        case FAILURE(ACTION_TYPES.CREATE_FAVORITE):
            return {
                ...state,
                loadingEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.CREATE_FAVORITE):
            return {
                ...state,
                loadingEntity: false,
                entity: action.payload.data,
                addSuccess: true
            };
        default:
            return state;
    }
}

const apiUrl = 'api/favoriteuser';


// Actions

export const createEntity: (entity: IFavoriteUser) => void = (entity: IFavoriteUser) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_FAVORITE,
        payload: axios.post(`${getPathApi(apiUrl)}/create`, entity),
        meta: {
            successMessage: 'User added successfuly',
        }
    });
    return result;
};