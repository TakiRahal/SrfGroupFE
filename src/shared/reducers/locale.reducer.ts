import dayjs from 'dayjs';
import {StorageService} from "../services/storage.service";

export const languages: any = {
    'ar-ly': { name: 'العربية', rtl: true },
    en: { name: 'English' },
    fr: { name: 'Français' },
};

export const ACTION_TYPES = {
    SET_LOCALE: 'locale/SET_LOCALE',
};

const initialState = {
    currentLocale: '',
};

export type LocaleState = Readonly<typeof initialState>;

export default (state: LocaleState = initialState, action: any): LocaleState => {
    switch (action.type) {
        case ACTION_TYPES.SET_LOCALE: {
            const currentLocale = action.locale;
            if (state.currentLocale !== currentLocale) {
                dayjs.locale(currentLocale);
            }
            return {
                ...state,
                currentLocale,
            };
        }
        default:
            return state;
    }
};

export const setLocale: (locale: string) => void = (locale: string) => async (dispatch: any) => {
    StorageService.session.set('locale', locale);
    document.querySelector('html')?.setAttribute('dir', isRTL(locale) ? 'rtl' : 'ltr');
    dispatch({
        type: ACTION_TYPES.SET_LOCALE,
        locale,
    });
};

export const locales = Object.keys(languages).sort();

export const isRTL = (lang: string): boolean => languages[lang] && languages[lang].rtl;
