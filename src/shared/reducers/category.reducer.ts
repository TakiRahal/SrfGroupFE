import axios from "axios";
import {defaultValue, ICategory} from "../model/category.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";


export const ACTION_TYPES = {
    FETCH_CATEGORY_LIST: 'category/FETCH_CATEGORY_LIST',
    FETCH_PUBLIC_CATEGORY_LIST: 'category/FETCH_PUBLIC_CATEGORY_LIST',
    FETCH_CATEGORY: 'category/FETCH_CATEGORY',
    CREATE_CATEGORY: 'category/CREATE_CATEGORY',
    UPDATE_CATEGORY: 'category/UPDATE_CATEGORY',
    PARTIAL_UPDATE_CATEGORY: 'category/PARTIAL_UPDATE_CATEGORY',
    DELETE_CATEGORY: 'category/DELETE_CATEGORY',
    RESET: 'category/RESET',
};

const initialState = {
    loadingEntity: false,
    entity: defaultValue,
    loadingEntities: false,
    entities: [] as ReadonlyArray<ICategory>,
    updateSuccess: false,
    errorMessage: null,
    totalItems: 0,
}

export type CategoryState = Readonly<typeof initialState>;

// Reducer

export default (state: CategoryState = initialState, action: any): CategoryState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.FETCH_CATEGORY_LIST):
            return {
                ...state,
                loadingEntities: true,
            };
        case FAILURE(ACTION_TYPES.FETCH_CATEGORY_LIST):
            return {
                ...state,
                loadingEntities: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.FETCH_CATEGORY_LIST):
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

const apiUrl = 'api/category';

// Actions

export const getPublicEntities = (page: number, size: number, sort: string) => {
    const requestUrl = `${apiUrl}/public${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
    return {
        type: ACTION_TYPES.FETCH_CATEGORY_LIST,
        payload: axios.get<ICategory>(`${requestUrl}`),
    };
};