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
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
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
import { createEntity as addCart } from '../../../shared/reducers/cart.reducer';
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
import {useTranslation} from "react-i18next";
import {createConversation} from "../../../shared/reducers/conversation.reducer";
import {IConversationContent} from "../../../shared/model/conversation-content";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import Accordion from "@mui/material/Accordion/Accordion";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomShare from "../../../shared/components/custom-share/CustomShare";
import i18n from "i18next";
import CartSellDetailsOffer from "./ui-segments/CartSellDetailsOffer";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import {ICart} from "../../../shared/model/cart.model";

export interface IDetailsOfferProps extends StateProps, DispatchProps{}

export const DetailsOffer = (props: IDetailsOfferProps) => {
    const [startAnimation, setStartAnimation] = React.useState(false);
    const [isFavoriteUser, setIsFavoriteUser] = React.useState(false);
    const [openReportOfferModal, setOpenReportOfferModal] = React.useState(false);
    const [activeCommentPage, setActiveCommentPage] = React.useState(-1);
    const [expandedDetailsOffer, setExpandedDetailsOffer] = React.useState<boolean>(true);
    const [defaultLanguage, setDefaultLanguage] = React.useState('fr');

    const {id} = useParams<{ id: string }>();

    const history = useHistory();
    const { t } = useTranslation();

    const {
        resetAllFavoriteOfferUser,
        resetCommentOffer,
        getEntitywithFavorite,
        updateComment,
        favoriteUserOffer,
        loadingEntityFavoriteUserOffer,
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
        i18n.on('languageChanged', (lang: any) => {
            setDefaultLanguage(lang);
        });

        resetAllFavoriteOfferUser();
        resetCommentOffer();
    }, [])

    React.useEffect(() => {
        if(!favoriteUserOffer?.offer?.id && id){
            getEntitywithFavorite(id);
            setActiveCommentPage(0);
        }
    }, [favoriteUserOffer])

    React.useEffect(() => {
        if(activeCommentPage>=0){
            if(isAuthenticated){
                getListCommentsByOffer(Number(id), activeCommentPage, AllAppConfig.COMMENTS_PER_PAGE, '');
            }
        }
    }, [activeCommentPage])

    React.useEffect(() => {
        if (favoriteUserOffer && favoriteUserOffer.offer && !loadingEntityFavoriteUserOffer) {
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
                        email: favoriteUserOffer?.offer?.user?.email,
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

    const createConversation = (conversation: IConversationContent) => {
        props.createConversation(conversation);
    }

    const parentCallbackReportComment = (comment: ICommentOffer) => {
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
                aria-describedby="alert-dialog-slide-description" >
                <DialogTitle>
                    {t('details_offer.title_dialog_report_offer')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {t('details_offer.description_dialog_report_offer')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseReportOfferModal} color="neutral">
                        {t('common.label_cancel')}
                    </Button>
                    <Button color="success" onClick={handleAddReportOfferModal}>
                        {t('common.label_report')}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    const handleChangeDetailsOffer = () => {
        setExpandedDetailsOffer(!expandedDetailsOffer);
    }

    const getNameCategory = (): string => {
        if( defaultLanguage==='en' ){
            return favoriteUserOffer?.offer?.category?.titleEn || '';
        }
        else if( defaultLanguage==='fr' ){
            return favoriteUserOffer?.offer?.category?.titleFr || '';
        }
        return favoriteUserOffer?.offer?.category?.titleAr || '';
    }

    const isOnLine = (email: string) => {
        return props.listConnectedUsers.findIndex(item => item.principal.email==email) >=0;
    }

    const addCart = (cart: ICart) => {
        const entity: ICart = {
            quantity: cart.quantity,
            sellOffer: {
                id: favoriteUserOffer?.offer?.id
            }
        }
        console.log('entity ', entity);
        props.addCart(entity);
    }

    return (
        <Box>

            {
                loadingEntityFavoriteUserOffer ?
                    <Box sx={{ paddingTop: 10, textAlign: 'center' }}>
                        <CircularProgress color="inherit"  />
                    </Box> : null
            }
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
                                    {t('common.label_search')}
                                </Link>
                                <Typography color="text.primary">{favoriteUserOffer?.offer?.title}</Typography>
                            </Breadcrumbs>
                        </Grid>
                    </Grid>

                    {
                        loadingEntityFavoriteUserOffer ?
                            null :
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
                                                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 600 }}  className="red-color">
                                                    $ {favoriteUserOffer?.offer?.amount} DT
                                                </Typography>
                                            ) : null}

                                            <Typography variant="subtitle2" color="text.secondary" display="flex">
                                                <InfoOutlinedIcon fontSize="small" sx={{mr: 0.9}}/>
                                                {favoriteUserOffer?.offer?.typeOffer === TypeOfferEnum.Sell ? (
                                                    t('common.for_sell')
                                                ) : favoriteUserOffer?.offer?.typeOffer === TypeOfferEnum.Rent ? (
                                                    t('common.for_rent')
                                                ) : favoriteUserOffer?.offer?.typeOffer === TypeOfferEnum.Find ? (
                                                    t('common.for_find')
                                                ) : null}
                                            </Typography>

                                            {favoriteUserOffer?.offer?.startDate && favoriteUserOffer?.offer?.endDate ? (
                                                <Box>
                                                    <Typography color="text.secondary" gutterBottom>
                                                        {t('common.label_start_date')}:&nbsp;<strong><ConvertReactTimeAgo convertDate={favoriteUserOffer?.offer?.startDate} /></strong>
                                                    </Typography>
                                                    <Typography color="text.secondary" gutterBottom display="flex">
                                                        {t('common.label_end_date')}:&nbsp;<strong><ConvertReactTimeAgo convertDate={favoriteUserOffer?.offer?.endDate} /></strong>
                                                    </Typography>
                                                </Box>
                                            ) : null}

                                            {
                                                favoriteUserOffer?.offer?.typePeriodRent ? <Typography color="text.secondary" gutterBottom display="flex">
                                                    {t('common.label_period')}:&nbsp;
                                                    <strong>{t('common.type_periode_rent_'+favoriteUserOffer?.offer?.typePeriodRent)}&nbsp;</strong>
                                                </Typography> : null
                                            }


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

                                            {
                                                favoriteUserOffer?.offer?.category ?
                                                    <Typography sx={{ mb: 1.8, fontSize: '0.8rem', mt: 1 }} color="text.secondary" display="flex">
                                                        <EmojiObjectsIcon fontSize="small" sx={{mr: 0.9}}/>
                                                        {t('details_offer.label_category')} {getNameCategory()}
                                                    </Typography> : null
                                            }

                                            <Accordion sx={{mt: '40px !important'}} elevation={0} expanded={expandedDetailsOffer} onChange={handleChangeDetailsOffer}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon sx={{backgroundColor: 'yellow', borderRadius: '50%'}}/>}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    className="bg-brown">
                                                    {t('details_offer.label_details_offer')}
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <div dangerouslySetInnerHTML={{ __html: favoriteUserOffer?.offer?.description || '' }}></div>
                                                </AccordionDetails>
                                            </Accordion>

                                        </CardContent>
                                        <CardActions disableSpacing>

                                            <CustomShare url="https://github.com/nygardk/react-share/blob/master/demo/Demo.tsx">
                                                <Tooltip title={
                                                    <React.Fragment>
                                                        {t('common.label_share')}
                                                    </React.Fragment>
                                                }>
                                                    <ShareIcon/>
                                                </Tooltip>
                                            </CustomShare>

                                            <IconButton sx={{marginLeft: 'auto'}} onClick={reportOffer}>
                                                <Tooltip title={
                                                    <React.Fragment>
                                                        {t('common.label_report')}
                                                    </React.Fragment>
                                                }>
                                                    <FlagIcon/>
                                                </Tooltip>
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

                                    <CartSellDetailsOffer offerEntity={favoriteUserOffer?.offer}
                                                          currentUser={account}
                                                          isAuthenticated={isAuthenticated}
                                                          parentCallbackAddCart={addCart}
                                                          loadingAddCart={props.loadingAddCart}/>

                                </Grid>

                                <Grid container item xs={12} sm={6} sx={{ pl: { xs: 0, sm: 4 } }} spacing={2}>
                                    <RightDetailsOffer
                                        parentCallback={handleCallbackFavorite}
                                        offerEntity={favoriteUserOffer?.offer}
                                        currentUser={account}
                                        isAuthenticated={isAuthenticated}
                                        myFavoriteUser={isFavoriteUser}
                                        createConversationCallback={createConversation}
                                        addSuccessConversation={props.addSuccessConversation}
                                        isOnLine={isOnLine}
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


const mapStateToProps = ({ user, offer, comment, favoriteUser, reportOffer, reportCommentOffer, conversation, webSocketState, cart }: IRootState) => ({
    isAuthenticated: user.isAuthenticated,
    account: user.currentUser,

    loadingEntityFavoriteUserOffer: offer.loadingEntityWithFavoriteUser,
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

    addSuccessConversation: conversation.addSuccess,

    listConnectedUsers: webSocketState.listConnectedUsers,

    loadingAddCart: cart.loadingEntity
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
    reportComment,
    createConversation,
    addCart
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DetailsOffer);