import React from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link, useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
import Alert from "@mui/material/Alert/Alert";
import Container from "@mui/material/Container/Container";
import {useTranslation} from "react-i18next";
import Card from "@mui/material/Card/Card";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import CardContent from "@mui/material/CardContent/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import AddLocationAltIcon from "@mui/icons-material/AddLocation";
import CheckIcon from "@mui/icons-material/Check";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import {List} from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import {InputQuantity} from "../../../shared/components/input-quantity/InputQuantity";
import {getBaseImageUrl, getImageForOffer} from "../../../shared/utils/utils-functions";
import {AllAppConfig} from "../../../core/config/all-config";
import {ICart} from "../../../shared/model/cart.model";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {TransitionModal} from "../../../shared/pages/transition-modal";
// import {LazyImage} from "react-lazy-images";
import {TypeOfferEnum} from "../../../shared/enums/type-offer.enum";
import {deleteCart, deleteSuccessCart,
    detailsCart, entitiesCart,
    entityCart, fetchCart, loadingEntitiesCart, totalItemsCart, totalPagesCart, updateByQuantityCart } from '../store/slice';
import {LazyLoadImage} from "react-lazy-load-image-component";



function DetailsCart({nbeCarts, detailsEntity}: {nbeCarts: number, detailsEntity: any}) {
    return(
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            subheader={<ListSubheader>Details Panier</ListSubheader>}
        >
            <ListItem>
                <ListItemText id="switch-list-label-wifi" primary={`${nbeCarts} articles`} />
                <Typography variant="subtitle2" color="text.secondary">198,000 TND</Typography>
            </ListItem>

            <ListItem>
                <ListItemText id="switch-list-label-wifi" primary="Livraison" />
                <Typography variant="subtitle2" color="text.secondary">{detailsEntity.taxDelivery} TND</Typography>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemText id="switch-list-label-wifi" primary="Total TTC" />
                <Typography variant="subtitle2" color="text.secondary">{detailsEntity.totalCarts} TND</Typography>
            </ListItem>

            <ListItem>
                <Button variant="contained" color="success" fullWidth>Commander</Button>
            </ListItem>

        </List>
    )
}

function LoadingCarts() {
    return(
        <Box>
            {
                [0, 1, 2].map((key) => (
                    <Card sx={{ display: { xs: 'block', sm: 'flex' }, my: 2 }} key={key}>
                        <CardMedia
                            sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 } }} >
                            <Box sx={{display: {xs: 'none', md: 'block'}, height: '100%'}}>
                                <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)} className="img-lazy-loading" alt="image not found"/>
                            </Box>
                        </CardMedia>
                        <CardContent sx={{ flex: 1 }}>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>

                                    <Skeleton animation="wave" height={24}/>

                                    <Skeleton animation="wave" height={24}/>

                                    <Skeleton variant="rectangular" width={'100%'} height={'100%'} sx={{my: 3}}/>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                ))
            }
        </Box>
    );
}

