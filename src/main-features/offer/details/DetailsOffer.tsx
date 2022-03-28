import React from 'react';
import {connect} from "react-redux";
import {IRootState} from "../../../shared/reducers";
import {
    addCommentOffer,
    getEntitiesByOffer as getListCommentsByOffer
} from "../../../shared/reducers/comment-offer.reducer";

import {getEntitywithFavorite} from "../../../shared/reducers/offer.reducer";
import { reset as resetAllFavoriteOfferUser } from '../../../shared/reducers/offer.reducer';
import { reset as resetCommentOffer } from '../../../shared/reducers/comment-offer.reducer';
import {useHistory, useParams} from "react-router";
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
import CardActions from "@mui/material/CardActions/CardActions";
import Button from "@mui/material/Button/Button";
import FlagIcon from '@mui/icons-material/Flag';
import IconButton from '@mui/material/IconButton/IconButton';
import SwiperDetailsOffer from "./ui-segments/SwiperDetailsOffer";
import CommentDetailsOffer from "./ui-segments/CommentDetailsOffer";
import RightDetailsOffer from './ui-segments/RightDetailsOffer';
import {ICommentOffer} from "../../../shared/model/comment-offer.model";
import { createEntity as createEntityFavoriteUser } from '../../../shared/reducers/favorite-user.reducer';
import { updateEntity as updateComment } from '../../../shared/reducers/comment-offer.reducer';
import { deleteEntity as deleteComment } from '../../../shared/reducers/comment-offer.reducer';
import { createEntity as reportComment } from '../../../shared/reducers/report-comment-offer.reducer';
import { createEntity as createEntityReportOffer } from '../../../shared/reducers/report-offer.reducer';
import ShareIcon from '@mui/icons-material/Share';

import './DetailsOffer.scss';
import {convertDateTimeToServer} from "../../../shared/utils/utils-functions";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import {TransitionModal} from "../../../shared/pages/transition-modal";
import {IReportOffer} from "../../../shared/model/report-offer.model";
import {AllAppConfig} from "../../../core/config/all-config";
import {addEventGA, AllModulesEventGA} from "../../../shared/providers/google-anaylitics";

export interface IDetailsOfferProps extends StateProps, DispatchProps{}

