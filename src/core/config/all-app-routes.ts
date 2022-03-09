export const ALL_APP_ROUTES = {
    HOME: process.env.PUBLIC_URL+'/',
    REGISTER: process.env.PUBLIC_URL+'/register',
    LOGIN: process.env.PUBLIC_URL+'/login',
    ACTIVATION_ACCOUNT: process.env.PUBLIC_URL+'/activation-account',
    SEARCH: process.env.PUBLIC_URL+'/search',
    ADD_UPDATE_OFFER: process.env.PUBLIC_URL+'/add-update',
    DETAILS_OFFER: process.env.PUBLIC_URL+'/details',
    PROFILE: process.env.PUBLIC_URL+'/profile',
    ACCOUNT: process.env.PUBLIC_URL+'/account',
    SUPPORT: {
        FAQ: process.env.PUBLIC_URL+'/cms/faq',
        ABOUT_US: process.env.PUBLIC_URL+'/cms/about-us',
        CONTACT_US: process.env.PUBLIC_URL+'/cms/contact-us'
    },
    OFFER: {
        MY_OFFERS: process.env.PUBLIC_URL+'/my-offers',
        DEAILS_OFFER: process.env.PUBLIC_URL+'/details',
        ADD_UPDATE_OFFER: process.env.PUBLIC_URL+'/add-update',
    },
    FAVORITE: {
        USER: process.env.PUBLIC_URL+'/favorite/favorite-users',
    }
}