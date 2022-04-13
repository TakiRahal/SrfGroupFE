import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../../main-features/home/home";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import ActivationAccount from "../../main-features/activation-account/ActivationAccount";
import SignUp from "../../main-features/register/SignUp";
import SignIn from "../../main-features/login/SignIn";
import Search from "../../main-features/search/Search";
import {IAppProps} from "../../App";
import AddUpdateOffer from "../../main-features/offer/add-update/AddUpdateOffer";
import DetailsOffer from "../../main-features/offer/details/DetailsOffer";
import Profile from "../../main-features/profile/Profile";
import Account from "../../main-features/account/Account";
import Faq from "../../main-features/faq/Faq";
import AboutUs from "../../main-features/about-us/AboutUs";
import ContactUs from "../../main-features/contact-us/ContactUs";
import MyOffers from "../../main-features/offer/my-offers/MyOffers";
import FavoriteUser from "../../main-features/favorite/user/FavoriteUser";
import Chat from "../../main-features/chat/Chat";
import Notification from "../../main-features/notification/Notification";
import ForgotPassword from "../../main-features/login/ForgotPassword";
import ForgotPasswordFinish from "../../main-features/login/ForgotPasswordFinish";

export default function AllRoutes(props: IAppProps){
    return (
        <Switch>
            <Route exact path={ALL_APP_ROUTES.HOME}>
                <Home />
            </Route>
            <Route path={ALL_APP_ROUTES.REGISTER}>
                <SignUp />
            </Route>
            <Route path={ALL_APP_ROUTES.LOGIN}>
                <SignIn />
            </Route>
            <Route path={`${ALL_APP_ROUTES.ACTIVATION_ACCOUNT}/:key?`}>
                <ActivationAccount />
            </Route>
            <Route path={ALL_APP_ROUTES.SEARCH}>
                <Search />
            </Route>
            <Route exact path={ALL_APP_ROUTES.ADD_UPDATE_OFFER}>
                <AddUpdateOffer/>
            </Route>
            <Route path={ALL_APP_ROUTES.ADD_UPDATE_OFFER + '/:id/edit'}>
                <AddUpdateOffer/>
            </Route>
            <Route path={ALL_APP_ROUTES.DETAILS_OFFER + '/:id'}>
                <DetailsOffer/>
            </Route>
            <Route path={ALL_APP_ROUTES.PROFILE + '/:id'}>
                <Profile/>
            </Route>
            <Route path={ALL_APP_ROUTES.ACCOUNT}>
                <Account/>
            </Route>
            <Route path={ALL_APP_ROUTES.SUPPORT.CONTACT_US}>
                <ContactUs />
            </Route>
            <Route path={ALL_APP_ROUTES.SUPPORT.ABOUT_US}>
                <AboutUs />
            </Route>
            <Route path={ALL_APP_ROUTES.SUPPORT.FAQ}>
                <Faq />
            </Route>
            <Route path={ALL_APP_ROUTES.OFFER.MY_OFFERS}>
                <MyOffers />
            </Route>
            <Route path={ALL_APP_ROUTES.FAVORITE.USER}>
                <FavoriteUser />
            </Route>
            <Route path={ALL_APP_ROUTES.CHAT.LIST}>
                <Chat />
            </Route>
            <Route path={ALL_APP_ROUTES.NOTIFICATION.LIST}>
                <Notification />
            </Route>
            <Route path={ALL_APP_ROUTES.FORGOT_PASSWORD_INIT}>
                <ForgotPassword />
            </Route>
            <Route path={`${ALL_APP_ROUTES.FORGOT_PASSWORD_FINISH}/:key?`}>
                <ForgotPasswordFinish />
            </Route>

            <Route path="*">
                <Home />
            </Route>
        </Switch>
    );
}