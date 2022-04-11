import React from 'react';
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {
    deleteEntity,
    getEntitiesForCurrentUser,
    reset as resetOffer,
    resetPrivateEntitiesOffers
} from "../../../shared/reducers/offer.reducer";
import {IRootState} from "../../../shared/reducers";
import {connect} from "react-redux";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link, useLocation} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
import {useHistory} from "react-router";
import {AllAppConfig} from "../../../core/config/all-config";
import {getFullUrlWithParams} from "../../../shared/utils/utils-functions";
import {TypeDisplaySearchOffers} from "../../../shared/enums/type-offer.enum";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import Button from "@mui/material/Button/Button";
import LoadingSearchOffers from "../../search/ui-segments/LoadingSearchOffers";
import {reset as resetFindOffer} from "../../../shared/reducers/find-offer.reducer";
import {reset as resetRentOffer} from "../../../shared/reducers/rent-offer.reducer";
import {reset as resetSellerOffer} from "../../../shared/reducers/seller-offer.reducer";
import {TransitionModal} from "../../../shared/pages/transition-modal";
import Alert from "@mui/material/Alert/Alert";
import {SearchAppBar} from "../../../shared/layout/menus/SearchAppBar";
import isEmpty from "lodash/isEmpty";
import ItemsOffer from '../../../shared/components/item-offer/ItemsOffer';
import {useTranslation} from "react-i18next";
import InfiniteScroll from 'react-infinite-scroller';
import queryString from "query-string";

export interface IMyOfferProps extends StateProps, DispatchProps {}

