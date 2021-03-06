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
import {Link, useLocation, useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
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
import ItemsOffer from '../../../shared/components/item-offer/ItemsOffer';
import {useTranslation} from "react-i18next";
import InfiniteScroll from 'react-infinite-scroller';
import queryString from "query-string";
import {IOffer} from "../../../shared/model/offer.model";


export interface IMyOfferProps extends StateProps, DispatchProps {}

export const MyOffers = (props: IMyOfferProps) => {
    const [openDeleteOfferModal, setOpenDeleteOfferModal] = React.useState(false);
    const [deleteOfferId, setDeleteOfferId] = React.useState(-1);
    const [activePage, setActivePage] = React.useState(-1);
    const [isSearchCalback, setIsSearchCalback] = React.useState<boolean>(false);
    const [typeDisplayOffers, setTypeDisplayOffers] = React.useState<TypeDisplaySearchOffers>(TypeDisplaySearchOffers.Grid);

    const navigate = useNavigate();
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
        if(activePage>=0 || isSearchCalback){
            const values = queryString.parse(search);
            let queryParams = getFullUrlWithParams(values);
            getEntitiesForCurrentUser(activePage, AllAppConfig.OFFERS_PER_PAGE, queryParams);
            setIsSearchCalback(false);
        }
    }, [activePage, isSearchCalback]);

    React.useEffect(() => {
        if(deleteSuccessOffer){
            setActivePage(-1);
            resetAll();
        }
    }, [deleteSuccessOffer])

    const handleClickOpenUpdateOffert = (offer: IOffer) => {
        navigate(`${ALL_APP_ROUTES.OFFER.ADD_UPDATE_OFFER}/${offer.id}/edit`);
    };


    const handleClickOpenDeleteOffertModal = (offer: IOffer) => {
        setDeleteOfferId(offer.id || -1);
        setOpenDeleteOfferModal(true);
    };

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
                    {t('my_offers.title_dialog_delete_offer')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {t('my_offers.description_dialog_delete_offer')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickCancelDeleteOfferModal} color="neutral">
                        {t('common.label_cancel')}
                    </Button>
                    <Button onClick={handleClickDeleteDeleteOfferModal} color="error">
                        {t('common.label_delete')}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    const searchCalback = (values: any) => {
        navigate({
            pathname: ALL_APP_ROUTES.OFFER.MY_OFFERS,
            search: "?" + new URLSearchParams(getFullUrlWithParams(values)).toString()
        })
        // setActivePage(-1);
        setIsSearchCalback(true);
        resetAll();
    }

    const loadMore = () => {
        setActivePage(activePage+1);
    }

    const typeDisplay = (value: TypeDisplaySearchOffers) => {
        setTypeDisplayOffers(value);
    }

    const isUserOnline = (email: string): boolean => {
        return true;
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
                                <SearchAppBar entitiesCategories={props.entitiesCategories.slice()} searchCalback={searchCalback} typeDisplayCallback={typeDisplay} listAddress={props.entitiesAddress.slice()}/>
                            </div>

                            {
                                totalItemsMyOffers > 0 ? <Typography  variant="subtitle2" color="text.secondary">
                                    Total = {totalItemsMyOffers}
                                </Typography> : null
                            }


                            <InfiniteScroll
                                pageStart={activePage}
                                loadMore={loadMore}
                                hasMore={props.totalPagesMyOffers-1 > activePage}
                                loader={<div className="loader" key={0}></div>}
                                threshold={0}
                                initialLoad={false}
                            >
                                <ItemsOffer listOffers={listMyOffers.slice()}
                                            typeDisplay={typeDisplayOffers}
                                            isOnLine={(email: string) => isUserOnline(email)}
                                            forMe={true}
                                            callbackEditOffer={handleClickOpenUpdateOffert}
                                            callbackDeleteOffer={handleClickOpenDeleteOffertModal}/>

                                { loadingListMyOffers ? <LoadingSearchOffers typeDisplay={typeDisplayOffers}/> : null }

                            </InfiniteScroll>

                            {totalItemsMyOffers ===0 && !loadingListMyOffers ? <Alert severity="warning">No Offers found</Alert> : null}

                        </Grid>
                    </Grid>

                </Grid>
            </Container>
            {renderDialogDeleteOffer()}
        </Box>
    );
}

const mapStateToProps = ({ offer, category, address }: IRootState) => ({
    listMyOffers: offer.entitiesMyOffers,
    loadingListMyOffers: offer.loadingMyOffers,
    totalItemsMyOffers: offer.totalItemsMyOffers,
    totalPagesMyOffers: offer.totalPagesMyOffers,

    deleteSuccessOffer: offer.deleteSuccess,

    entitiesCategories: category.entities,
    entitiesAddress: address.entities
});

const mapDispatchToProps = {
    getEntitiesForCurrentUser,
    deleteEntity,
    resetSellerOffer,
    resetRentOffer,
    resetFindOffer,
    resetOffer,
    resetPrivateEntitiesOffers,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MyOffers);