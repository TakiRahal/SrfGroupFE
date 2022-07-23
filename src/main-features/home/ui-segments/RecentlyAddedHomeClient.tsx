import React, {FunctionComponent} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@mui/material/styles/styled';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import {getEntitiesRecentlyAdded} from "../../../shared/reducers/offer.reducer";
import {useDispatch, useSelector} from "react-redux";
import {getBaseImageUrl, getFullnameUser, getImageForOffer, getUserAvatar} from "../../../shared/utils/utils-functions";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {useNavigate} from "react-router-dom";
import {IOffer} from "../../../shared/model/offer.model";
import Box from "@mui/material/Box/Box";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import {ConvertReactTimeAgo} from "../../../shared/pages/react-time-ago";
import {AllAppConfig} from "../../../core/config/all-config";
// import { LazyImage } from 'react-lazy-images';
import {
    entitiesRecentlyOffers
} from "../../offer/store/slice";
import {LazyLoadImage} from "react-lazy-load-image-component";


function RecentlyAddedHome({offer, index, rediretTo}: {offer: IOffer, index: number, rediretTo: any}){

    const getPathImg = (offer: IOffer) => {
        return offer && offer?.offerImages && offer?.offerImages[0] ? offer?.offerImages[0]?.path : '';
    }
    return (
        <CardActionArea component="a" onClick={() => rediretTo(offer.id)} key={`entity-${index}`}>
            <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                    avatar={
                        <Avatar role="img"
                                aria-label="Image avatar"
                                src={getUserAvatar(offer.user?.id, offer.user?.imageUrl, offer.user?.sourceRegister)}
                                alt="image not found">
                            {getFullnameUser(offer.user)?.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={getFullnameUser(offer?.user)}
                    subheader={<ConvertReactTimeAgo convertDate={offer.dateCreated} />}
                />
                {/*<CardMedia component="img" height="194" image={getImageForOffer(offer?.id, getPathImg(offer) || '')} alt="Image Offer" />*/}

                {
                    offer.offerImages && offer.offerImages.length ? (
                        <CardMedia sx={{height:200}}>

                            <LazyLoadImage
                                alt="Image offer"
                                src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                                placeholder={<img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE_LOADING)} className="img-lazy-loading"/>}
                                placeholderSrc={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE_LOADING)}
                                onError={(e: any) => {
                                    e.target.onerror = null;
                                    e.target.src = getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE);
                                }}
                                className="img-lazy-loading"
                            />

                            {/*<LazyImage*/}
                            {/*    src={getImageForOffer(offer.id, offer.offerImages[0].path)}*/}
                            {/*    alt="Buildings with tiled exteriors, lit by the sunset."*/}
                            {/*    actual={({ imageProps }: { imageProps: any }) => <img {...imageProps} className="img-lazy-loading"/>}*/}
                            {/*    placeholder={({ ref }: { ref: any }) => <div ref={ref} />}*/}
                            {/*    loading={() => (*/}
                            {/*        <div>*/}
                            {/*            <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE_LOADING)}*/}
                            {/*                  className="img-lazy-loading"*/}
                            {/*                  alt="image not found"/>*/}
                            {/*        </div>*/}
                            {/*    )}*/}
                            {/*    error={() => (*/}
                            {/*        <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)}*/}
                            {/*              className="img-lazy-loading"*/}
                            {/*              style={{height:200}}*/}
                            {/*              alt="image not found"/>*/}
                            {/*    )}*/}
                            {/*/>*/}
                        </CardMedia>
                    ) : (
                        <CardMedia
                            component="img"
                            height="200"
                            image={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)}
                            alt="image not found"
                        />
                    )
                }

                <CardContent className="card-content-offer">
                    <Typography variant="body2" color="text.secondary" className="truncate-string-two-lines">
                        <span dangerouslySetInnerHTML={{ __html: offer.description || '' }}></span>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore aria-label="show more">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Card>
        </CardActionArea>
    );
}

const ExpandMore = styled((props: any) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

// export interface IRecentlyAddedHomeClientProps extends StateProps, DispatchProps {}

export const RecentlyAddedHomeClient: FunctionComponent = () => {
// export const RecentlyAddedHomeClient = (props: IRecentlyAddedHomeClientProps) => {
    // const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const {entitiesRecentlyOffersSelector, getEntitiesRecentlyAdded} = props;

    // const loadingEntitiesRecentlyOffersSelector = useSelector(loadingEntitiesRecentlyOffers) ?? false;
    const entitiesRecentlyOffersSelector = useSelector(entitiesRecentlyOffers) ?? [];
    // const totalItemsRecentlyOffersSelector = useSelector(totalItemsRecentlyOffers) ?? -1;
    // const totalPagesRecentlyOffersSelector = useSelector(totalPagesRecentlyOffers) ?? 0;


    // React.useEffect(() => {
        // dispatch(fetchRecentlyOffer({
        //     page: 0,
        //     size: 9,
        //     queryParams: ''
        // }));
        // getEntitiesRecentlyAdded(0, 9, 'id,asc');
    // }, []);

    const rediretTo = (offerId: string) => {
        setTimeout(() => {
            navigate(ALL_APP_ROUTES.DETAILS_OFFER + '/' + offerId);
        }, 300);
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 5 }} className="container-recently-added-home">
            <h3>
                <u>Récemment ajoutés</u>
            </h3>
            <Grid container spacing={4}  sx={{display: {xs: 'none', md: 'flex'}}}>
                {entitiesRecentlyOffersSelector.map((offer: any, index: number) => (
                    <Grid item  key={`offer-${index}`} xs={12} sm={6} md={4}>
                        <RecentlyAddedHome offer={offer} index={index} rediretTo={rediretTo}/>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{display: {md: 'none'}}} className="box-swiper">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {entitiesRecentlyOffersSelector.map((offer: any, index: number) => (
                        <SwiperSlide key={`offer-${index}`}><RecentlyAddedHome offer={offer} index={index} rediretTo={rediretTo}/></SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Container>
    )
}

// const mapStateToProps = ({ offer }: IRootState) => ({
//     entitiesRecentlyOffersSelector: offer.entitiesRecentlyAddedOffers,
// });
//
// const mapDispatchToProps = {
//     getEntitiesRecentlyAdded,
// };
//
// type StateProps = ReturnType<typeof mapStateToProps>;
// type DispatchProps = typeof mapDispatchToProps;
//
// export default connect(mapStateToProps, mapDispatchToProps)(RecentlyAddedHomeClient);
