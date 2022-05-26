import React from 'react';
import {getEntities, deleteEntity} from "../../shared/reducers/cart.reducer";
import {connect} from "react-redux";
import {IRootState} from "../../shared/reducers";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link, useHistory} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import Typography from "@mui/material/Typography/Typography";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Alert from "@mui/material/Alert/Alert";
import Container from "@mui/material/Container/Container";
import {GetCardList} from "../faq/Faq";
import {useTranslation} from "react-i18next";
import Card from "@mui/material/Card/Card";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import {LazyImage} from "../../shared/components/lazy-image";
import {getBaseImageUrl, getFullnameUser, getImageForOffer, getUserAvatar} from "../../shared/utils/utils-functions";
import {AllAppConfig} from "../../core/config/all-config";
import CardContent from "@mui/material/CardContent/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import AddLocationAltIcon from "@mui/icons-material/AddLocation";
import CheckIcon from "@mui/icons-material/Check";
import {TypeOfferEnum} from "../../shared/enums/type-offer.enum";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {ICart} from "../../shared/model/cart.model";
import {InputQuantity} from "../../shared/components/input-quantity/InputQuantity";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog/Dialog";
import {TransitionModal} from "../../shared/pages/transition-modal";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";

function ItemCart({cart, t, parentCallbackDeleteCart}: {cart: ICart, t: any, parentCallbackDeleteCart: Function}) {

    const [openDeleteCartModal, setOpenDeleteCartModal] = React.useState(false);
    const [cartDeleteId, setCartDeleteId] = React.useState<number | undefined>(-1);
    const history = useHistory();

    const rediretTo = () => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.DETAILS_OFFER + '/' + cart?.sellOffer?.id);
        }, 300);
    };

    const changeQuantity = (data: any) => {
        console.log('data ', data);
        // setValueQuantity(data);
    }

    const handleClickCancelDeleteCartModal = () => {
        setOpenDeleteCartModal(false);
    }

    const handleClickDeleteDeleteCartModal = () => {
        setOpenDeleteCartModal(false);
        parentCallbackDeleteCart(cartDeleteId);
    }

    const handleClickOpenDeleteCartModal = (event: any) => {
        event.stopPropagation();
        setCartDeleteId(cart?.id);
        setOpenDeleteCartModal(true);
    };

    const renderDialogDeleteCart = () => {
        return (
            <Dialog
                open={openDeleteCartModal}
                TransitionComponent={TransitionModal}
                keepMounted
                onClose={handleClickCancelDeleteCartModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    {t('cart.title_dialog_delete_cart')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {t('cart.description_dialog_delete_cart')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickCancelDeleteCartModal} color="neutral">
                        {t('common.label_cancel')}
                    </Button>
                    <Button onClick={handleClickDeleteDeleteCartModal} color="error">
                        {t('common.label_delete')}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return(
        <Box>
            <Card sx={{ display: { xs: 'block', sm: 'flex' } }} onClick={() => rediretTo()}>
                <CardMedia
                    sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 } }} >
                    {cart?.sellOffer?.offerImages && cart?.sellOffer?.offerImages.length ? (
                        <LazyImage
                            src={getImageForOffer(cart?.sellOffer?.id, cart?.sellOffer?.offerImages[0].path)}
                            alt="Buildings with tiled exteriors, lit by the sunset."
                            actual={({ imageProps }) => <img {...imageProps} className="img-lazy-loading"/>}
                            placeholder={({ ref }) => <div ref={ref} />}
                            loading={() => (
                                <div>
                                    <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE_LOADING)} className="img-lazy-loading"/>
                                </div>
                            )}
                            error={() => (
                                <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)} className="img-lazy-loading"/>
                            )}
                        />
                    ) : (
                        <Box sx={{display: {xs: 'none', md: 'block'}, height: '100%'}}>
                            <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)} className="img-lazy-loading"/>
                        </Box>
                    )}
                </CardMedia>
                <CardContent sx={{ flex: 1 }}>

                    <Grid container spacing={2}>
                        <Grid item xs={8}>

                            <Typography component="h5" variant="h5" sx={{ fontSize: '1.2rem' }}>
                                {cart?.sellOffer?.title}
                            </Typography>

                            {
                                cart?.sellOffer?.address ? <Typography  variant="subtitle2" color="text.secondary" display="flex" sx={{mt: 1}}>
                                    <AddLocationAltIcon fontSize="small" sx={{mr: 0.9}}/>
                                    {cart?.sellOffer?.address?.city+', '+cart?.sellOffer?.address?.country}
                                </Typography> : null
                            }

                            <Typography variant="subtitle2" color="text.secondary" display="flex">
                                <CheckIcon fontSize="small" sx={{mr: 0.9}}/>
                                {cart?.sellOffer?.typeOffer === TypeOfferEnum.Sell
                                    ? t('common.for_sell')
                                    : cart?.sellOffer?.typeOffer === TypeOfferEnum.Rent
                                        ? t('common.for_rent')
                                        : cart?.sellOffer?.typeOffer === TypeOfferEnum.Find
                                            ? t('common.for_find')
                                            : null}
                            </Typography>
                        </Grid>

                        {cart?.sellOffer?.amount ? (
                            <Grid item xs={4}>
                                <Typography variant="subtitle1" color="text.secondary" display="flex" sx={{justifyContent: 'end'}} className="red-color">
                                    <AttachMoneyIcon />
                                    {cart?.total} TND
                                </Typography>
                            </Grid>
                        ) : null}

                    </Grid>

                    <Box sx={{my: 2}}>
                        <Box sx={{float: 'left'}}>
                            <InputQuantity parentCallChangeQuantity={changeQuantity} />
                        </Box>
                        <Button color="error" variant="outlined"
                                startIcon={<DeleteIcon />}
                                sx={{ml: 'auto', float: 'right'}} size="small"
                                onClick={(event) => handleClickOpenDeleteCartModal(event)}>
                            Delete
                        </Button>
                    </Box>
                </CardContent>
            </Card>
            {renderDialogDeleteCart()}
        </Box>
    );
}


