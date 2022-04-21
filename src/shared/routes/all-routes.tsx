import React from 'react';
import {Route, Switch} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import {IAppProps} from "../../App";
import {PrivateRoute} from "./private-route";
import {PublicRoute} from "./public-route";

const LazyHome = React.lazy(
    () => import('../../main-features/home/home')
)
const LazySignUp = React.lazy(
    () => import('../../main-features/register/SignUp')
)
const LazySignIn = React.lazy(
    () => import('../../main-features/login/SignIn')
)
const LazyActivationAccount = React.lazy(
    () => import('../../main-features/activation-account/ActivationAccount')
)
const LazySearch = React.lazy(
    () => import('../../main-features/search/Search')
)
const LazyAddUpdateOffer = React.lazy(
    () => import('../../main-features/offer/add-update/AddUpdateOffer')
)
const LazyDetailsOffer = React.lazy(
    () => import('../../main-features/offer/details/DetailsOffer')
)
const LazyProfile = React.lazy(
    () => import('../../main-features/profile/Profile')
)
const LazyAccount = React.lazy(
    () => import('../../main-features/account/Account')
)
const LazyContactUs = React.lazy(
    () => import('../../main-features/contact-us/ContactUs')
)
const LazyAboutUs = React.lazy(
    () => import('../../main-features/about-us/AboutUs')
)
const LazyFaq = React.lazy(
    () => import('../../main-features/faq/Faq')
)
const LazyMyOffers = React.lazy(
    () => import('../../main-features/offer/my-offers/MyOffers')
)
const LazyFavoriteUser = React.lazy(
    () => import('../../main-features/favorite/user/FavoriteUser')
)
const LazyChat = React.lazy(
    () => import('../../main-features/chat/Chat')
)
const LazyNotification = React.lazy(
    () => import('../../main-features/notification/Notification')
)
const LazyForgotPassword = React.lazy(
    () => import('../../main-features/login/ForgotPassword')
)
const LazyForgotPasswordFinish = React.lazy(
    () => import('../../main-features/login/ForgotPasswordFinish')
)


export default function AllRoutes(props: IAppProps){
    return (
        <Switch>
            <Route exact path={ALL_APP_ROUTES.HOME}>
                <React.Suspense fallback={<>...</>}>
                    <LazyHome />
                </React.Suspense>
            </Route>

            <PublicRoute isAuthenticated={props.isAuthenticated}  path={ALL_APP_ROUTES.REGISTER}>
                <React.Suspense fallback={<>...</>}>
                    <LazySignUp />
                </React.Suspense>
            </PublicRoute>

            <PublicRoute isAuthenticated={props.isAuthenticated} path={ALL_APP_ROUTES.LOGIN} >
                <React.Suspense fallback={<>...</>}>
                    <LazySignIn />
                </React.Suspense>
            </PublicRoute>

            <PublicRoute isAuthenticated={props.isAuthenticated} path={`${ALL_APP_ROUTES.ACTIVATION_ACCOUNT}/:key?`}>
                <React.Suspense fallback={<>...</>}>
                    <LazyActivationAccount />
                </React.Suspense>
            </PublicRoute>

            <Route path={ALL_APP_ROUTES.SEARCH}>
                <React.Suspense fallback={<>...</>}>
                    <LazySearch />
                </React.Suspense>
            </Route>

            <Route exact path={ALL_APP_ROUTES.ADD_UPDATE_OFFER}>
                <React.Suspense fallback={<>...</>}>
                    <LazyAddUpdateOffer />
                </React.Suspense>
            </Route>

            <Route path={ALL_APP_ROUTES.ADD_UPDATE_OFFER + '/:id/edit'}>
                <React.Suspense fallback={<>...</>}>
                    <LazyAddUpdateOffer />
                </React.Suspense>
            </Route>

            <Route path={ALL_APP_ROUTES.DETAILS_OFFER + '/:id'}>
                <React.Suspense fallback={<>...</>}>
                    <LazyDetailsOffer />
                </React.Suspense>
            </Route>
            <Route path={ALL_APP_ROUTES.PROFILE + '/:id'}>
                <React.Suspense fallback={<>...</>}>
                    <LazyProfile />
                </React.Suspense>
            </Route>

            <PrivateRoute isAuthenticated={props.isAuthenticated} path={ALL_APP_ROUTES.ACCOUNT}>
                <Route path={ALL_APP_ROUTES.ACCOUNT}>
                    <React.Suspense fallback={<>...</>}>
                        <LazyAccount/>
                    </React.Suspense>
                </Route>
            </PrivateRoute>

            <Route path={ALL_APP_ROUTES.SUPPORT.CONTACT_US}>
                <React.Suspense fallback={<>...</>}>
                    <LazyContactUs />
                </React.Suspense>
            </Route>
            <Route path={ALL_APP_ROUTES.SUPPORT.ABOUT_US}>
                <React.Suspense fallback={<>...</>}>
                    <LazyAboutUs />
                </React.Suspense>
            </Route>
            <Route path={ALL_APP_ROUTES.SUPPORT.FAQ}>
                <React.Suspense fallback={<>...</>}>
                    <LazyFaq />
                </React.Suspense>
            </Route>
            <Route path={ALL_APP_ROUTES.OFFER.MY_OFFERS}>
                <React.Suspense fallback={<>...</>}>
                    <LazyMyOffers />
                </React.Suspense>
            </Route>
            <Route path={ALL_APP_ROUTES.FAVORITE.USER}>
                <React.Suspense fallback={<>...</>}>
                    <LazyFavoriteUser />
                </React.Suspense>
            </Route>
            <Route path={ALL_APP_ROUTES.CHAT.LIST}>
                <React.Suspense fallback={<>...</>}>
                    <LazyChat />
                </React.Suspense>
            </Route>
            <Route path={ALL_APP_ROUTES.NOTIFICATION.LIST}>
                <React.Suspense fallback={<>...</>}>
                    <LazyNotification />
                </React.Suspense>
            </Route>
            <Route path={ALL_APP_ROUTES.FORGOT_PASSWORD_INIT}>
                <React.Suspense fallback={<>...</>}>
                    <LazyForgotPassword />
                </React.Suspense>
            </Route>
            <Route path={`${ALL_APP_ROUTES.FORGOT_PASSWORD_FINISH}/:key?`}>
                <React.Suspense fallback={<>...</>}>
                    <LazyForgotPasswordFinish />
                </React.Suspense>
            </Route>

            <Route path="*">
                <React.Suspense fallback={<>...</>}>
                    <LazyHome />
                </React.Suspense>
            </Route>

            {/*<Route path="*">*/}
                {/*<Home />*/}
            {/*</Route>*/}
        </Switch>
    );
}