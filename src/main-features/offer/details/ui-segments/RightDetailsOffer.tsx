import React from 'react';
import red from '@mui/material/colors/red';
import Grid from '@mui/material/Grid/Grid';
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import CardActions from '@mui/material/CardActions/CardActions';
import Button from '@mui/material/Button/Button';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import MessageIcon from '@mui/icons-material/MessageOutlined';
import Box from '@mui/material/Box/Box';
import TextField from '@mui/material/TextField/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import {useHistory} from 'react-router-dom';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import Dialog from '@mui/material/Dialog/Dialog';
import DialogTitle from '@mui/material/DialogTitle/DialogTitle';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogContentText from '@mui/material/DialogContentText/DialogContentText';
import {IOffer} from "../../../../shared/model/offer.model";
import {IUser} from "../../../../shared/model/user.model";
import {
    convertDateTimeToServer,
    getBaseImageUrl,
    getFullnameUser,
    getUserAvatar
} from "../../../../shared/utils/utils-functions";
import {ALL_APP_ROUTES} from "../../../../core/config/all-app-routes";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import {TransitionModal} from "../../../../shared/pages/transition-modal";
import {useFormik} from "formik";
import {
    initialValuesAddMessageDetailsOffer,
    validationSchemaAddMessageDetailsOffer
} from "../validation/initial-values-add-comment-offer";
import {useTranslation} from "react-i18next";
import isEmpty from 'lodash/isEmpty';
import CustomShare from "../../../../shared/components/custom-share/CustomShare";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import ProblemeDeclaration from "../../../probleme-declaration/ProblemeDeclaration";
import {StyledBadge} from "../../../../shared/pages/styled-badge";




const initialValues = initialValuesAddMessageDetailsOffer;