export interface ICartProps extends StateProps, DispatchProps {}

export const Cart = (props: ICartProps) => {


    const { t } = useTranslation();

    React.useEffect(() => {
        props.getEntities(0, 20, '');
    }, [])

    const deleteCart = (cartId: number) => {
        console.log('cartId ', cartId);
        props.deleteEntity(cartId);
    }

    React.useEffect(() => {
        if(props.deleteSuccess){
            props.getEntities(0, 20, '');
        }
    }, [props.deleteSuccess])

    return (
        <Container maxWidth="xl">
            <Grid
                container
                style={{
                    paddingTop: 10,
                }}
            >
                <Grid item xs={12} md={6}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                            SRF
                        </Link>
                        <Typography color="text.primary">{t('header.label_cart')}</Typography>
                    </Breadcrumbs>
                </Grid>

            </Grid>

            <Grid container spacing={4} sx={{ mt: 3 }}>
                <Grid item xs={12} md={2}></Grid>
                <Grid item xs={12} md={6}>

                    {
                        props.entities.map((item: ICart, index: number) => (
                            <Box key={`index-${index}`} sx={{my: 2}}>
                                <ItemCart cart={item} t={t} parentCallbackDeleteCart={deleteCart}/>
                            </Box>
                        ))
                    }

                    {
                        props.entities.length===0 && !props.loadingEntities ?
                            <Alert severity="error">{t('cart.list_not_found')}</Alert> : null
                    }

                </Grid>
                <Grid item xs={12} md={4}>
                    Details carts
                </Grid>
            </Grid>
        </Container>
    );
}

const mapStateToProps = ({ conversation, user, message, cart }: IRootState) => ({
    loadingEntities: cart.loadingEntities,
    entities: cart.entities,
    totalItems: cart.totalItems,
    loadingDeleteEntity: cart.loadingDeleteEntity,
    deleteSuccess: cart.deleteSuccess
})

const mapDispatchToProps = {
    getEntities,
    deleteEntity
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Cart);