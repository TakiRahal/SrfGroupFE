import React from 'react';
import Box from "@mui/material/Box/Box";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import Grid from "@mui/material/Grid/Grid";
import {red} from "@mui/material/colors";
import Card from "@mui/material/Card/Card";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import Avatar from "@mui/material/Avatar/Avatar";
import IconButton from "@mui/material/IconButton/IconButton";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import CardActions from "@mui/material/CardActions/CardActions";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddLocationAltIcon from '@mui/icons-material/AddLocation';
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import Button from "@mui/material/Button/Button";
import {TypeDisplaySearchOffers, TypeOfferEnum} from "../../enums/type-offer.enum";
import {getBaseImageUrl, getFullnameUser, getImageForOffer, getUserAvatar} from "../../utils/utils-functions";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import FlagIcon from '@mui/icons-material/Flag';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckIcon from '@mui/icons-material/Check';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {IOffer} from "../../model/offer.model";
import {ConvertReactTimeAgo} from "../../pages/react-time-ago";
import {AllAppConfig} from "../../../core/config/all-config";
import {LazyImage} from "../../pages/lazy-image";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";


export default function ItemOffer({listOffers, typeDisplay}: {listOffers: IOffer[], typeDisplay: TypeDisplaySearchOffers}) {

    const history = useHistory();

    const rediretTo = (offerId?: number) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.DETAILS_OFFER + '/' + offerId);
        }, 300);
    };

    return (
        <Box>
            <Grid container spacing={{xs: 2, md: 6}}>
                {
                    listOffers.map((offer: IOffer, index) => (
                        <Grid item xs={typeDisplay===TypeDisplaySearchOffers.Grid ? 6 : 12}
                              sm={typeDisplay===TypeDisplaySearchOffers.Grid ? 4 : 12} key={`entity-${index}`}>
                            {
                                typeDisplay===TypeDisplaySearchOffers.Grid ? <CardGrid offer={offer} rediretToCallback={rediretTo}/> : <CardList offer={offer} rediretToCallback={rediretTo}/>
                            }
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    );
}

function CardList({offer, rediretToCallback}: {offer: IOffer, rediretToCallback: any}){

    const { t } = useTranslation();

    return (
        <CardActionArea component="a" onClick={() => rediretToCallback(offer.id)}>
            <Card sx={{ display: { xs: 'block', sm: 'flex' } }}>
                <CardMedia
                    sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 } }} >
                    {offer.offerImages && offer.offerImages.length ? (
                        <LazyImage className="img-fluid"
                                   src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                                   alt={offer.offerImages[0].path}/>
                    ) : (
                        <Box sx={{display: {xs: 'none', md: 'block'}}}>
                            <LazyImage className="img-fluid" src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)} alt="Offer" />
                        </Box>
                    )}
                </CardMedia>
                <CardContent sx={{ flex: 1 }}>
                    <List sx={{ width: '100%', pt: 0, pb: 0, bgcolor: 'background.paper' }}>
                        <ListItem sx={{ pl: 0 }} secondaryAction={<FlagIcon onClick={(event: any) => event.stopPropagation()} />}>
                            <ListItemAvatar>
                                <Avatar
                                    alt={offer.user?.imageUrl}
                                    src={getUserAvatar(offer.user?.id, offer.user?.imageUrl, offer.user?.sourceRegister)}
                                    sx={{border: '1px solid #b9b9b9'}}
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
                                <CheckIcon fontSize="small" sx={{mr: 0.9}}/>
                                {offer.typeOffer === TypeOfferEnum.Sell
                                    ? t('common.for_sell')
                                    : offer.typeOffer === TypeOfferEnum.Rent
                                        ? t('common.for_rent')
                                        : offer.typeOffer === TypeOfferEnum.Find
                                            ? t('common.for_find')
                                            : null}
                            </Typography>
                        </Grid>

                        {offer.amount ? (
                            <Grid item xs={4}>
                                <Typography variant="subtitle1" color="text.secondary" display="flex" sx={{justifyContent: 'end'}}>
                                    <AttachMoneyIcon />
                                    {offer.amount} TND
                                </Typography>
                            </Grid>
                        ) : null}

                    </Grid>
                </CardContent>
            </Card>
        </CardActionArea>
    );
}



function CardGrid({offer, rediretToCallback}: {offer: IOffer, rediretToCallback: any}){

    const { t } = useTranslation();

    return (
        <CardActionArea component="a" onClick={() => rediretToCallback(offer.id)}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar
                            alt={offer.user?.imageUrl}
                            src={getUserAvatar(offer.user?.id, offer.user?.imageUrl, offer.user?.sourceRegister)}
                            sx={{border: '1px solid #b9b9b9'}}
                        ></Avatar>
                    }
                    action={''}
                    title={<span className="truncate-text">{getFullnameUser(offer?.user)}</span>}
                    subheader={
                        <Typography  variant="subtitle2" color="text.secondary" display="flex" sx={{fontSize: {xs: '0.6rem', md: '0.875rem' }}}>
                            <AccessTimeFilledIcon fontSize="small" sx={{mr: 0.9, fontSize: {xs: '0.9rem', md: '1.25rem;' } }}/>
                            <ConvertReactTimeAgo convertDate={offer.dateCreated} />
                        </Typography>
                    }
                />
                    <CardMedia sx={{ height: {xs: 150, md: 200} }}>
                        {offer.offerImages && offer.offerImages.length ? (
                            <LazyImage className="img-fluid"
                                       src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                                       alt={offer.offerImages[0].path}/>
                        ) : (
                            <LazyImage className="img-fluid" src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)} alt="Offer" />
                        )}
                    </CardMedia>
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {xs: '1rem', md: '1.5rem' }}}>
                            <CheckIcon fontSize="small" sx={{mr: 0.9, fontSize: {xs: '0.9rem', md: '1.25rem;' } }}/>
                            {offer.typeOffer === TypeOfferEnum.Sell
                                ? t('common.for_sell')
                                : offer.typeOffer === TypeOfferEnum.Rent
                                    ? t('common.for_rent')
                                    : offer.typeOffer === TypeOfferEnum.Find
                                        ? t('common.for_find')
                                        : null}
                        </Typography>

                        <Typography component="h5" variant="h5" sx={{ fontSize: {xs: '1rem', md: '1.2rem' } }} className="truncate-text">
                            {offer.title}
                        </Typography>
                        {
                            offer.address ? <Typography  variant="subtitle2" color="text.secondary" display="flex" sx={{mt: 1, fontSize: {xs: '0.6rem', md: '0.875rem' }}}>
                                <AddLocationAltIcon fontSize="small" sx={{mr: 0.9, fontSize: {xs: '0.9rem', md: '1.25rem;' }}}/>
                                {offer.address.city+', '+offer.address.country}
                            </Typography> : null
                        }
                    </CardContent>
                <CardActions>
                    {offer.amount ? (
                        <IconButton aria-label="amount" size="small" sx={{fontSize: {xs: '0.9rem', md: '1.125rem' }}}>
                            <AttachMoneyIcon sx={{mr: 0.9, fontSize: {xs: '0.9rem', md: '1.25rem;' }}}/>
                            {offer.amount} TND
                        </IconButton>
                    ) : null}

                    <IconButton aria-label="report" sx={{ml: 'auto !important'}}>
                        <FlagIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </CardActionArea>
    );
}