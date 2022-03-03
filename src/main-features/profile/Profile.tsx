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
import {getUserAvatar} from "../../shared/utils/utils-functions";
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

export interface IProfileProps extends StateProps, DispatchProps{}

export const Profile = (props: IProfileProps) => {

    const [startAnimation, setStartAnimation] = React.useState(false);

    const {id} = useParams<{ id: string }>();

    const {profileLoading,
        profile,
        getProfile,
        currentUser,
        isAuthenticated} = props;

    React.useEffect(() => {
        setStartAnimation(true);
    }, []);

    React.useEffect(() => {
        console.log('props.match.params ', id);
        if(id){
            getProfile(Number(id));
        }
    }, [id]);

    const handleClickOpenAddMessageModal = () => {
        // formik.setFieldValue('content', '');
        // setOpenAddMessageModal(true);
    };

    return(
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
                            Profile
                        </Link>
                        <Typography color="text.primary">
                            {profile?.firstName}
                            {profile?.lastName}
                        </Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            <Grid container spacing={4} style={{
                paddingTop: 50,
            }}>
                <Grid item xs={12} sm={3} className="text-center">
                    <Slide direction="left" in={startAnimation}>
                        <div>
                            <Paper elevation={3} sx={{ p: 1 }}>
                                <Avatar
                                    alt={profile.imageUrl}
                                    src={getUserAvatar(profile.id, profile.imageUrl, profile?.sourceProvider)}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        marginBottom: 2,
                                        mt: 2,
                                    }}
                                />
                                <h4>
                                    {profileLoading ? (
                                        <Skeleton animation="wave" height={30} />
                                    ) : (
                                        <React.Fragment>
                                            {profile.firstName ? profile.firstName : ''}
                                            {profile.lastName ? ' ' + profile.lastName : ''}
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
                                        onClick={handleClickOpenAddMessageModal}
                                        disabled={currentUser.id === profile.id || !isAuthenticated}
                                    >
                                        Send a message
                                    </Button>
                                </Toolbar>
                            </Paper>

                            <div className="card mt-3">
                                <div className="card-header">Partager ce profile</div>
                                <div className="card-body">
                                    <Button variant="contained" startIcon={<FacebookIcon />} size="small" sx={{ mr: 1 }}>
                                        Facebook
                                    </Button>
                                    <Button variant="contained" startIcon={<TwitterIcon />} size="small" color="secondary">
                                        Twitter
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Slide direction="right" in={startAnimation}>
                        <div>
                            <Paper elevation={3} sx={{ p: 2 }}>
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
                                                <ListItem alignItems="flex-start">
                                                    <ListItemText
                                                        primary="Phone number"
                                                        secondary={
                                                            <React.Fragment>
                                                                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                                                    {/*Ali Connors*/}
                                                                </Typography>
                                                                {'12345678'}
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItem>
                                            </Grid>
                                        </Grid>
                                    </List>
                                </Box>
                            </Paper>

                            {/*<ListOffersProfile offerList={offerList} />*/}
                        </div>
                    </Slide>
                </Grid>
            </Grid>
        </Container>
    )
}

const mapStateToProps = ({user}: IRootState) => ({
    profileLoading: user.profileLoading,
    profile: user.profileEntity,

    isAuthenticated: user.isAuthenticated,
    currentUser: user.currentUser
});

const mapDispatchToProps = {
    getProfile
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);