export const DetailsOffer = (props: IDetailsOfferProps) => {
    const [startAnimation, setStartAnimation] = React.useState(false);
    const [isFavoriteUser, setIsFavoriteUser] = React.useState(false);
    const [openReportOfferModal, setOpenReportOfferModal] = React.useState(false);
    const [activeCommentPage, setActiveCommentPage] = React.useState(-1);

    const {id} = useParams<{ id: string }>();

    const history = useHistory();

    const {
        resetAllFavoriteOfferUser,
        resetCommentOffer,
        getEntitywithFavorite,
        updateComment,
        favoriteUserOffer,
        loadingEntity,
        isAuthenticated,
        getListCommentsByOffer,
        loadingCommentsByOffer,
        listCommentsByOffer,
        account,
        loadingUpdateEntity,
        addSuccessComment,
        updateSuccessComment,

        addSuccessFavoriteUser,
        createEntityFavoriteUser,
        loadingAddComment,
        totalItemsCommentsByOffer,
        deleteSuccessComment,
        deleteComment
    } = props;

    React.useEffect(() => {
        resetAllFavoriteOfferUser();
    }, [])

    React.useEffect(() => {
        if(!favoriteUserOffer?.offer?.id && id){
            getEntitywithFavorite(id);
            // if(isAuthenticated){
            //     getListCommentsByOffer(Number(id), 0, 20, '');
            // }
            setActiveCommentPage(0);
        }
    }, [favoriteUserOffer])

    React.useEffect(() => {
        if(activeCommentPage>=0){
            if(isAuthenticated){
                getListCommentsByOffer(Number(id), activeCommentPage, AllAppConfig.Comments_Per_Page, '');
            }
        }
    }, [activeCommentPage])

    React.useEffect(() => {
        if (favoriteUserOffer && favoriteUserOffer.offer && !loadingEntity) {
            setTimeout(() => {
                setStartAnimation(true);
                setIsFavoriteUser(favoriteUserOffer.myFavoriteUser || false);
            }, 100)
        }
    }, [favoriteUserOffer]);

    React.useEffect(() => {
        if(addSuccessComment || updateSuccessComment || deleteSuccessComment){
            resetCommentOffer();
            const idOffer = favoriteUserOffer?.offer?.id || -1;
            getListCommentsByOffer(idOffer, 0, 20, '');
        }
    }, [addSuccessComment, updateSuccessComment, deleteSuccessComment])

    React.useEffect(() => {
        if(addSuccessFavoriteUser){
            setIsFavoriteUser(true);
        }
    }, [addSuccessFavoriteUser])

    const handleCallbackAddComment = (content: string) => {
        if (content) {
            const entity: ICommentOffer = {
                createdDate: convertDateTimeToServer(new Date()),
                content: content,
                offer: {
                    id: favoriteUserOffer?.offer?.id,
                    user: {
                        id: favoriteUserOffer?.offer?.user?.id,
                        username: favoriteUserOffer?.offer?.user?.username,
                    },
                },
                user: {},
            };
            props.addCommentOffer(entity);

            // Add event GA
            addEventGA(AllModulesEventGA.EventOffer.AddCommentOffer.eventName,
                AllModulesEventGA.EventOffer.AddCommentOffer.eventCategory,
                AllModulesEventGA.EventOffer.AddCommentOffer.eventLabel);
        }
    }

    const handleCallbackDeleteComment = (commentId: number) => {
        deleteComment(commentId);
    }

    const parentCallbackUpdateComment = (content: string, commentid: number) => {
        let commentUpdate = listCommentsByOffer.find(comment => comment.id === commentid);
        commentUpdate = {
            ...commentUpdate,
            content: content
        }
        updateComment(commentUpdate);

        // Add event GA
        addEventGA(AllModulesEventGA.EventOffer.UpdateCommentOffer.eventName,
            AllModulesEventGA.EventOffer.UpdateCommentOffer.eventCategory,
            AllModulesEventGA.EventOffer.UpdateCommentOffer.eventLabel);
    };

    const handleCallbackFavorite = (userId: number) => {
        if (isAuthenticated) {
            if (favoriteUserOffer?.offer?.user?.id !== account?.id) {
                const entity = {
                    favoriteUser: {
                        id: favoriteUserOffer?.offer?.user?.id,
                        username: favoriteUserOffer?.offer?.user?.username,
                    },
                    favoriteDate: convertDateTimeToServer(new Date()),
                };
                createEntityFavoriteUser(entity);
            }
        } else {
            history.push(ALL_APP_ROUTES.LOGIN);
        }
    };

    const parentCallbackReportComment = (comment: ICommentOffer) => {
        console.log('comment ', comment);
        const entity = {
            commentOffer: comment,
            user: {}
        }
        props.reportComment(entity);
    }

    const parentCallbackLoadMoreComments = () => {
        setActiveCommentPage(activeCommentPage+1);
    }

    const reportOffer = () => {
        setOpenReportOfferModal(true);
    }
    const handleCloseReportOfferModal = () => {
        setOpenReportOfferModal(false);
    }
    const handleAddReportOfferModal = () => {
        setOpenReportOfferModal(false);
        const entity: IReportOffer = {
            offer: favoriteUserOffer?.offer,
            user: {}
        }
        props.createEntityReportOffer(entity);
    }
    const renderDialogReportOffer = () => {
        return (
            <Dialog
                open={openReportOfferModal}
                TransitionComponent={TransitionModal}
                keepMounted
                onClose={handleCloseReportOfferModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    Repoprt offer
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Do you want report this offer !
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseReportOfferModal}>
                        Cancel
                    </Button>
                    <Button color="success" onClick={handleAddReportOfferModal}>
                        Report
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return (
        <Box>
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
                                <Typography color="text.primary">{favoriteUserOffer?.offer?.title}</Typography>
                            </Breadcrumbs>
                        </Grid>
                    </Grid>

                    {
                        loadingEntity ?
                            <Box sx={{ paddingTop: 10, textAlign: 'center' }}>
                                <CircularProgress color="inherit"  />
                            </Box> :

                            <Grid
                                container
                                style={{
                                    paddingTop: 50,
                                }}
                            >
                                <Grid item xs={12} sm={6}>
                                    <SwiperDetailsOffer {...favoriteUserOffer?.offer} />
                                    <Card sx={{mb: 3}}>
                                        <CardContent>
                                            {favoriteUserOffer?.offer?.amount ? (
                                                <Typography variant="h4" sx={{ textAlign: 'center', color: 'red', fontWeight: 600 }}>
                                                    $ {favoriteUserOffer?.offer?.amount} DT
                                                </Typography>
                                            ) : null}

                                            <Typography variant="subtitle2" color="text.secondary" display="flex">
                                                <InfoOutlinedIcon fontSize="small" sx={{mr: 0.9}}/>
                                                {favoriteUserOffer?.offer?.typeOffer === TypeOfferEnum.Sell ? (
                                                    'For Sell'
                                                ) : favoriteUserOffer?.offer?.typeOffer === TypeOfferEnum.Rent ? (
                                                    'For Rent'
                                                ) : favoriteUserOffer?.offer?.typeOffer === TypeOfferEnum.Find ? (
                                                    'For Find'
                                                ) : null}
                                            </Typography>

                                            {favoriteUserOffer?.offer?.startDate && favoriteUserOffer?.offer?.endDate ? (
                                                <Box>
                                                    <Typography color="text.secondary" gutterBottom display="flex">
                                                        from_rent_periode
                                                        &nbsp;
                                                        <strong>{favoriteUserOffer?.offer?.startDate}</strong>&nbsp;
                                                    </Typography>
                                                    <Typography color="text.secondary" gutterBottom display="flex">
                                                        to_rent_periode
                                                        &nbsp;
                                                        <strong>{favoriteUserOffer?.offer?.endDate}</strong>
                                                    </Typography>
                                                </Box>
                                            ) : null}

                                            <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                                                {favoriteUserOffer?.offer?.title}
                                            </Typography>

                                            <Typography sx={{ fontSize: '0.8rem', mt: 1 }} color="text.secondary" display="flex">
                                                <AccessTimeIcon fontSize="small" sx={{mr: 0.9}}/> <ConvertReactTimeAgo convertDate={favoriteUserOffer?.offer?.dateCreated} />
                                            </Typography>
                                            {
                                                favoriteUserOffer?.offer?.address ?
                                                    <Typography sx={{ mb: 1.8, fontSize: '0.8rem', mt: 1 }} color="text.secondary" display="flex">
                                                        <AddLocation fontSize="small" sx={{mr: 0.9}}/>
                                                        {favoriteUserOffer?.offer?.address?.city}, {favoriteUserOffer?.offer?.address?.country}
                                                    </Typography> : null
                                            }
                                            <div dangerouslySetInnerHTML={{ __html: favoriteUserOffer?.offer?.description || '' }}></div>
                                        </CardContent>
                                        <CardActions disableSpacing>

                                            <IconButton>
                                                <ShareIcon/>
                                            </IconButton>

                                            <IconButton sx={{marginLeft: 'auto'}} onClick={reportOffer}>
                                                <FlagIcon/>
                                            </IconButton>

                                        </CardActions>
                                    </Card>

                                    {isAuthenticated ? (
                                        <Box sx={{mb: 3}}>
                                            <CommentDetailsOffer
                                                offerEntity={favoriteUserOffer?.offer}
                                                listCommentsByOffer={listCommentsByOffer}
                                                account={account}
                                                isAuthenticated={isAuthenticated}
                                                loadingListComments={loadingCommentsByOffer}
                                                loadingUpdateEntity={loadingUpdateEntity}
                                                loadingAddEntity={loadingAddComment}
                                                parentCallbackAddComment={handleCallbackAddComment}
                                                parentCallbackDeleteComment={handleCallbackDeleteComment}
                                                parentCallbackUpdateComment={parentCallbackUpdateComment}
                                                parentCallbackReportComment={parentCallbackReportComment}
                                                parentCallbackLoadMoreComments={parentCallbackLoadMoreComments}
                                                totalItems={totalItemsCommentsByOffer}
                                            />
                                        </Box>
                                    ) : null}
                                </Grid>

                                <Grid container item xs={12} sm={6} sx={{ pl: { xs: 0, sm: 4 } }} spacing={2}>
                                    <RightDetailsOffer
                                        parentCallback={handleCallbackFavorite}
                                        offerEntity={favoriteUserOffer?.offer}
                                        currentUser={account}
                                        myFavoriteUser={isFavoriteUser}
                                    />
                                </Grid>
                            </Grid>
                    }

                </Container>
            </Zoom>
            {renderDialogReportOffer()}
        </Box>
    );
}


const mapStateToProps = ({ user, offer, comment, favoriteUser, reportOffer, reportCommentOffer }: IRootState) => ({
    isAuthenticated: user.isAuthenticated,
    account: user.currentUser,

    loadingEntity: offer.loadingEntity,
    favoriteUserOffer: offer.entityWithFavoriteUser,

    loadingCommentsByOffer: comment.loadingEntitiesByOffer,
    listCommentsByOffer: comment.entitiesByOffer,
    loadingUpdateEntity: comment.loadingUpdateEntity,
    loadingAddComment: comment.loadingAddEntity,
    addSuccessComment: comment.addSuccess,
    updateSuccessComment: comment.updateSuccess,
    totalItemsCommentsByOffer: comment.totalItemsEntitiesByOffer,
    loadingDeleteComment: comment.loadingDeleteEntity,
    deleteSuccessComment: comment.deleteSuccess,

    loadingEntityFavoriteUser: favoriteUser.loadingEntity,
    entityFavoriteUser: favoriteUser.entity,
    addSuccessFavoriteUser: favoriteUser.addSuccess,

    addSuccessReportOffer: reportOffer.reportSuccess,
    loadingEntityReportOffer: reportOffer.loadingReportEntity,

    addSuccessReportCommentOffer: reportCommentOffer.reportSuccess,
    loadingEntityReportCommentOffer: reportCommentOffer.loadingReportEntity,
});

const mapDispatchToProps = {
    getEntitywithFavorite,
    getListCommentsByOffer,
    addCommentOffer,
    createEntityFavoriteUser,
    resetAllFavoriteOfferUser,
    resetCommentOffer,
    updateComment,
    deleteComment,
    createEntityReportOffer,
    reportComment
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DetailsOffer);