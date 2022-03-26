export const AllAppConfig = {
    VERSION: process.env.VERSION,
    BASE_URL: process.env.NODE_ENV === 'development' ? 'http://192.168.100.104:8080/' : 'http://192.168.100.104:8080/srf-group/',
    BASE_URL_FE: process.env.NODE_ENV === 'development' ? process.env.PUBLIC_URL + '' : 'https://raw.githubusercontent.com/TakiRahal/SrfGroupFE/gh-pages',
    MaxNbeImagePerOffer: 5,
    MaxWidthHome: 1600,
    MainFeaturedPost: 'MainFeaturedPost',
    HomeMediumPost: 'HomeMediumPost',
    SlideListBottom: 'SlideListBottom',
    DEFAULT_AVATAR: '/assets/images/defaults/avatar.png',
    DEFAULT_LAZY_IMAGE: '/assets/images/defaults/default_image.jpg',
    KeyGoogleMaps: 'AIzaSyAe3rSYWX0QyDedMkgg9Mguzj-zd_1sO9k',
    NAME_TOKEN_CURRENT_USER: 'tokenCurrentUser',
    VALUE_CURRENT_USER: 'currentUser',
    APP_ID_FACEBOOK: '667046544674033',
    PAGEFACEBOO__ID: '100054409273167',
    CLIENT_ID_GOOGLLE: '936898141282-neqsvsprrf7e1pchibhsui8nmki8496b.apps.googleusercontent.com',
    APP_ID_ONESIGNAL: '52e18c28-761d-409f-a363-f58a9bd41cfe',
    Items_Per_Page: 2,
    Comments_Per_Page: 2,
    GOOGLE_ANALYTICS_MEASUREMENT_ID: 'G-T8KR5P5CC4'
};


export const APP_DATE_FORMAT = 'DD/MM/YY HH:mm';
export const APP_TIMESTAMP_FORMAT = 'DD/MM/YY HH:mm:ss';
export const APP_LOCAL_DATE_FORMAT = 'DD/MM/YYYY';
export const APP_LOCAL_DATETIME_FORMAT = 'YYYY-MM-DDTHH:mm';
export const APP_LOCAL_DATETIME_FORMAT_Z = 'YYYY-MM-DDTHH:mm Z';
export const APP_WHOLE_NUMBER_FORMAT = '0,0';
export const APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT = '0,0.[00]';