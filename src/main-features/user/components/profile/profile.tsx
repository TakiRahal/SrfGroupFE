import React from 'react';
import {useParams} from "react-router";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
import Slide from "@mui/material/Slide/Slide";
import Paper from "@mui/material/Paper/Paper";
import Avatar from "@mui/material/Avatar/Avatar";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import Button from "@mui/material/Button/Button";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import PhoneIcon from '@mui/icons-material/Phone';
import Box from "@mui/material/Box/Box";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import IconButton from "@mui/material/IconButton/IconButton";
import {useFormik} from "formik";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import {useTranslation} from "react-i18next";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {initialValuesAddMessage, validationSchemaAddMessage} from "../../validation/init-value-add-message";
import {convertDateTimeToServer, getFullnameUser, getUserAvatar} from "../../../../shared/utils/utils-functions";
import {TransitionModal} from "../../../../shared/pages/transition-modal";
import {ALL_APP_ROUTES} from "../../../../core/config/all-app-routes";
import {useDispatch, useSelector} from "react-redux";
import {
    entitiesUserOffers,
    fetchOffersByUser,
    loadingEntitiesUserOffers,
    totalItemsUserOffers,
    totalPagesUserOffers
} from "../../../offer/store/slice";
import {allSessionSelector, entityProfile, fetchProfileUser, loadingProfile} from "../../store/slice";
import {createConversation} from "../../../../shared/reducers/conversation.reducer";
import {ListOffersProfile} from "./ui-segments/ListOffersProfile";
import {AllAppConfig} from "../../../../core/config/all-config";
import {addConversation, loadingConversation, loadingEntitiesConversation} from "../../../chat/store/slice";


const initialValues = initialValuesAddMessage;

