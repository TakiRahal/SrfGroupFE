import dayjs from 'dayjs';
import {StorageService} from "../services/storage.service";

export const languages: any = {
    'ar-ly': { name: 'العربية', rtl: true },
    en: { name: 'English' },
    fr: { name: 'Français' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
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
                // TranslatorContext.setLocale(currentLocale);
            }
            return {
                currentLocale,
            };
        }
        default:
            return state;
    }
};

export const setLocale: (locale: string) => void = (locale: string) => async (dispatch: any) => {
    // if (!Object.keys(TranslatorContext.context.translations).includes(locale)) {
    //   const response = await axios.get(`i18n/${locale}.json?buildTimestamp=${process.env.BUILD_TIMESTAMP}`, { baseURL: '' });
    //   TranslatorContext.registerTranslations(locale, response.data);
    // }

    StorageService.session.set('locale', locale);
    document.querySelector('html')?.setAttribute('dir', isRTL(locale) ? 'rtl' : 'ltr');
    dispatch({
        type: ACTION_TYPES.SET_LOCALE,
        locale,
    });
};

export const locales = Object.keys(languages).sort();

export const isRTL = (lang: string): boolean => languages[lang] && languages[lang].rtl;