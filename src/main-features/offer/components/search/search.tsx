import Box from "@mui/material/Box";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {allPublicOffersSelector, fetchPubliOffer, resetPubliOffer} from "../../store/slice";
import {TypeDisplaySearchOffers} from "../../../../shared/enums/type-offer.enum";
import {AllAppConfig} from "../../../../core/config/all-config";
import {getFullUrlWithParams} from "../../../../shared/utils/utils-functions";
import queryString from 'query-string';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../../../core/config/all-app-routes";
import {useTranslation} from "react-i18next";
import {Grid} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import {SearchAppBar} from "../../../../shared/layout/menus/SearchAppBar";
import {allCategorySelector} from "../../../category/store/slice";
import {allAddressSelector} from "../../../address/store/slice";
import LoadingSearchOffers from "./ui-segments/LoadingSearchOffers";
import InfiniteScroll from 'react-infinite-scroller';
import ItemsOffer from "../../../../shared/components/item-offer/ItemsOffer";
import Alert from "@mui/material/Alert";
import LeftSearch from "./ui-segments/LeftSearch";
import RightSearch from "./ui-segments/RightSearch";

const isOnLine = (list:any[], email: string): boolean => {
    return list.findIndex(item => item.principal.email==email) >=0;
}

export default function Search () {

    const [typeDisplayOffers, setTypeDisplayOffers] = React.useState<TypeDisplaySearchOffers>(TypeDisplaySearchOffers.Grid);
    const [activePage, setActivePage] = React.useState(-1);
    const [isSearchCalback, setIsSearchCalback] = React.useState<boolean>(false);
    const { search } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const {publicEntities, loadingPublicEntities, totalItems, totalPages} = useSelector(allPublicOffersSelector);
    const entitiesCategories = useSelector(allCategorySelector).entities ?? [];
    const entitiesAddress = useSelector(allAddressSelector).entities ?? [];

    const resetAll = () => {
        dispatch(resetPubliOffer({}));
        setActivePage(0);
    };

    React.useEffect(() => {
        setActivePage(-1);
        resetAll();
    }, []);

    React.useEffect(() => {
        if(activePage>=0 || isSearchCalback){
            const values = queryString.parse(search);
            let queryParams = getFullUrlWithParams(values);
            dispatch(fetchPubliOffer({
                page: activePage,
                size: AllAppConfig.OFFERS_PER_PAGE,
                queryParams: queryParams
            }));
            setIsSearchCalback(false);
        }
    }, [activePage, isSearchCalback]);


    const loadMore = () => {
        setActivePage(activePage+1);
    }

    const searchCalback = (values: any) => {
        navigate({
            pathname: ALL_APP_ROUTES.SEARCH,
            search: "?" + new URLSearchParams(getFullUrlWithParams(values)).toString()
        }, { replace: false })
        setIsSearchCalback(true);
        resetAll();
    }

    const typeDisplay = (value: TypeDisplaySearchOffers) => {
        setTypeDisplayOffers(value);
    }

    const isUserOnline = (email: string) => {
        // return isOnLine(props.listConnectedUsers, email);
        return isOnLine([], email);
    }

    return (
        <Box  sx={{ px: { xs: 2, md: 0 } }}>
            <Grid container sx={{ pt: 2 }}>
                <Grid item xs={12} sm={6} md={1}></Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                            SRF
                        </Link>
                        <Typography color="text.primary">{t<string>('common.label_search')}</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={6}
                sx={{mt: 0}}>
                <Grid item xs={12} sm={6} md={1}></Grid>

                <Grid item xs={12} sm={6} md={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <LeftSearch listAddress={entitiesAddress.slice()} filterCallback={searchCalback}/>
                </Grid>

                <Grid item xs={12} sm={6} md={6} sx={{pt: {xs: '0 !important', md: '48px !important'}}}>
                    <div
                        style={{
                            maxWidth: '100%',
                            marginBottom: 100,
                        }}
                    >
                        <SearchAppBar entitiesCategories={entitiesCategories.slice()} searchCalback={searchCalback} typeDisplayCallback={typeDisplay} listAddress={entitiesAddress.slice()}/>
                    </div>

                    <InfiniteScroll
                        pageStart={activePage}
                        loadMore={loadMore}
                        hasMore={totalPages-1 > activePage}
                        loader={<div className="loader" key={0}></div>}
                        threshold={0}
                        initialLoad={false}
                    >
                        <ItemsOffer listOffers={publicEntities.slice()} typeDisplay={typeDisplayOffers} isOnLine={(email: string) => isUserOnline(email)}/>

                        {
                            loadingPublicEntities ? <LoadingSearchOffers typeDisplay={typeDisplayOffers}/> : totalItems ===0 ?  <Alert severity="warning">No Offers found</Alert> : null
                        }

                    </InfiniteScroll>



                </Grid>

                <Grid item xs={12} sm={6} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <RightSearch />
                </Grid>
            </Grid>

        </Box>
    );
}
