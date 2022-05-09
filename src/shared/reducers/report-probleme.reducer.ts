import axios from 'axios';
import {defaultValue, IReportProbleme} from "../model/report-probleme.model";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";


export const ACTION_TYPES = {
    CREATE_REPORT_PROBLEME: 'reportProbleme/CREATE_REPORT_PROBLEME',
    RESET: 'reportProbleme/RESET',
};

const initialState = {
    loadingEntity: false,
    errorMessage: null,
    entity: defaultValue,
    addSuccess: false,
};

export type ReportProblemeState = Readonly<typeof initialState>;

// Reducer

export default (state: ReportProblemeState = initialState, action: any): ReportProblemeState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.CREATE_REPORT_PROBLEME):
            return {
                ...state,
                loadingEntity: true,
                addSuccess: false,
            };
        case FAILURE(ACTION_TYPES.CREATE_REPORT_PROBLEME):
            return {
                ...state,
                loadingEntity: false,
                addSuccess: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.CREATE_REPORT_PROBLEME):
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


const apiUrl = 'api/report-probleme';

// Actions

export const createEntity: (entity: IReportProbleme) => void = (entity: IReportProbleme) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_REPORT_PROBLEME,
        payload: axios.post(`${apiUrl}/create`, entity),
        // meta: {
        //     successMessage: 'contact-us.messages.success',
        // },
    });
    return result;
};
//
// export const reset = () => ({
//     type: ACTION_TYPES.RESET,
// });