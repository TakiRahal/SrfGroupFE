import React from 'react';
import {connect} from "react-redux";
import {IRootState} from "../../shared/reducers";
import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link, useHistory, useLocation} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import {TypeDisplaySearchOffers} from "../../shared/enums/type-offer.enum";
import {getFullUrlWithParams} from "../../shared/utils/utils-functions";
import {AllAppConfig} from "../../core/config/all-config";
import {getEntities as getEntitiesOffers, resetPublicEntitiesOffers} from '../../shared/reducers/offer.reducer';
import queryString from 'query-string';
import Alert from "@mui/material/Alert/Alert";
import {SearchAppBar} from "../../shared/layout/menus/SearchAppBar";
import ItemsOffer from "../../shared/components/item-offer/ItemsOffer";
import RightSearch from "./ui-segments/RightSearch";
import LeftSearch from './ui-segments/LeftSearch';
import {useTranslation} from "react-i18next";
import './Search.scss';
import LoadingSearchOffers from "./ui-segments/LoadingSearchOffers";
import InfiniteScroll from 'react-infinite-scroller';
import {isOnLine} from "../../shared/reducers/web-socket.reducer";

export interface ISearchProps extends StateProps, DispatchProps {}

export const Search = (props: ISearchProps) => {

    const [typeDisplayOffers, setTypeDisplayOffers] = React.useState<TypeDisplaySearchOffers>(TypeDisplaySearchOffers.Grid);
    const [activePage, setActivePage] = React.useState(-1);

    const history = useHistory();
    const { search } = useLocation();

    const { t } = useTranslation();

    const { listOffers, loadingListOffers, getEntitiesOffers, totalItems, entitiesCategories } = props;

    const resetAll = () => {
        props.resetPublicEntitiesOffers();
        setActivePage(0);
    };

    React.useEffect(() => {
        setActivePage(-1);
        resetAll();
    }, []);

    React.useEffect(() => {
        if(activePage>=0){
            const values = queryString.parse(search);
            let queryParams = getFullUrlWithParams(values);
            getEntitiesOffers(activePage, AllAppConfig.OFFERS_PER_PAGE, queryParams);
        }
    }, [activePage]);

    const loadMore = () => {
        setActivePage(activePage+1);
    }

    const searchCalback = (values: any) => {
        history.push({
            pathname: ALL_APP_ROUTES.SEARCH,
            search: "?" + new URLSearchParams(getFullUrlWithParams(values)).toString()
        })
        setActivePage(-1);
        resetAll();
    }

    const typeDisplay = (value: TypeDisplaySearchOffers) => {
        setTypeDisplayOffers(value);
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
                        <Typography color="text.primary">{t('common.label_search')}</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={6}
                sx={{mt: 0}}>
                <Grid item xs={12} sm={6} md={1}></Grid>

                <Grid item xs={12} sm={6} md={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <LeftSearch listAddress={props.entitiesAddress.slice()}/>
                </Grid>

                <Grid item xs={12} sm={6} md={6} sx={{pt: {xs: '0 !important', md: '48px !important'}}}>
                    <div
                        style={{
                            maxWidth: '100%',
                            marginBottom: 100,
                        }}
                    >
                        <SearchAppBar entitiesCategories={entitiesCategories.slice()} searchCalback={searchCalback} typeDisplayCallback={typeDisplay} listAddress={props.entitiesAddress.slice()}/>
                    </div>

                    <InfiniteScroll
                        pageStart={activePage}
                        loadMore={loadMore}
                        hasMore={props.totalPages-1 > activePage}
                        loader={<div className="loader" key={0}></div>}
                        threshold={0}
                        initialLoad={false}
                    >
                        <ItemsOffer listOffers={listOffers.slice()} typeDisplay={typeDisplayOffers}/>

                        { loadingListOffers ? <LoadingSearchOffers typeDisplay={typeDisplayOffers}/> : null }

                        {totalItems ===0 && !loadingListOffers ? <Alert severity="warning">No Offers found</Alert> : null}
                    </InfiniteScroll>



                </Grid>

                <Grid item xs={12} sm={6} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <RightSearch />
                </Grid>
            </Grid>

        </Box>
    );
}
const mapStateToProps = ({ user, offer, category, address }: IRootState) => ({
    listOffers: offer.entities,
    loadingListOffers: offer.loadingEntities,
    totalItems: offer.totalItems,
    totalPages: offer.totalPages,

    entitiesCategories: category.entities,
    entitiesAddress: address.entities
});

const mapDispatchToProps = {
    getEntitiesOffers,
    resetPublicEntitiesOffers,
    isOnLine
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Search);