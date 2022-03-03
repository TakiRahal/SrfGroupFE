import React from 'react';
import {connect} from "react-redux";
import {IRootState} from "../../../shared/reducers";
import {
    addCommentOffer,
    getEntitiesByOffer as getListCommentsByOffer
} from "../../../shared/reducers/comment-offer.reducer";

import {getEntitywithFavorite, uploadFiles} from "../../../shared/reducers/offer.reducer";
import {useParams} from "react-router";
import Zoom from "@mui/material/Zoom/Zoom";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import Typography from "@mui/material/Typography/Typography";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Box from "@mui/material/Box/Box";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import {TypeOfferEnum} from "../../../shared/enums/type-offer.enum";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {ConvertReactTimeAgo} from "../../../shared/pages/react-time-ago";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddLocation from '@mui/icons-material/AddLocation';
import parse from 'html-react-parser';
import CardActions from "@mui/material/CardActions/CardActions";
import Button from "@mui/material/Button/Button";
import SwiperDetailsOffer from "./ui-segments/SwiperDetailsOffer";

import './DetailsOffer.scss';
import CommentDetailsOffer from "./ui-segments/CommentDetailsOffer";
import RightDetailsOffer from './ui-segments/RightDetailsOffer';
import {ICommentOffer} from "../../../shared/model/comment-offer.model";
import {convertDateTimeToServer} from "../../../shared/utils/utils-functions";


export interface IDetailsOfferProps extends StateProps, DispatchProps{}

