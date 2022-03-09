import {defaultValue, IFavoriteUser} from "../model/favorite.model";
import {getPathApi} from "../utils/utils-functions";
import axios from "axios";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";

export const ACTION_TYPES = {
    CREATE_FAVORITE: 'favorite/CREATE_FAVORITE',
    FETCH_MY_FAVORITE_LIST: 'favorite/FETCH_MY_FAVORITE_LIST',
    RESET: 'favorite/RESET',
};

const initialState = {
    loadingEntities: false,
    entities: [] as ReadonlyArray<IFavoriteUser>,
    errorMessage: null,
    loadingEntity: false,
    entity: defaultValue,
    addSuccess: false,
    totalItems: 0
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

        case REQUEST(ACTION_TYPES.FETCH_MY_FAVORITE_LIST):
            return {
                ...state,
                loadingEntities: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_MY_FAVORITE_LIST):
            return {
                ...state,
                loadingEntities: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_MY_FAVORITE_LIST):
            return {
                ...state,
                loadingEntities: false,
                entities: action.payload.data.content,
                totalItems: action.payload.data.totalElements
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

export const getEntitiesByUser = (page: number, size: number, sort: string) => {
    const requestUrl = `${apiUrl}/current-user`;
    return {
        type: ACTION_TYPES.FETCH_MY_FAVORITE_LIST,
        payload: axios.get<IFavoriteUser>(`${getPathApi(requestUrl)}`),
    };
};