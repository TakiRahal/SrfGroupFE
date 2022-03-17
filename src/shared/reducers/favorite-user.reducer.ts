import {defaultValue, IFavoriteUser} from "../model/favorite.model";
import axios from "axios";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";

export const ACTION_TYPES = {
    CREATE_FAVORITE: 'favorite/CREATE_FAVORITE',
    FETCH_MY_FAVORITE_LIST: 'favorite/FETCH_MY_FAVORITE_LIST',
    DELETE_FAVORITE: 'favorite/DELETE_FAVORITE',
    RESET: 'favorite/RESET',
};

const initialState = {
    loadingEntities: false,
    entities: [] as ReadonlyArray<IFavoriteUser>,
    errorMessage: null,
    loadingEntity: false,
    entity: defaultValue,
    addSuccess: false,
    loadingDeleteEntity: false,
    deleteSuccess: false,
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


        case REQUEST(ACTION_TYPES.DELETE_FAVORITE):
            return {
                ...state,
                loadingDeleteEntity: true,
                deleteSuccess: false,
            };
        case FAILURE(ACTION_TYPES.DELETE_FAVORITE):
            return {
                ...state,
                loadingDeleteEntity: false,
                deleteSuccess: false,
            };
        case SUCCESS(ACTION_TYPES.DELETE_FAVORITE):
            return {
                ...state,
                loadingDeleteEntity: false,
                deleteSuccess: true,
            };

        case ACTION_TYPES.RESET:
            return {
                ...initialState,
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
        payload: axios.post(`${apiUrl}/create`, entity),
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
        payload: axios.get<IFavoriteUser>(`${requestUrl}`),
    };
};

export const deleteEntity: (id: number) => void = (id: number) => async (dispatch: any) => {
    const requestUrl = `${apiUrl}/${id}`;
    const result = await dispatch({
        type: ACTION_TYPES.DELETE_FAVORITE,
        payload: axios.delete(requestUrl),
    });
    return result;
};

export const reset = () => ({
    type: ACTION_TYPES.RESET,
});