import axios from "axios";
import {IReportOffer} from "../model/report-offer.model";
import {ReportOfferState} from "./report-offer.reducer";
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";

export const ACTION_TYPES = {
    CREATE_REPORT_COMMENTOFFER: 'reportCommentOffer/CREATE_REPORT_COMMENTOFFER',
};

const initialState = {
    loadingReportEntity: false,
    errorMessage: null,
    reportSuccess: false
}

export type ReportCommentOfferState = Readonly<typeof initialState>;


// Reducer

export default (state: ReportOfferState = initialState, action: any): ReportOfferState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.CREATE_REPORT_COMMENTOFFER):
            return {
                ...state,
                loadingReportEntity: true,
                reportSuccess: false
            };
        case FAILURE(ACTION_TYPES.CREATE_REPORT_COMMENTOFFER):
            return {
                ...state,
                loadingReportEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.CREATE_REPORT_COMMENTOFFER):
            return {
                ...state,
                loadingReportEntity: false,
                reportSuccess: true
            };

        default:
            return state;

    }
}


const apiUrl = 'api/reportcommentoffer';


// Actions

export const createEntity: (entity: IReportOffer) => void = (entity: IReportOffer) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_REPORT_COMMENTOFFER,
        payload: axios.post(`${apiUrl}/create`, entity),
    });
    return result;
};