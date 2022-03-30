import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import axios from "axios";


export interface INewsLetter {
    email?: string | null;
}

export const defaultValue: Readonly<INewsLetter> = {};

export const ACTION_TYPES = {
    CREATE_NEWS_LETTER: 'newsLetter/CREATE_NEWS_LETTER',
};

const initialState = {
    loadingEntity: false,
    errorMessage: null,
    entities: [] as ReadonlyArray<INewsLetter>,
    loadingEntities: false,
    entity: defaultValue,
    totalItems: 0,
    loadingAddEntity: false,
    addSuccess: false,
};


export type NewsLetterState = Readonly<typeof initialState>;

// Reducer

export default (state: NewsLetterState = initialState, action: any): NewsLetterState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.CREATE_NEWS_LETTER):
            return {
                ...state,
                loadingAddEntity: true,
                addSuccess: false,
            };
        case FAILURE(ACTION_TYPES.CREATE_NEWS_LETTER):
            return {
                ...state,
                loadingAddEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.CREATE_NEWS_LETTER):
            return {
                ...state,
                loadingAddEntity: false,
                addSuccess: true,
                entity: action.payload.data,
            };


        default:
            return state;
    }
}

const apiUrl = 'api/news-letter';


// Actions

export const createEntity: (entity: INewsLetter) => void = (entity: INewsLetter) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_NEWS_LETTER,
        payload: axios.post(`${apiUrl}/public/create`, entity),
    });
    return result;
};