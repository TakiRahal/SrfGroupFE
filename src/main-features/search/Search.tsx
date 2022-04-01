import React from 'react';
import {connect} from "react-redux";
import {IRootState} from "../../shared/reducers";
import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link, useHistory, useLocation} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import Button from "@mui/material/Button/Button";
import {TypeDisplaySearchOffers} from "../../shared/enums/type-offer.enum";
import {getFullUrlWithParams,} from "../../shared/utils/utils-functions";
import {AllAppConfig} from "../../core/config/all-config";
import { getEntities as getEntitiesOffers } from '../../shared/reducers/offer.reducer';
import RefreshIcon from '@mui/icons-material/Refresh';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';
import Alert from "@mui/material/Alert/Alert";
import {SearchAppBar} from "../../shared/layout/menus/SearchAppBar";
import ItemsOffer from "../../shared/components/item-offer/ItemsOffer";
import RightSearch from "./ui-segments/RightSearch";
import LeftSearch from './ui-segments/LeftSearch';
import {useTranslation} from "react-i18next";
import './Search.scss';
import LoadingSearchOffers from "./ui-segments/LoadingSearchOffers";

export interface ISearchProps extends StateProps, DispatchProps {}

export const Search = (props: ISearchProps) => {

    const [typeDisplayOffers, setTypeDisplayOffers] = React.useState<TypeDisplaySearchOffers>(TypeDisplaySearchOffers.Grid);
    const [activePage, setActivePage] = React.useState(-1);
    const history = useHistory();
    const { search } = useLocation();

    const { t } = useTranslation();

    const { listOffers, loadingListOffers, getEntitiesOffers, totalItems, entitiesCategories } = props;

    React.useEffect(() => {
        const values = queryString.parse(search);

        // Protect search page
        if(isEmpty(values)){
            history.push(ALL_APP_ROUTES.OFFER.LIST+'?page=0&size='+AllAppConfig.OFFERS_PER_PAGE);
            return;
        }
        else{
            if(listOffers.length===0){
                setActivePage(Number(values.page) || 0);
            }
        }

    }, [search]);

    React.useEffect(() => {
        if(activePage>=0){
            const values = queryString.parse(search);
            searchWithParams(values);
        }
    }, [activePage]);

    const rediretTo = (offerId?: number) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.DETAILS_OFFER + '/' + offerId);
        }, 300);
    };

    const searchWithParams = (values: any) => {
        let queryParams = getFullUrlWithParams(values);
        let urlSearch = '?page='+activePage+'&size='+AllAppConfig.OFFERS_PER_PAGE+queryParams;
        history.push(ALL_APP_ROUTES.OFFER.LIST+urlSearch);

        getEntitiesOffers(activePage, AllAppConfig.OFFERS_PER_PAGE, urlSearch);
    }

    const loadMore = () => {
        setActivePage(activePage+1);
    }

    const searchCalback = (values: any) => {
        searchWithParams(values);
    }

    const typeDisplay = (value: TypeDisplaySearchOffers) => {
        setTypeDisplayOffers(value);
    }

    return (
        <Box  sx={{ px: { xs: 2, md: 0 } }}>
            <Grid container sx={{ pt: 1, pl: { xs: 1, md: 0 } }}>
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
                style={{
                    paddingTop: 50,
                }}
            >
                <Grid item xs={12} sm={6} md={1}></Grid>

                <Grid item xs={12} sm={6} md={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <LeftSearch />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <div
                        style={{
                            maxWidth: '100%',
                            marginBottom: 100,
                        }}
                    >
                        <SearchAppBar entitiesCategories={entitiesCategories.slice()} searchCalback={searchCalback} typeDisplayCallback={typeDisplay}/>
                    </div>


                    <ItemsOffer listOffers={listOffers.slice()} typeDisplay={typeDisplayOffers}/>

                    {
                        loadingListOffers ? <LoadingSearchOffers typeDisplay={typeDisplayOffers}/> : null
                    }


                    {
                        props.totalPages-1 > activePage ? <Box sx={{ paddingTop: 5, textAlign: 'center' }}>
                            <Button color="neutral" variant="contained" startIcon={<RefreshIcon />} onClick={loadMore}>Load More...</Button>
                        </Box> : null
                    }

                    {totalItems ===0 && !loadingListOffers ? <Alert severity="warning">No Offers found</Alert> : null}

                </Grid>

                <Grid item xs={12} sm={6} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <RightSearch />
                </Grid>
            </Grid>

        </Box>
    );
}
const mapStateToProps = ({ user, offer, category }: IRootState) => ({
    listOffers: offer.entities,
    loadingListOffers: offer.loadingEntities,
    totalItems: offer.totalItems,
    totalPages: offer.totalPages,

    entitiesCategories: category.entities,
});

const mapDispatchToProps = {
    getEntitiesOffers,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Search);