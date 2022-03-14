import React from 'react';
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {deleteEntity, getEntitiesForCurrentUser} from "../../../shared/reducers/offer.reducer";
import {IRootState} from "../../../shared/reducers";
import {connect} from "react-redux";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
import {IOffer} from "../../../shared/model/offer.model";
import Card from "@mui/material/Card/Card";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import {LazyImage} from "../../../shared/pages/lazy-image";
import CardContent from "@mui/material/CardContent/CardContent";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import {useHistory} from "react-router";
import {AllAppConfig} from "../../../core/config/all-config";
import IconButton from "@mui/material/IconButton/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import Avatar from "@mui/material/Avatar/Avatar";
import {getFullnameUser, getImageForOffer, getUserAvatar} from "../../../shared/utils/utils-functions";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {TypeOfferEnum} from "../../../shared/enums/type-offer.enum";
import AddLocationAltIcon from '@mui/icons-material/AddLocation';
import CheckIcon from '@mui/icons-material/Check';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Dialog from "@mui/material/Dialog/Dialog";
import {TransitionProps} from "@mui/material/transitions";
import Slide from "@mui/material/Slide/Slide";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import Button from "@mui/material/Button/Button";
import LoadingSearchOffers from "../../search/ui-segments/LoadingSearchOffers";
import {ConvertReactTimeAgo} from "../../../shared/pages/react-time-ago";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export interface IMyOfferProps extends StateProps, DispatchProps {}

export const MyOffers = (props: IMyOfferProps) => {
    const [openDeleteOfferModal, setOpenDeleteOfferModal] = React.useState(false);
    const [deleteOfferId, setDeleteOfferId] = React.useState(-1);

    const history = useHistory();

    const {
        getEntitiesForCurrentUser,
        listMyOffers,
        loadingListMyOffers,
        totalItemsMyOffers,
        deleteEntity,
        deleteSuccessOffer
    } = props;

    React.useEffect(() => {
        getEntitiesForCurrentUser(1, 20, '');
    }, [])

    React.useEffect(() => {
        if(deleteSuccessOffer){
            getEntitiesForCurrentUser(1, 20, '');
        }
    }, [deleteSuccessOffer])

    React.useEffect(() => {
    }, [listMyOffers])

    const rediretTo = (offerId?: number) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.OFFER.DEAILS_OFFER + '/' + offerId);
        }, 300);
    };

    const handleClickOpenUpdateOffert = (event: any, offerId?: number) => {
        event.stopPropagation();
        history.push(`${ALL_APP_ROUTES.OFFER.ADD_UPDATE_OFFER}/${offerId}/edit`);
    };


    const handleClickOpenDeleteOffertModal = (event: any, offerId?: number) => {
        event.stopPropagation();
        setDeleteOfferId(offerId || -1);
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
                TransitionComponent={Transition}
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
                            <Typography color="text.primary">My offers</Typography>
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
                            {loadingListMyOffers ? (
                                <LoadingSearchOffers />
                            ) : listMyOffers && listMyOffers.length > 0 ? (
                                listMyOffers.map((offer: IOffer, index: number) => (
                                    <CardActionArea component="div" onClick={() => rediretTo(offer.id)} sx={{mt: 5}} key={`entity-${index}`}>
                                        <Card sx={{ display: 'flex' }}>
                                            <CardMedia sx={{ width: 250, height: 200, display: { xs: 'none', sm: 'block' }, backgroundColor: '#0000004f' }}>
                                                {offer.offerImages && offer.offerImages.length ? (
                                                    <LazyImage className="img-fluid" src={getImageForOffer(offer.id, offer.offerImages[0].path)} alt="New offer" />
                                                ) : (
                                                    <LazyImage className="img-fluid" src={AllAppConfig.DEFAULT_LAZY_IMAGE} alt="offer" />
                                                )}
                                            </CardMedia>
                                            <CardContent sx={{ flex: 1, pt: 0 }}>
                                                <List sx={{ width: '100%', pt: 0, pb: 0, bgcolor: 'background.paper' }}>
                                                    <ListItem
                                                        sx={{ pl: 0 }}
                                                        secondaryAction={
                                                            <React.Fragment>
                                                                <IconButton
                                                                    edge="end"
                                                                    aria-label="edit"
                                                                    color="success"
                                                                    onClick={event => handleClickOpenUpdateOffert(event, offer.id)}
                                                                    sx={{mr: 0.5}}
                                                                >
                                                                    <ModeEditIcon />
                                                                </IconButton>
                                                                <IconButton
                                                                    edge="end"
                                                                    aria-label="delete"
                                                                    color="error"
                                                                    onClick={event => handleClickOpenDeleteOffertModal(event, offer.id)}
                                                                >
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </React.Fragment>
                                                        }
                                                    >
                                                        <ListItemAvatar>
                                                            <Avatar
                                                                alt={offer.user?.imageUrl}
                                                                src={getUserAvatar(offer.user?.id, offer.user?.imageUrl, offer.user?.sourceRegister)}
                                                            ></Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText
                                                            primary={getFullnameUser(offer?.user)}
                                                            secondary={
                                                                <Typography  variant="subtitle2" color="text.secondary" display="flex">
                                                                    <AccessTimeFilledIcon fontSize="small" sx={{mr: 0.9}}/>
                                                                    <ConvertReactTimeAgo convertDate={offer.dateCreated} />
                                                                </Typography>
                                                            }
                                                        />
                                                    </ListItem>
                                                </List>

                                                <Grid container spacing={2}>
                                                    <Grid item xs={8}>
                                                        <Typography component="h5" variant="h5" sx={{ fontSize: '1.2rem' }}>
                                                            {offer.title}
                                                        </Typography>

                                                        {
                                                            offer.address ? <Typography  variant="subtitle2" color="text.secondary" display="flex" sx={{mt: 1}}>
                                                                <AddLocationAltIcon fontSize="small" sx={{mr: 0.9}}/>
                                                                {offer.address.city+', '+offer.address.country}
                                                            </Typography> : null
                                                        }

                                                        <Typography variant="subtitle2" color="text.secondary" display="flex">
                                                            <CheckIcon />
                                                            {offer.typeOffer === TypeOfferEnum.Sell
                                                                ? 'À vendre'
                                                                : offer.typeOffer === TypeOfferEnum.Rent
                                                                    ? 'À louer'
                                                                    : offer.typeOffer === TypeOfferEnum.Find
                                                                        ? 'À trouver'
                                                                        : null}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                                        <Typography variant="subtitle1" color="text.secondary" display="flex">
                                                            <AttachMoneyIcon />
                                                            {offer.amount} 10 TND
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </CardActionArea>
                                ))
                            ) : (
                                <div className="alert alert-warning">
                                    No Offers found
                                </div>
                            )}
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
            {renderDialogDeleteOffer()}
        </Box>
    );
}

const mapStateToProps = ({ offer }: IRootState) => ({
    listMyOffers: offer.entitiesMyOffers,
    loadingListMyOffers: offer.loadingMyOffers,
    totalItemsMyOffers: offer.totalItemsMyOffers,

    deleteSuccessOffer: offer.deleteSuccess
});

const mapDispatchToProps = {
    getEntitiesForCurrentUser,
    deleteEntity
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MyOffers);