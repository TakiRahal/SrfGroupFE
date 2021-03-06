import axios from 'axios';
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import {IReportOffer} from "../model/report-offer.model";

export const ACTION_TYPES = {
    CREATE_REPORTOFFER: 'reportOffer/CREATE_REPORTOFFER',
};

const initialState = {
    loadingReportEntity: false,
    errorMessage: null,
    reportSuccess: false
}

export type ReportOfferState = Readonly<typeof initialState>;

// Reducer

export default (state: ReportOfferState = initialState, action: any): ReportOfferState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.CREATE_REPORTOFFER):
            return {
                ...state,
                loadingReportEntity: true,
                reportSuccess: false
            };
        case FAILURE(ACTION_TYPES.CREATE_REPORTOFFER):
            return {
                ...state,
                loadingReportEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.CREATE_REPORTOFFER):
            return {
                ...state,
                loadingReportEntity: false,
                reportSuccess: true
            };

        default:
            return state;

    }
}


const apiUrl = 'api/reportoffer';


// Actions

export const createEntity: (entity: IReportOffer) => void = (entity: IReportOffer) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_REPORTOFFER,
        payload: axios.post(`${apiUrl}/create`, entity),
    });
    return result;
};