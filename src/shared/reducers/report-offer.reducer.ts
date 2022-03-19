import axios from 'axios';
import {FAILURE, REQUEST, SUCCESS} from "./action-type.util";
import {defaultValue, IReportOffer} from "../model/report-offer.model";

export const ACTION_TYPES = {
    CREATE_REPORTOFFER: 'reportOffer/CREATE_REPORTOFFER',
    UPDATE_REPORTOFFER: 'reportOffer/UPDATE_REPORTOFFER',
    PARTIAL_UPDATE_REPORTOFFER: 'reportOffer/PARTIAL_UPDATE_REPORTOFFER',
    DELETE_REPORTOFFER: 'reportOffer/DELETE_REPORTOFFER',
    RESET: 'reportOffer/RESET',
};

const initialState = {
    loadingEntity: false,
    entity: defaultValue,
    loadingUpdateEntity: false,
    updateSuccess: false,
    addSuccess: false,
    entities: [] as ReadonlyArray<IReportOffer>,
    loadingEntities: false,
    errorMessage: null,
}

export type ReportOfferState = Readonly<typeof initialState>;

// Reducer

export default (state: ReportOfferState = initialState, action: any): ReportOfferState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.CREATE_REPORTOFFER):
            return {
                ...state,
                loadingEntity: true,
                addSuccess: false
            };
        case FAILURE(ACTION_TYPES.CREATE_REPORTOFFER):
            return {
                ...state,
                loadingEntity: false,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.CREATE_REPORTOFFER):
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


const apiUrl = 'api/reportoffer';


// Actions

export const createEntity: (entity: IReportOffer) => void = (entity: IReportOffer) => async (dispatch: any) => {
    const result = await dispatch({
        type: ACTION_TYPES.CREATE_REPORTOFFER,
        payload: axios.post(`${apiUrl}/create`, entity),
    });
    return result;
};