function ItemCart({cart, t, parentCallbackDeleteCart, parentCallbackUpdateQuantity}:
                      {cart: ICart, t: any, parentCallbackDeleteCart: Function, parentCallbackUpdateQuantity: Function}) {

    const [openDeleteCartModal, setOpenDeleteCartModal] = React.useState(false);
    const [cartDeleteId, setCartDeleteId] = React.useState<number | undefined>(-1);
    const navigate = useNavigate();

    const rediretTo = () => {
        setTimeout(() => {
            navigate(ALL_APP_ROUTES.DETAILS_OFFER + '/' + cart?.sellOffer?.id);
        }, 300);
    };

    const changeQuantity = (data: any) => {
        const cartUpdate: ICart = {
            ...cart,
            quantity: data
        }
        parentCallbackUpdateQuantity(cartUpdate);
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

                        <LazyLoadImage
                            alt="Image offer"
                            src={getImageForOffer(cart?.sellOffer?.id, cart?.sellOffer?.offerImages[0].path)}
                            placeholder={<img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE_LOADING)} className="img-lazy-loading"/>}
                            placeholderSrc={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE_LOADING)}
                            onError={(e: any) => {
                                e.target.onerror = null;
                                e.target.src = getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE);
                            }}
                            className="img-lazy-loading"
                        />

                        // <LazyImage
                        //     src={getImageForOffer(cart?.sellOffer?.id, cart?.sellOffer?.offerImages[0].path)}
                        //     alt="Buildings with tiled exteriors, lit by the sunset."
                        //     actual={({ imageProps }: { imageProps: any }) => <img {...imageProps} className="img-lazy-loading"/>}
                        //     placeholder={({ ref }: { ref: any }) => <div ref={ref} />}
                        //     loading={() => (
                        //         <div>
                        //             <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE_LOADING)} className="img-lazy-loading" alt="image not found"/>
                        //         </div>
                        //     )}
                        //     error={() => (
                        //         <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)} className="img-lazy-loading" alt="image not found"/>
                        //     )}
                        // />
                    ) : (
                        <Box sx={{display: {xs: 'none', md: 'block'}, height: '100%'}}>
                            <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)} className="img-lazy-loading" alt="image not found"/>
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

                    <Box sx={{my: 1}}>
                        <Box sx={{float: 'left'}}>
                            <InputQuantity parentCallChangeQuantity={changeQuantity} defaultValue={cart?.quantity} />
                        </Box>
                        <Button color="error" variant="outlined"
                                startIcon={<DeleteIcon />}
                                sx={{ml: 'auto', float: 'right'}} size="small"
                                onClick={(event) => handleClickOpenDeleteCartModal(event)}>
                            Delete
                        </Button>
                        <Box style={{clear: 'both'}}></Box>
                    </Box>
                </CardContent>
            </Card>
            {renderDialogDeleteCart()}
        </Box>
    );
}


export default function Cart () {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const entityCartSelector = useSelector(entityCart) ?? false;
    const loadingEntitiesCartSelector = useSelector(loadingEntitiesCart) ?? false;
    const entitiesCartSelector = useSelector(entitiesCart) ?? [];
    const totalItemsCartSelector = useSelector(totalItemsCart) ?? -1;
    const totalPagesCartSelector = useSelector(totalPagesCart) ?? 0;
    const deleteSuccessCartSelector = useSelector(deleteSuccessCart) ?? false;

    React.useEffect(() => {
        dispatch(fetchCart({
            page: 0,
            size: 20,
            queryParams: ''
        }));
        // props.getEntities(0, 20, '');
    }, [])

    const deleteDetailsCart = (cartId: number) => {
        dispatch(deleteCart({id: cartId}))
        // props.deleteEntity(cartId);
    }

    React.useEffect(() => {
        if(deleteSuccessCartSelector){
            dispatch(fetchCart({
                page: 0,
                size: 20,
                queryParams: ''
            }));
            // props.getEntities(0, 20, '');
        }
    }, [deleteSuccessCartSelector])

    const updateByQuantity = (value: ICart) => {
        dispatch(updateByQuantityCart({...value}))
        // props.updateEntityByQuantity(value);
    }

    React.useEffect(() => {
        if( entitiesCartSelector.length ){
            dispatch(detailsCart({}))
            // props.getDetailsEntity();
        }
    }, [entitiesCartSelector])

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
                        <Typography color="text.primary">{t<string>('header.label_cart')}</Typography>
                    </Breadcrumbs>
                </Grid>

            </Grid>

            <Grid container spacing={4} sx={{ mt: 3 }}>
                <Grid item xs={12} md={2}></Grid>
                <Grid item xs={12} md={6}>

                    {
                        loadingEntitiesCartSelector ? <LoadingCarts /> : null
                    }

                    {
                        entitiesCartSelector.map((item: ICart, index: number) => (
                            <Box key={`index-${index}`} sx={{my: 2}}>
                                <ItemCart cart={item} t={t} parentCallbackDeleteCart={deleteDetailsCart} parentCallbackUpdateQuantity={updateByQuantity}/>
                            </Box>
                        ))
                    }

                    {
                        entitiesCartSelector.length===0 && !loadingEntitiesCartSelector ?
                            <Alert severity="error">{t<string>('cart.list_not_found')}</Alert> : null
                    }

                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{my: 2}}>
                        <DetailsCart nbeCarts={entitiesCartSelector.length} detailsEntity={entityCartSelector}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
