import axios from 'axios';
import {defaultValue, IContactUs} from "../model/contact-us.model";
import {getPathApi} from "../utils/utils-functions";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";


export const ACTION_TYPES = {
    CREATE_CONTACTUS: 'contactUs/CREATE_CONTACTUS',
    RESET: 'contactUs/RESET',
};

const initialState = {
    loadingEntity: false,
    errorMessage: null,
    entity: defaultValue,
    addSuccess: false,
};

export type ContactUsState = Readonly<typeof initialState>;

// Reducer

export default (state: ContactUsState = initialState, action: any): ContactUsState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.CREATE_CONTACTUS):
            return {
                ...state,
                loadingEntity: true,
            };
        case FAILURE(ACTION_TYPES.CREATE_CONTACTUS):
            return {
                ...state,
                loadingEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.CREATE_CONTACTUS):
            return {
                ...state,
                loadingEntity: false,
                addSuccess: true,
                entity: action.payload.data,
            };
        default:
            return state;
    }
}


const apiUrl = 'api/contactus';

// Actions

export const createEntity: (entity: IContactUs) => void = (entity: IContactUs) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_CONTACTUS,
        payload: axios.post(`${getPathApi(apiUrl)}/public`, entity),
        meta: {
            successMessage: 'contact-us.messages.success',
        },
    });
    return result;
};

export const reset = () => ({
    type: ACTION_TYPES.RESET,
});