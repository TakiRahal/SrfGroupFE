import React from 'react';
import {connect} from "react-redux";
import {IRootState} from "../../shared/reducers";
import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link, useHistory} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import LeftSearchClient from "./ui-segments/LeftSearchClient";
import SearchAppBar from "../../shared/layout/menus/SearchAppBar";
import LoadingSearchOffers from "./ui-segments/LoadingSearchOffers";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import CardActions from "@mui/material/CardActions/CardActions";
import Button from "@mui/material/Button/Button";
import {TypeOfferEnum} from "../../shared/enums/type-offer.enum";
import {IOffer} from "../../shared/model/offer.model";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import {LazyImage} from "../../shared/pages/lazy-image";
import {getBaseImageUrl, getImageForOffer, getUserAvatar} from "../../shared/utils/utils-functions";
import {AllAppConfig} from "../../core/config/all-config";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import Avatar from "@mui/material/Avatar/Avatar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItemText from "@mui/material/ListItemText/ListItemText";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {ConvertReactTimeAgo} from "../../shared/pages/react-time-ago";
import AddLocationAltIcon from '@mui/icons-material/AddLocation';
import CheckIcon from '@mui/icons-material/Check';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { getEntities as getEntitiesOffers } from '../../shared/reducers/offer.reducer';


export interface ISearchProps extends StateProps, DispatchProps {}

export const Search = (props: ISearchProps) => {

    const history = useHistory();

    const { listOffers, loadingListOffers, getEntitiesOffers } = props;

    React.useEffect(() => {
        props.getEntitiesOffers(1, 10, '');
    }, [])


    const rediretTo = (offerId?: number) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.DETAILS_OFFER + '/' + offerId);
        }, 300);
    };

    return (
        <Box>

            <Grid container sx={{ pt: 1, pl: { xs: 1, md: 0 } }}>
                <Grid item xs={12} sm={6} md={1}></Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                            SRF
                        </Link>
                        <Typography color="text.primary">Search</Typography>
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
                    <LeftSearchClient />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <div
                        style={{
                            maxWidth: '100%',
                            marginBottom: 100,
                        }}
                    >
                        <SearchAppBar />
                    </div>

                    {loadingListOffers ? (
                        <LoadingSearchOffers {...props} />
                    ) : (
                        listOffers.map((offer: IOffer, index: number) => (
                            <CardActionArea onClick={() => rediretTo(offer.id)} sx={{mt:5}} key={`entity-${index}`}>
                                <Card sx={{ display: { xs: 'block', sm: 'flex' } }}>
                                    <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 } }}>
                                        {offer.offerImages && offer.offerImages.length ? (
                                            <LazyImage className="img-fluid"
                                                       src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                                                       alt={offer.offerImages[0].path}/>
                                        ) : (
                                            <LazyImage className="img-fluid" src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)} alt="Offer" />
                                        )}
                                    </CardMedia>
                                    <CardContent sx={{ flex: 1, pt: 0 }}>
                                        <List sx={{ width: '100%', pt: 0, pb: 0, bgcolor: 'background.paper' }}>
                                            <ListItem sx={{ pl: 0 }} secondaryAction={<MoreVertIcon onClick={(event: any) => event.stopPropagation()} />}>
                                                <ListItemAvatar>
                                                    <Avatar
                                                        alt={offer.user?.imageUrl}
                                                        src={getUserAvatar(offer.user?.id, offer.user?.imageUrl, offer.user?.sourceProvider)}
                                                    ></Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={
                                                        (offer.user?.firstName ? offer.user?.firstName : '') + ' ' + (offer.user?.lastName ? offer.user?.lastName : '')
                                                    }
                                                    secondary={
                                                        <React.Fragment>
                                                            <AccessTimeFilledIcon className="mr-1" />
                                                            <ConvertReactTimeAgo convertDate={offer.dateCreated} />
                                                        </React.Fragment>
                                                    }
                                                />
                                            </ListItem>
                                        </List>

                                        <Grid container spacing={2}>
                                            <Grid item xs={8}>
                                                <Typography component="h5" variant="h5" sx={{ fontSize: '1.2rem' }}>
                                                    {offer.title}
                                                </Typography>
                                                <Typography variant="subtitle2" color="text.secondary">
                                                    <AddLocationAltIcon /> Tunisie, Sousse
                                                </Typography>

                                                <Typography variant="subtitle2" color="text.secondary">
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
                                            {offer.amount ? (
                                                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                                                    <Typography variant="subtitle1" color="text.secondary">
                                                        <AttachMoneyIcon />
                                                        {offer.amount} TND
                                                    </Typography>
                                                </Grid>
                                            ) : null}
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        ))
                    )}
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Card sx={{ maxWidth: 345 }} className="mb-5">
                        <CardContent>
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/668nUCeBHyY"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia component="img" alt="green iguana" height="140" image="https://source.unsplash.com/random" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except
                                Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </Box>
    );
}
const mapStateToProps = ({ user, offer }: IRootState) => ({
    listOffers: offer.entities,
    loadingListOffers: offer.loadingEntities,
    totalItems: offer.totalItems,
    // links: null,
    // entity: offer.entity,
    // updateSuccess: offer.updateSuccess,
});

const mapDispatchToProps = {
    getEntitiesOffers
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Search);