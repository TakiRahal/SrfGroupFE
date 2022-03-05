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

            <Route path={ALL_APP_ROUTES.SUPPORT.FAQ}>
                <Faq />
            </Route>

        </Switch>
    );
}