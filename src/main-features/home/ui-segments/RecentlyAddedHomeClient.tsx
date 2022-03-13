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
import { useEffect } from 'react';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import {IRootState} from "../../../shared/reducers";
import {getEntitiesRecentlyAdded} from "../../../shared/reducers/offer.reducer";
import {connect} from "react-redux";
import {getFullnameUser, getImageForOffer} from "../../../shared/utils/utils-functions";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {useHistory} from "react-router-dom";

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
    }, [])
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const rediretTo = (offerId: string) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.DETAILS_OFFER + '/' + offerId);
        }, 300);
    };

    const getPathAvatar = (url: string) => {
        return '';
    };

    const getPathImage = (url: string) => {
        return '';
    };

    return (
        <Container maxWidth="xl" sx={{ p: 0, mt: 5 }}>
            <h3>
                <u>Récemment ajoutés</u>
            </h3>
            <Grid container spacing={4}>
                {listOffers.map((offer: any, index: number) => (
                    <Grid item key={offer.id} xs={12} sm={6} md={4}>
                        <CardActionArea component="a" onClick={() => rediretTo(offer.id)} key={`entity-${index}`}>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={getPathAvatar(offer.user)}>
                                            R
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
                                <CardMedia component="img" height="194" image={getImageForOffer(offer.id, offer?.offerImages[0]?.path)} alt="Paella dish" />
                                <CardContent className="card-content-offer">
                                    <Typography variant="body2" color="text.secondary" className="truncate-string-two-lines">
                                        <span dangerouslySetInnerHTML={{ __html: offer.description }}></span>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
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