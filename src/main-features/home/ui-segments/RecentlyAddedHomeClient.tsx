import React from 'react';
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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@mui/material/styles/styled';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import {IRootState} from "../../../shared/reducers";
import {getEntitiesRecentlyAdded} from "../../../shared/reducers/offer.reducer";
import {connect} from "react-redux";
import {getFullnameUser, getImageForOffer, getUserAvatar} from "../../../shared/utils/utils-functions";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {useHistory} from "react-router-dom";
import {IOffer} from "../../../shared/model/offer.model";
import Box from "@mui/material/Box/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


function RecentlyAddedHome({offer, index, rediretTo}: {offer: IOffer, index: number, rediretTo: any}){


    const getPathImg = (offer: IOffer) => {
        return offer && offer?.offerImages && offer?.offerImages[0] ? offer?.offerImages[0]?.path : '';
    }
    return (
        <CardActionArea component="a" onClick={() => rediretTo(offer.id)} key={`entity-${index}`}>
            <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={getUserAvatar(offer.user?.id, offer.user?.imageUrl, offer.user?.sourceRegister)}>
                            {getFullnameUser(offer.user)?.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={getFullnameUser(offer?.user)}
                    subheader={offer.dateCreated}
                />
                <CardMedia component="img" height="194" image={getImageForOffer(offer?.id, getPathImg(offer) || '')} alt="Image Offer" />
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

export interface IRecentlyAddedHomeClientProps extends StateProps, DispatchProps {}

export const RecentlyAddedHomeClient = (props: IRecentlyAddedHomeClientProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const history = useHistory();

    const {listOffers, getEntitiesRecentlyAdded} = props;

    React.useEffect(() => {
        getEntitiesRecentlyAdded(0, 9, 'id,asc');
    }, []);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const rediretTo = (offerId: string) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.DETAILS_OFFER + '/' + offerId);
        }, 300);
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 5 }} className="container-recently-added-home">
            <h3>
                <u>Récemment ajoutés</u>
            </h3>
            <Grid container spacing={4}  sx={{display: {xs: 'none', md: 'flex'}}}>
                {listOffers.map((offer: any, index: number) => (
                    <Grid item  key={`offer-${index}`} xs={12} sm={6} md={4}>
                        <RecentlyAddedHome offer={offer} index={index} rediretTo={rediretTo}/>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{display: {md: 'none'}}} className="box-swiper">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {listOffers.map((offer: any, index: number) => (
                        <SwiperSlide key={`offer-${index}`}><RecentlyAddedHome offer={offer} index={index} rediretTo={rediretTo}/></SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Container>
    )
}

const mapStateToProps = ({ offer }: IRootState) => ({
    listOffers: offer.entitiesRecentlyAddedOffers,
});

const mapDispatchToProps = {
    getEntitiesRecentlyAdded,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyAddedHomeClient);