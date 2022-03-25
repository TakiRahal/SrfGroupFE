import React from 'react';
import {IRootState} from "../../shared/reducers";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {getProfile} from "../../shared/reducers/user-reducer";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import Typography from "@mui/material/Typography/Typography";
import Slide from "@mui/material/Slide/Slide";
import Paper from "@mui/material/Paper/Paper";
import Avatar from "@mui/material/Avatar/Avatar";
import {convertDateTimeToServer, getFullnameUser, getUserAvatar} from "../../shared/utils/utils-functions";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import Button from "@mui/material/Button/Button";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from "@mui/material/Box/Box";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import IconButton from "@mui/material/IconButton/IconButton";
import {getPublicEntitiesForUser} from "../../shared/reducers/offer.reducer";
import {useFormik} from "formik";
import {initialValuesAddMessage, validationSchemaAddMessage} from "./validation/init-value-add-message";
import {createConversation} from "../../shared/reducers/conversation.reducer";
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
import {ListOffersProfile} from "./ui-segments/ListOffersProfile";
import {TransitionModal} from "../../shared/pages/transition-modal";
import {useTranslation} from "react-i18next";

const initialValues = initialValuesAddMessage;

export interface IProfileProps extends StateProps, DispatchProps{}

export const Profile = (props: IProfileProps) => {

    const [startAnimation, setStartAnimation] = React.useState(false);
    const [openAddMessageModal, setOpenAddMessageModal] = React.useState(false);

    const {id} = useParams<{ id: string }>();

    const { t } = useTranslation();

    const {
        profileLoading,
        profile,
        getProfile,
        currentUser,
        isAuthenticated,
        getPublicEntitiesForUser,
        listOffersForUser,
        loadingEntitiesForUser,
        loadingConversation,
        createConversation
    } = props;

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaAddMessage,
        onSubmit: values => {
            if (currentUser.id !== profile.id && isAuthenticated) {
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
                    id: profile.id,
                    email: profile.email,
                },
            },
        };
        createConversation(entity);
        setOpenAddMessageModal(false);
    };

    React.useEffect(() => {
        if( profile){
            setTimeout(() => {
                setStartAnimation(true);
            }, 100)
        }
    }, [profile]);

    React.useEffect(() => {
        if(id){
            getProfile(Number(id));
            getPublicEntitiesForUser(1, 10, '', Number(id));
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
                            {t('profile.title_send_message')}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                {getFullnameUser(currentUser)}
                            </DialogContentText>
                            <FormControl fullWidth sx={{ mt: 3, minWidth: {sx: 'auto', md: 400} }} error={formik.touched.content && Boolean(formik.errors.content)}>
                                <InputLabel htmlFor="outlined-adornment-amount">
                                    {t('profile.write_your_message')}
                                </InputLabel>
                                <OutlinedInput
                                    id="content"
                                    name="content"
                                    label={t('profile.write_your_message')}
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
                                {t('common.label_cancel')}
                            </Button>
                            <LoadingButton loading={loadingConversation} type="submit" color="success">
                                {t('common.label_send')}
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
                                {t('profile.title_page_profile')}
                            </Link>
                            <Typography color="text.primary">
                                {getFullnameUser(profile)}
                            </Typography>
                        </Breadcrumbs>
                    </Grid>
                </Grid>

                <Grid container spacing={4} style={{
                    paddingTop: 50,
                }}>
                    <Grid item xs={12} sm={3} sx={{ textAlign: 'center' }}>
                        <Slide direction="left" in={startAnimation}>
                            <div>
                                <Paper elevation={3} sx={{ p: 1 }}>
                                    <Avatar
                                        alt={profile.imageUrl}
                                        src={getUserAvatar(profile.id, profile.imageUrl, profile?.sourceRegister)}
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            marginBottom: 2,
                                            mt: 2,
                                            border: '1px solid #b9b9b9'
                                        }}
                                    />
                                    <h4>
                                        {profileLoading ? (
                                            <Skeleton animation="wave" height={30} />
                                        ) : (
                                            <React.Fragment>
                                                {getFullnameUser(profile)}
                                            </React.Fragment>
                                        )}
                                    </h4>
                                    <p>{profileLoading ? <Skeleton animation="wave" height={30} /> : profile.email}</p>
                                    <Toolbar sx={{ justifyContent: 'center' }}>
                                        <Button
                                            variant="outlined"
                                            startIcon={<PhoneIcon />}
                                            color="neutral"
                                            size="small"
                                            onClick={() => handleClickOpenAddMessageModal()}
                                            disabled={currentUser.id === profile.id || !isAuthenticated}
                                        >
                                            Send a message
                                        </Button>
                                    </Toolbar>
                                </Paper>

                            </div>
                        </Slide>
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
                                                                    {profileLoading ? <Skeleton animation="wave" height={30} /> : profile.firstName}
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
                                                                    {profileLoading ? <Skeleton animation="wave" height={30} /> : profile.lastName}
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
                                                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                                                        {/*Ali Connors*/}
                                                                    </Typography>
                                                                    {profileLoading ? <Skeleton animation="wave" height={30} /> : profile.email}
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
                                                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                                                        {/*Ali Connors*/}
                                                                    </Typography>
                                                                    {profileLoading ? <Skeleton animation="wave" height={30} /> : profile.phone}
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
                                                                    <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                                                        {/*Ali Connors*/}
                                                                    </Typography>
                                                                    {'Sousse'}
                                                                </React.Fragment>
                                                            }
                                                        />
                                                    </ListItem>
                                                </Grid>
                                                <Grid item xs={12} md={6}>

                                                </Grid>
                                            </Grid>
                                        </List>
                                    </Box>
                                </Paper>

                                <ListOffersProfile listOffers={listOffersForUser} loading={loadingEntitiesForUser} />
                            </div>
                        </Slide>
                    </Grid>
                </Grid>
            </Container>
            {renderDialogAddMessage()}
        </Box>
    )
}

const mapStateToProps = ({user, offer, conversation}: IRootState) => ({
    profileLoading: user.profileLoading,
    profile: user.profileEntity,

    isAuthenticated: user.isAuthenticated,
    currentUser: user.currentUser,

    listOffersForUser: offer.entitiesForUser,
    loadingEntitiesForUser: offer.loadingEntitiesForUser,

    loadingConversation: conversation.loadingEntity,
    entityConversation: conversation.entity,
    updateSuccessConversation: conversation.addSuccess,
});

const mapDispatchToProps = {
    getProfile,
    getPublicEntitiesForUser,
    createConversation
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);