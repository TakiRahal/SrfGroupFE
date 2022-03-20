import React from 'react';
import {AllAppConfig, APP_LOCAL_DATETIME_FORMAT} from "../../core/config/all-config";
import {useLocation} from "react-router-dom";
import dayjs from 'dayjs';
import {SourceProvider} from "../enums/source-provider";
import {IUser} from "../model/user.model";

export const isPromise = (value: any): boolean => {
    if (value !== null && typeof value === 'object') {
        return value && typeof value.then === 'function';
    }
    return false;
};


export const getFullnameUser = (user?: IUser | null | undefined) => {
    return (user?.firstName || user?.lastName) ? user?.firstName+' '+user?.lastName : user?.email;
}

/**
 *
 * @returns {string}
 */
export const getBaseImageUrl = (path?: string) => {
    return `${process.env.REACT_APP_BASE_URL_FE +  (process.env?.REACT_APP_PUBLIC_URL || '')}` + path;
}

/**
 *
 * @param {string} pathApi
 * @returns {string}
 */
// export const getPathApi = (pathApi: string) => {
//     return process.env.REACT_APP_API_END_POINT + pathApi;
// }

/**
 *
 * @param {IOffer} offer
 * @returns {string}
 */
export const getImageForOffer = (offerId?: number, path?: string) => {
    if (!path) {
        return `${process.env.REACT_APP_BASE_URL_FE +  (process.env?.REACT_APP_PUBLIC_URL || '')}` + AllAppConfig.DEFAULT_LAZY_IMAGE;
    }
    return `${process.env.REACT_APP_API_END_POINT}api/offer/public/files/${offerId}/${path}`;
};

/**
 *
 * @param {string} username user
 * @param {string} imageUrl user
 * @returns {string}
 */
export const getUserAvatar = (userId: number, imageUrl?: string, sourceRegister?: string): string => {
    if (sourceRegister === SourceProvider.WEB || sourceRegister === SourceProvider.MOBILE) {
        if (!imageUrl) {
            return `${process.env.REACT_APP_BASE_URL_FE +  (process.env?.REACT_APP_PUBLIC_URL || '')}` + AllAppConfig.DEFAULT_AVATAR;
        }
        return `${process.env.REACT_APP_API_END_POINT}api/user/public/avatar/${userId}/${imageUrl}`;
    }

    // GooglePlus or Facebook
    return imageUrl || '';
};

/**
 *
 * @returns {URLSearchParams}
 */
export function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}


/**
 *
 * @param {string} dataUrl
 * @param {string} fileName
 * @returns {Promise<File>}
 */
export async function dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
}

export const convertDateTimeFromServer = (date: Date) => (date ? dayjs(date).format(APP_LOCAL_DATETIME_FORMAT) : null);

export const convertDateTimeToServer = (date: Date) => (date ? dayjs(date).toISOString() : '');

export const displayDefaultDateTime = () => dayjs().startOf('day').format(APP_LOCAL_DATETIME_FORMAT);