export default function Profile (){

    const [startAnimation, setStartAnimation] = React.useState(false);
    const [openAddMessageModal, setOpenAddMessageModal] = React.useState(false);

    const {id} = useParams<{ id: string }>();

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const {isAuthenticated, currentUser} = useSelector(allSessionSelector);

    const loadingProfileSelector = useSelector(loadingProfile) ?? false;
    const entityProfileSelector = useSelector(entityProfile) ?? {};

    const loadingEntitiesUserOffersSelector = useSelector(loadingEntitiesUserOffers) ?? false;
    const entitiesUserOffersSelector = useSelector(entitiesUserOffers) ?? [];
    const totalItemsUserOffersSelector = useSelector(totalItemsUserOffers) ?? -1;
    const totalPagesUserOffersSelector = useSelector(totalPagesUserOffers) ?? -1;

    const loadingConversationSelector = useSelector(loadingConversation) ?? false;

    // const {
    //     loadingProfileSelector,
    //     profile,
    //     getProfile,
    //     currentUser,
    //     isAuthenticated,
    //     getPublicEntitiesForUser,
    //     listOffersForUser,
    //     loadingEntitiesForUser,
    //     loadingConversation,
    //     createConversation
    // } = props;

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaAddMessage,
        onSubmit: values => {
            if (currentUser.id !== entityProfileSelector.id && isAuthenticated) {
                sendMessage(values.content);
            }
        },
    });

    const sendMessage = (content: string) => {
        const entity = {
            content: content,
            conversation: {
                dateCreated: convertDateTimeToServer(new Date()),
                senderUser: null,
                receiverUser: {
                    id: entityProfileSelector.id,
                    email: entityProfileSelector.email,
                },
            },
        };
        dispatch(addConversation({...entity}));
        // createConversation(entity);
        setOpenAddMessageModal(false);
        // props.reset();
    };

    React.useEffect(() => {
        if( entityProfileSelector){
            setTimeout(() => {
                setStartAnimation(true);
            }, 100)
        }
    }, [entityProfileSelector]);

    React.useEffect(() => {
        if(id){
            dispatch(fetchProfileUser({
                userId: Number(id)
            }));

            dispatch(fetchOffersByUser({
                page: 0,
                size: 20,
                queryParams: '',
                userId: Number(id)
            }));
            // getProfile(Number(id));
            // getPublicEntitiesForUser(1, 10, '', Number(id));
        }
    }, [id]);

    const handleClickOpenAddMessageModal = () => {
        formik.setFieldValue('content', '');
        setOpenAddMessageModal(true);
    };

    const handleClickCancelAddMessageModal = () => {
        formik.setFieldValue('content', '');
        setOpenAddMessageModal(false);
    };

    const renderDialogAddMessage = () => {
        return (
            <React.Fragment>
                <Dialog
                    open={openAddMessageModal}
                    TransitionComponent={TransitionModal}
                    keepMounted
                    onClose={handleClickCancelAddMessageModal}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <form onSubmit={formik.handleSubmit}>
                        <DialogTitle>
                            {t<string>('profile.title_send_message')}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                {getFullnameUser(currentUser)}
                            </DialogContentText>
                            <FormControl fullWidth sx={{ mt: 3, minWidth: {sx: 'auto', md: 400} }} error={formik.touched.content && Boolean(formik.errors.content)}>
                                <InputLabel htmlFor="outlined-adornment-amount">
                                    {t<string>('profile.write_your_message')}
                                </InputLabel>
                                <OutlinedInput
                                    id="content"
                                    name="content"
                                    label={t<string>('entityProfileSelector.write_your_message')}
                                    value={formik.values.content}
                                    onChange={formik.handleChange}
                                    size="small"
                                    multiline
                                    maxRows={4}
                                    rows={4}
                                />
                                <FormHelperText id="component-helper-text">{formik.touched.content && formik.errors.content}</FormHelperText>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClickCancelAddMessageModal} color="neutral">
                                {t<string>('common.label_cancel')}
                            </Button>
                            <LoadingButton loading={loadingConversationSelector} type="submit" color="success">
                                {t<string>('common.label_send')}
                            </LoadingButton>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
        );
    };

    return(
        <Box>
            <Container maxWidth="xl">
                <Grid
                    container
                    style={{
                        paddingTop: 10,
                    }}
                >
                    <Grid item xs={12} sm={6}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                                SRF
                            </Link>
                            <Link color="inherit" to="/getting-started/installation/">
                                {t<string>('profile.title_page_profile')}
                            </Link>
                            <Typography color="text.primary">
                                {getFullnameUser(entityProfileSelector)}
                            </Typography>
                        </Breadcrumbs>
                    </Grid>
                </Grid>

                <Grid container spacing={4} style={{
                    paddingTop: 50,
                }}>
                    <Grid item xs={12} sm={3} sx={{ textAlign: 'center' }}>
                        <Slide direction="left" in={startAnimation}>
                            <Box>
                                <Paper elevation={3} sx={{ p: 1 }}>
                                    <Avatar
                                        alt={entityProfileSelector.imageUrl}
                                        src={getUserAvatar(entityProfileSelector.id, entityProfileSelector.imageUrl, entityProfileSelector?.sourceRegister)}
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            marginBottom: 2,
                                            mt: 2,
                                            border: '1px solid #b9b9b9'
                                        }}
                                    >{getFullnameUser(entityProfileSelector)?.charAt(0)}</Avatar>
                                    <h4>
                                        {loadingProfileSelector ? (
                                            <Skeleton animation="wave" height={30} />
                                        ) : (
                                            <React.Fragment>
                                                {getFullnameUser(entityProfileSelector)}
                                            </React.Fragment>
                                        )}
                                    </h4>
                                    <Toolbar sx={{ justifyContent: 'center' }}>
                                        <Button
                                            variant="outlined"
                                            startIcon={<PhoneIcon />}
                                            color="neutral"
                                            size="small"
                                            onClick={() => handleClickOpenAddMessageModal()}
                                            disabled={currentUser.id === entityProfileSelector.id || !isAuthenticated}
                                        >
                                            Send a message
                                        </Button>
                                    </Toolbar>

                                    <Typography component="h5" color="text.secondary" display="flex" sx={{justifyContent: 'center', mb: 2, textDecoration: 'underline', cursor: 'pointer'}}>
                                        <FavoriteIcon fontSize="small" sx={{mr: 0.9}}/>
                                        Favorite user
                                    </Typography>

                                    {/*<Fab size="medium" color="secondary" aria-label="add">*/}
                                    {/*<PhoneIcon />*/}
                                    {/*</Fab>*/}
                                </Paper>

                            </Box>
                        </Slide>

                        <Box sx={{my: 3}}>
                            {/*<ProblemeDeclaration />*/}
                        </Box>


                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Slide direction="right" in={startAnimation}>
                            <div>
                                <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
                                    <Box sx={{ mt: 2 }}>
                                        <h5>Personal Details</h5>
                                        <List sx={{ bgcolor: 'background.paper' }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6}>
                                                    <ListItem alignItems="flex-start">
                                                        <ListItemText
                                                            primary="Firstname"
                                                            secondary={
                                                                <React.Fragment>
                                                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                                                        {/*Ali Connors*/}
                                                                    </Typography>
                                                                    {loadingProfileSelector ? <Skeleton animation="wave" height={30} /> : entityProfileSelector.firstName}
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <ListItem alignItems="flex-start">
                                                        <ListItemText
                                                            primary="Lastname"
                                                            secondary={
                                                                <React.Fragment>
                                                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                                                        {/*Ali Connors*/}
                                                                    </Typography>
                                                                    {loadingProfileSelector ? <Skeleton animation="wave" height={30} /> : entityProfileSelector.lastName}
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6}>
                                                    <ListItem alignItems="flex-start">
                                                        <ListItemText
                                                            primary="Email"
                                                            secondary={
                                                                <React.Fragment>
                                                                    {loadingProfileSelector ? <Skeleton animation="wave" height={30} /> : entityProfileSelector.email}
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <ListItem
                                                        alignItems="flex-start"
                                                        secondaryAction={
                                                            <IconButton edge="end" aria-label="phone">
                                                                <PhoneIcon />
                                                            </IconButton>
                                                        }
                                                    >
                                                        <ListItemText
                                                            primary="Phone number"
                                                            secondary={
                                                                <React.Fragment>
                                                                    {loadingProfileSelector ? <Skeleton animation="wave" height={30} /> : entityProfileSelector.phone}
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6}>
                                                    <ListItem alignItems="flex-start">
                                                        <ListItemText
                                                            primary="Adresse"
                                                            secondary={
                                                                <React.Fragment>
                                                                    {'Sousse'}
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <ListItem alignItems="flex-start">
                                                        <ListItemText
                                                            primary={t<string>('profile.label_link_profile_facebook')}
                                                            secondary={
                                                                <React.Fragment>
                                                                    <a href={entityProfileSelector.linkProfileFacebook || ''} target={'_blank'}>Facebook</a>
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                </Grid>
                                            </Grid>
                                        </List>
                                    </Box>
                                </Paper>

                                <ListOffersProfile listOffers={entitiesUserOffersSelector} loading={loadingEntitiesUserOffersSelector} />
                            </div>
                        </Slide>
                    </Grid>
                </Grid>
            </Container>
            {renderDialogAddMessage()}
        </Box>
    )
}