export const DetailsOffer = (props: IDetailsOfferProps) => {
    const [startAnimation, setStartAnimation] = React.useState(false);
    const [isFavoriteUser, setIsFavoriteUser] = React.useState(false);

    const {id} = useParams<{ id: string }>();

    const {
        getEntitywithFavorite,
        entityFavoriteUser,
        loadingEntity,
        isAuthenticated,
        getListCommentsByOffer,
        loadingCommentsByOffer,
        listCommentsByOffer,
        account,
        loadingUpdateEntity,
        addSuccessEntity
    } = props;

    React.useEffect(() => {
        setStartAnimation(true);
    }, []);

    React.useEffect(() => {
        console.log('props.match.params ', id);
        if(id){
            getEntitywithFavorite(id);
        }
    }, [id])

    React.useEffect(() => {
        const idOffer = entityFavoriteUser?.offer?.id || -1;
        if (entityFavoriteUser && entityFavoriteUser.offer && isAuthenticated && !loadingEntity) {
            setIsFavoriteUser(entityFavoriteUser?.myFavoriteUser || false);
            getListCommentsByOffer(idOffer, 0, 20, '');
        }
    }, [entityFavoriteUser]);

    React.useEffect(() => {
        const idOffer = entityFavoriteUser?.offer?.id || -1;
        getListCommentsByOffer(idOffer, 0, 20, '');
    }, [addSuccessEntity])

    const handleCallbackAddComment = (content: string) => {
        console.log('commentContent ', content);
        if (content) {
            const entity: ICommentOffer = {
                createdDate: null,
                content: content,
                offer: {
                    id: entityFavoriteUser?.offer?.id,
                    user: {
                        id: entityFavoriteUser?.offer?.user?.id,
                        username: entityFavoriteUser?.offer?.user?.username,
                    },
                },
                user: {},
            };
            props.addCommentOffer(entity);
        }
    }

    const handleCallbackDeleteComment = () => {

    }

    const parentCallbackUpdateComment = (content: string, commentid: number) => {
        // const commentUpdate = listCommentsByOffer.find(comment => comment.id === commentid);
        // commentUpdate.content = content;
        // props.updateComment(commentUpdate);
    };

    const handleCallbackFavorite = (userId: number) => {
        // if (isAuthenticated) {
        //     if (entityOfferFavoriteUser?.offer?.user?.id !== account?.id) {
        //         const entity = {
        //             favoriteUser: {
        //                 id: entityOfferFavoriteUser?.offer?.user?.id,
        //                 login: entityOfferFavoriteUser?.offer?.user?.login,
        //             },
        //             favoriteDate: Moment().toISOString(),
        //         };
        //         props.addFavoriteUser(entity);
        //     }
        // } else {
        //     history.push(ALL_APP_ROUTES.CLIENT.LOGIN);
        // }
    };

    return (
        <Zoom in={startAnimation}>
            <Container maxWidth="xl" className="details-offer-client">
                <Grid
                    container
                    style={{
                        paddingTop: 10,
                    }} >
                    <Grid item xs={12} sm={6}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                                SRF
                            </Link>
                            <Link color="inherit" to={ALL_APP_ROUTES.SEARCH}>
                                Search
                            </Link>
                            <Typography color="text.primary">{entityFavoriteUser?.offer?.title}</Typography>
                        </Breadcrumbs>
                    </Grid>
                </Grid>

                {
                    loadingEntity ?
                        <Box sx={{ paddingTop: 10, textAlign: 'center' }}>
                            <CircularProgress />
                        </Box> :

                        <Grid
                            container
                            style={{
                                paddingTop: 50,
                            }}
                        >
                            <Grid item xs={12} sm={6}>
                                <SwiperDetailsOffer {...entityFavoriteUser?.offer} />
                                <Card>
                                    <CardContent>
                                        {entityFavoriteUser?.offer?.amount ? (
                                            <Typography variant="h4" className="text-center" sx={{ color: 'red', fontWeight: 600 }}>
                                                $ {entityFavoriteUser?.offer?.amount} DT
                                            </Typography>
                                        ) : null}

                                        <Typography variant="subtitle2" color="text.secondary">
                                            <InfoOutlinedIcon />{' '}
                                            {entityFavoriteUser?.offer?.typeOffer === TypeOfferEnum.Sell ? (
                                                'For Sell'
                                            ) : entityFavoriteUser?.offer?.typeOffer === TypeOfferEnum.Rent ? (
                                                'For Rent'
                                            ) : entityFavoriteUser?.offer?.typeOffer === TypeOfferEnum.Find ? (
                                                'For Find'
                                            ) : null}
                                        </Typography>

                                        {entityFavoriteUser?.offer?.startDate && entityFavoriteUser?.offer?.endDate ? (
                                            <Typography color="text.secondary" gutterBottom>
                                                from_rent_periode
                                                &nbsp;
                                                <strong>{entityFavoriteUser?.offer?.startDate}</strong>&nbsp;
                                                to_rent_periode
                                                &nbsp;
                                                <strong>{entityFavoriteUser?.offer?.endDate}</strong>
                                            </Typography>
                                        ) : null}

                                        <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                                            {entityFavoriteUser?.offer?.title}
                                        </Typography>

                                        <Typography sx={{ fontSize: '0.8rem' }} color="text.secondary">
                                            <AccessTimeIcon fontSize="small" /> <ConvertReactTimeAgo convertDate={entityFavoriteUser?.offer?.dateCreated} />
                                        </Typography>
                                        <Typography sx={{ mb: 1.8, fontSize: '0.8rem' }} color="text.secondary">
                                            <AddLocation fontSize="small" />
                                            {entityFavoriteUser?.offer?.address?.city}, {entityFavoriteUser?.offer?.address?.country}
                                        </Typography>

                                        <div>{parse(entityFavoriteUser?.offer?.description ? entityFavoriteUser?.offer?.description : '')}</div>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>

                                {isAuthenticated ? (
                                    <CommentDetailsOffer
                                        offerEntity={entityFavoriteUser?.offer}
                                        listCommentsByOffer={listCommentsByOffer}
                                        account={account}
                                        isAuthenticated={isAuthenticated}
                                        loadingListComments={loadingCommentsByOffer}
                                        loadingUpdateEntity={loadingUpdateEntity}
                                        parentCallbackAddComment={handleCallbackAddComment}
                                        parentCallbackDeleteComment={handleCallbackDeleteComment}
                                        parentCallbackUpdateComment={parentCallbackUpdateComment}
                                    />
                                ) : null}
                            </Grid>

                            <Grid container item xs={12} sm={6} sx={{ pl: { xs: 0, sm: 4 } }} spacing={2}>
                                <RightDetailsOffer
                                    parentCallback={handleCallbackFavorite}
                                    offerEntity={entityFavoriteUser?.offer}
                                    currentUser={account}
                                    myFavoriteUser={isFavoriteUser}
                                />
                            </Grid>
                        </Grid>

                }

            </Container>
        </Zoom>
    );
}


const mapStateToProps = ({ user, offer, comment }: IRootState) => ({
    isAuthenticated: user.isAuthenticated,
    account: user.currentUser,

    loadingEntity: offer.loadingEntity,
    entityFavoriteUser: offer.entity,

    loadingCommentsByOffer: comment.loadingEntitiesByOffer,
    listCommentsByOffer: comment.entitiesByOffer,
    loadingUpdateEntity: comment.loadingUpdateEntity,
    addSuccessEntity: comment.addSuccess
});

const mapDispatchToProps = {
    getEntitywithFavorite,
    getListCommentsByOffer,
    addCommentOffer
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DetailsOffer);