export const MyOffers = (props: IMyOfferProps) => {
    const [openDeleteOfferModal, setOpenDeleteOfferModal] = React.useState(false);
    const [deleteOfferId, setDeleteOfferId] = React.useState(-1);
    const [activePage, setActivePage] = React.useState(-1);
    const [typeDisplayOffers, setTypeDisplayOffers] = React.useState<TypeDisplaySearchOffers>(TypeDisplaySearchOffers.Grid);

    const history = useHistory();
    const { t } = useTranslation();

    const { search } = useLocation();

    const {
        getEntitiesForCurrentUser,
        listMyOffers,
        loadingListMyOffers,
        totalItemsMyOffers,
        deleteEntity,
        deleteSuccessOffer
    } = props;


    const resetAll = () => {
        props.resetPrivateEntitiesOffers();
        setActivePage(0);
    };

    React.useEffect(() => {
        setActivePage(-1);
        resetAll();
    }, []);

    React.useEffect(() => {
        // console.log('activePage ', activePage);
        if(activePage>=0){
            const values = queryString.parse(search);
            let queryParams = getFullUrlWithParams(values);
            getEntitiesForCurrentUser(activePage, AllAppConfig.OFFERS_PER_PAGE, queryParams);
        }
    }, [activePage]);

    // React.useEffect(() => {
    //     const values = queryString.parse(search);
    //
    //     // Protect search page
    //     if(isEmpty(values)){
    //         history.push(ALL_APP_ROUTES.OFFER.MY_OFFERS+'?page=0&size='+AllAppConfig.OFFERS_PER_PAGE);
    //         return;
    //     }
    //     else{
    //         setActivePage(Number(values.page) || 0);
    //     }
    //
    // }, [search]);
    //
    // React.useEffect(() => {
    //     if(activePage>=0){
    //         const values = queryString.parse(search);
    //         searchWithParams(values);
    //     }
    // }, [activePage]);

    // const searchWithParams = (values: any) => {
    //     let queryParams = getFullUrlWithParams(values);
    //     let urlSearch = '?page='+activePage+'&size='+AllAppConfig.OFFERS_PER_PAGE+queryParams;
    //     history.push(ALL_APP_ROUTES.OFFER.MY_OFFERS+urlSearch);
    //     getEntitiesForCurrentUser(activePage, AllAppConfig.OFFERS_PER_PAGE, urlSearch);
    // }

    // React.useEffect(() => {
    //     // Persiste after update: Get entity
    //     props.resetOffer();
    //
    //     getEntitiesForCurrentUser(1, 20, '');
    // }, [])

    React.useEffect(() => {
        if(deleteSuccessOffer){
            setActivePage(-1);
            resetAll();
        }
    }, [deleteSuccessOffer])

    // const rediretTo = (offerId?: number) => {
    //     setTimeout(() => {
    //         history.push(ALL_APP_ROUTES.OFFER.DEAILS_OFFER + '/' + offerId);
    //     }, 300);
    // };
    //
    // const handleClickOpenUpdateOffert = (event: any, offerId?: number) => {
    //     event.stopPropagation();
    //     history.push(`${ALL_APP_ROUTES.OFFER.ADD_UPDATE_OFFER}/${offerId}/edit`);
    // };
    //
    //
    // const handleClickOpenDeleteOffertModal = (event: any, offerId?: number) => {
    //     event.stopPropagation();
    //     setDeleteOfferId(offerId || -1);
    //     setOpenDeleteOfferModal(true);
    // };

    const handleClickCancelDeleteOfferModal = () => {
        setOpenDeleteOfferModal(false);
    };

    const handleClickDeleteDeleteOfferModal = () => {
        setOpenDeleteOfferModal(false);
        deleteEntity(deleteOfferId);
    };

    const renderDialogDeleteOffer = () => {
        return (
            <Dialog
                open={openDeleteOfferModal}
                TransitionComponent={TransitionModal}
                keepMounted
                onClose={handleClickCancelDeleteOfferModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    Confirm delete operation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete this CommentOffer?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickCancelDeleteOfferModal}>
                        Cancel
                    </Button>
                    <Button onClick={handleClickDeleteDeleteOfferModal} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    const searchCalback = (values: any) => {
        if(!values.title && !values.typeOffer && !values.category){
            console.log('isEmpty(values) ', isEmpty(values) );
            history.push({
                pathname: 'search',
            });
        }
        else{
            const searchEntity: any = {};
            if(values.title){
                searchEntity.title = values.title;
            }
            if(values.typeOffer){
                searchEntity.typeOffer = values.typeOffer;
            }
            if(values.category){
                searchEntity.category = values.category;
            }

            history.push({
                pathname: 'search',
                search: "?" + new URLSearchParams(searchEntity).toString()
            })
        }

        setActivePage(-1);
        resetAll();
    }

    const loadMore = () => {
        setActivePage(activePage+1);
    }

    const typeDisplay = (value: TypeDisplaySearchOffers) => {
        setTypeDisplayOffers(value);
    }

    return(
        <Box>
            <Container maxWidth="xl" className="details-offer-client">
                <Grid container sx={{ pt: 1 }}>
                    <Grid item xs={12} sm={6} md={1}></Grid>

                    <Grid item xs={12} sm={6} md={2}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                                SRF
                            </Link>
                            <Typography color="text.primary">{t('my_offers.title_page')}</Typography>
                        </Breadcrumbs>
                    </Grid>

                    <Grid
                        container
                        style={{
                            paddingTop: 50,
                        }}
                    >
                        <Grid item xs={12} sm={3}></Grid>
                        <Grid item xs={12} sm={6}>

                            <div
                                style={{
                                    maxWidth: '100%',
                                    marginBottom: 100,
                                }} >
                                <SearchAppBar entitiesCategories={props.entitiesCategories.slice()} searchCalback={searchCalback} typeDisplayCallback={typeDisplay}/>
                            </div>

                            <Typography  variant="subtitle2" color="text.secondary">
                                Total = {totalItemsMyOffers}
                            </Typography>

                            <InfiniteScroll
                                pageStart={activePage}
                                loadMore={loadMore}
                                hasMore={props.totalPagesMyOffers-1 > activePage}
                                loader={<div className="loader" key={0}><LoadingSearchOffers typeDisplay={typeDisplayOffers}/></div>}
                                threshold={0}
                                initialLoad={false}
                            >
                                <ItemsOffer listOffers={listMyOffers.slice()} typeDisplay={typeDisplayOffers}/>


                                {totalItemsMyOffers ===0 && !loadingListMyOffers ? <Alert severity="warning">No Offers found</Alert> : null}
                            </InfiniteScroll>


                            {/*<ItemsOffer listOffers={listMyOffers.slice()} typeDisplay={typeDisplayOffers}/>*/}

                            {/*{*/}
                                {/*loadingListMyOffers ? <LoadingSearchOffers typeDisplay={typeDisplayOffers}/> : null*/}
                            {/*}*/}

                            {/*{*/}
                                {/*props.totalPagesMyOffers-1 > activePage ? <Box sx={{ paddingTop: 5, textAlign: 'center' }}>*/}
                                    {/*<Button color="neutral" variant="contained" startIcon={<RefreshIcon />} onClick={loadMore}>Load More...</Button>*/}
                                {/*</Box> : null*/}
                            {/*}*/}

                            {/*{totalItemsMyOffers ===0 && !loadingListMyOffers ? <Alert severity="warning">{t('my_offers.no_offers_found')}</Alert> : null}*/}


                        </Grid>
                    </Grid>

                </Grid>
            </Container>
            {renderDialogDeleteOffer()}
        </Box>
    );
}

const mapStateToProps = ({ offer, category }: IRootState) => ({
    listMyOffers: offer.entitiesMyOffers,
    loadingListMyOffers: offer.loadingMyOffers,
    totalItemsMyOffers: offer.totalItemsMyOffers,
    totalPagesMyOffers: offer.totalPagesMyOffers,

    deleteSuccessOffer: offer.deleteSuccess,

    entitiesCategories: category.entities,
});

const mapDispatchToProps = {
    getEntitiesForCurrentUser,
    deleteEntity,
    resetSellerOffer,
    resetRentOffer,
    resetFindOffer,
    resetOffer,
    resetPrivateEntitiesOffers
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MyOffers);