export default function RightDetailsOffer({offerEntity, parentCallback, currentUser, isAuthenticated, myFavoriteUser, createConversationCallback, addSuccessConversation, isOnLine}:
                                              {
                                                  offerEntity: IOffer | undefined,
                                                  parentCallback: any,
                                                  currentUser: IUser,
                                                  isAuthenticated: boolean,
                                                  myFavoriteUser: boolean,
                                                  createConversationCallback: any,
                                                  addSuccessConversation: boolean,
                                                  isOnLine: any
                                              }) {

    const [defaultValues, setDefaultValues] = React.useState<any>();
    const [messageAlert, setMessageAlert] = React.useState('');
    const [openAlert, setOpenAlert] = React.useState(false);
    const [contactWithPhone, setContactWithPhone] = React.useState(false);

    const history = useHistory();
    const { t } = useTranslation();

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaAddMessageDetailsOffer,
        onSubmit: values => {
            if (currentUser.id !== offerEntity?.user?.id && isAuthenticated) {
                setDefaultValues(values);
                sendMessage(values.content);
            }
        },
    });

    React.useEffect(() => {
        if( !isEmpty(currentUser)) {
            formik.setFieldValue('fullName', getFullnameUser(currentUser));
            formik.setFieldValue('email', currentUser.email);
        }
    }, [currentUser])

    React.useEffect(() =>{
        if(addSuccessConversation){
            formik.resetForm({values:{...defaultValues, content:""}})
        }
    }, [addSuccessConversation])

    const sendMessage = (content: string) => {
        const entity = {
            content: content,
            conversation: {
                dateCreated: convertDateTimeToServer(new Date()),
                senderUser: null,
                receiverUser: {
                    id: offerEntity?.user?.id,
                    email: offerEntity?.user?.email,
                },
            },
        };
        createConversationCallback(entity);
    };

    const [openFavoriteModal, setOpenFavoriteModal] = React.useState(false);
    const handleClickOpenFavoriteModal = (event: any) => {
        event.stopPropagation();
        if (!myFavoriteUser) {
            setOpenFavoriteModal(true);
        }
    };
    const handleCloseFavoriteModal = () => {
        setOpenFavoriteModal(false);
    };

    const handleAddFavoriteModal = () => {
        setOpenFavoriteModal(false);
        parentCallback(offerEntity?.user?.id);
    };

    const handleExpandClick = () => {
    };

    const redirectToPorfile = (userId: number) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.PROFILE + '/' + userId);
        }, 300);
    };

    const getFavoriteUserColor = () => {
        if (myFavoriteUser) {
            return 'red';
        }
        return 'color: rgba(0, 0, 0, 0.54)';
    };

    const renderDialogFavoriteUser = () => {
        return (
            <Dialog
                open={openFavoriteModal}
                TransitionComponent={TransitionModal}
                keepMounted
                onClose={handleCloseFavoriteModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    {t('details_offer.title_add_favrite_user')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {t('details_offer.description_add_favrite_user')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFavoriteModal} color="neutral">
                        {t('common.label_cancel')}
                    </Button>
                    <Button onClick={handleAddFavoriteModal} color="success">
                        {t('common.label_favorite')}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    const openPositionInGoogleMap = () => {
        console.log('offerEntity ', offerEntity);
        if(!offerEntity?.address){
            setMessageAlert(t('details_offer.not_address_found_itenarary'));
            setOpenAlert(true);
        }
        else{
            window.open('https://www.google.com/maps/@35.8235978,10.6309176,15z', '_new');
        }

    }

    const openItenraireGoogleMap = () => {
        console.log('offerEntity ', offerEntity);
        if(!offerEntity?.address){
            setMessageAlert(t('details_offer.not_address_found_itenarary'));
            setOpenAlert(true);
        }
        else if(!currentUser?.address){
            setMessageAlert(t('details_offer.miss_address_account'));
            setOpenAlert(true);
        }
        else{
            window.open('https://www.google.com/maps/dir/'+currentUser?.address?.lng+','+currentUser?.address?.lng+'/'+offerEntity?.address?.lng+','+offerEntity?.address?.lng+'', '_new');
        }

    }

    const handleCloseAlert = () => {
        setOpenAlert(false);
    }

    const contactWithFacebookcontactWithFacebook = () => {
        if(!offerEntity?.user?.linkProfileFacebook){
            setMessageAlert(t('details_offer.message_not_link_profile_facebook_exist'));
            setOpenAlert(true);
        }else{
            window.open(offerEntity?.user?.linkProfileFacebook, '_new');
        }
    }

    return (
        <Grid item xs={12} sm={12}>
            <Card>
                <Typography paragraph sx={{m: 2}}>
                    {t('details_offer.about_seller')}
                </Typography>
                <ListItemButton  onClick={() => redirectToPorfile(offerEntity?.user?.id)} sx={{display: 'block'}}>
                    <CardHeader
                        avatar={
                            offerEntity ? (
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                        color={isOnLine(offerEntity.user?.email) ? 'success' : 'error'}>
                                            <Avatar
                                                aria-label="recipe"
                                                alt={offerEntity.user?.imageUrl}
                                                src={getUserAvatar(offerEntity.user?.id, offerEntity.user?.imageUrl, offerEntity.user?.sourceRegister)}
                                                sx={{border: '1px solid #b9b9b9'}}
                                            >{getFullnameUser(offerEntity?.user)?.charAt(0)}</Avatar>
                                    </StyledBadge>
                            ) : null
                        }
                        action={
                            <IconButton aria-label="settings"
                                        sx={{color: getFavoriteUserColor()}}
                                        onClick={(event: any) => handleClickOpenFavoriteModal(event)}
                                        disabled={offerEntity?.user?.id === currentUser?.id}>
                                <FavoriteIcon/>
                            </IconButton>
                        }
                        title={
                            <React.Fragment>
                                {getFullnameUser(offerEntity?.user)}
                            </React.Fragment>
                        }
                        subheader={offerEntity?.user?.email}
                        onClick={() => redirectToPorfile(offerEntity?.user?.id)}
                        role="button"
                    />
                </ListItemButton >

                {offerEntity?.user?.address ? (
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {offerEntity?.user?.address.city}, {offerEntity?.user?.address.country}
                        </Typography>
                    </CardContent>
                ) : null}

                <CardActions disableSpacing sx={{backgroundColor: 'rgba(0, 0, 0, 0.74);'}}>
                    <IconButton
                        aria-label="add to favorites"
                        sx={{color: getFavoriteUserColor()}}
                        onClick={handleClickOpenFavoriteModal}
                        disabled={offerEntity?.user?.id === currentUser?.id}
                    >
                        <FavoriteIcon/>
                    </IconButton>

                    <CustomShare url="https://github.com/nygardk/react-share/blob/master/demo/Demo.tsx">
                        <Box sx={{color: '#fff'}}>
                            <ShareIcon/>
                        </Box>
                    </CustomShare>

                    <IconButton sx={{marginLeft: 'auto', color: '#fff'}} onClick={handleExpandClick}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>

                <Grid container item sx={{mt: 3}}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{'& > :not(style)': {m: 1}}}>
                            <form onSubmit={formik.handleSubmit}>
                                <Typography paragraph className="text-center">
                                    {t('details_offer.send_message')}
                                </Typography>
                                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                    <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                    <TextField id="fullName"
                                               name="fullName"
                                               label={t('common.label_name')}
                                               variant="standard"
                                               fullWidth
                                               disabled={!(formik.touched.fullName && Boolean(formik.errors.fullName))}
                                               value={formik.values.fullName}
                                               onChange={formik.handleChange}
                                               error={formik.touched.fullName && Boolean(formik.errors.fullName)}/>
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'flex-end', my: 2}}>
                                    <EmailIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                    <TextField id="email"
                                               name="email"
                                               label={t('common.label_email')}
                                               variant="standard"
                                               fullWidth
                                               disabled={!(formik.touched.email && Boolean(formik.errors.email))}
                                               value={formik.values.email}
                                               onChange={formik.handleChange}
                                               error={formik.touched.email && Boolean(formik.errors.email)}/>
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                    <MessageIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                    <TextField id="content"
                                               name="content"
                                               label="Message"
                                               variant="standard"
                                               fullWidth
                                               multiline
                                               rows={4}
                                               value={formik.values.content}
                                               onChange={formik.handleChange}
                                               error={formik.touched.content && Boolean(formik.errors.content)}/>
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                    <Button variant="outlined" size="small" fullWidth sx={{mt: 2, mb: 2}}
                                            color="neutral"
                                            type="submit"
                                            disabled={currentUser.id === offerEntity?.user?.id}>
                                        {t('common.label_send')}
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{p: 2, borderLeft: '1px solid #cfcbcb;'}}>
                        <Typography paragraph className="text-center">
                            {t('details_offer.contact_with')}
                        </Typography>

                        <Button variant="outlined" startIcon={<FacebookIcon/>} fullWidth sx={{mt: 3}} onClick={() => contactWithFacebookcontactWithFacebook()}>
                            Facebook
                        </Button>

                        <Button variant="outlined" startIcon={<PhoneIcon/>} fullWidth sx={{mt: 3}} onClick={() => setContactWithPhone(!contactWithPhone)}>
                            {contactWithPhone ? offerEntity?.user?.phone : t('details_offer.show_number')}
                        </Button>

                        <a href={`mailto:${offerEntity?.user?.email}`} style={{textDecoration: 'none'}}>
                            <Button variant="outlined" startIcon={<EmailIcon/>} fullWidth sx={{mt: 3}}>
                                {t('details_offer.send_email')}
                            </Button>
                        </a>
                    </Grid>
                </Grid>
            </Card>

            <Grid container item spacing={2} sx={{mt: 1}}>
                <Grid item xs={12} sm={6}>
                    <Card onClick={openPositionInGoogleMap}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Découvrir le quartier
                            </Typography>
                            <div style={{maxHeight: 400, marginTop: 30}}>
                                <img
                                    className="img-fluid"
                                    src={getBaseImageUrl('/assets/images/offer/details-offer/desktop-map-neighbourhood.ext.svg')}
                                    alt="desktop-map-neighbourhood"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Card onClick={openItenraireGoogleMap}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Découvrir le quartier
                            </Typography>
                            <div style={{maxHeight: 400, marginTop: 30}}>
                                <img
                                    className="img-fluid"
                                    src={getBaseImageUrl('/assets/images/offer/details-offer/desktop-time-of-travel-address.ext.svg')}
                                    alt="desktop-time-of-travel-address"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container item spacing={2} sx={{mt: 1}}>
                <Grid item xs={12} sm={6}>
                    <ProblemeDeclaration />
                </Grid>
            </Grid>

            <div>{renderDialogFavoriteUser()}</div>
            <div>
                <Snackbar
                    open={openAlert}
                    autoHideDuration={5000}
                    onClose={handleCloseAlert}
                    message={messageAlert}
                />
            </div>
        </Grid>
    );
}
