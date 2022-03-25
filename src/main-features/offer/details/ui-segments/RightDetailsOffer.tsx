import * as React from 'react';
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
import {FacebookShareButton} from 'react-share';
import {IOffer} from "../../../../shared/model/offer.model";
import {IUser} from "../../../../shared/model/user.model";
import {getBaseImageUrl, getFullnameUser, getUserAvatar} from "../../../../shared/utils/utils-functions";
import {LazyImage} from "../../../../shared/pages/lazy-image";
import {ALL_APP_ROUTES} from "../../../../core/config/all-app-routes";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import {TransitionModal} from "../../../../shared/pages/transition-modal";

export default function RightDetailsOffer({offerEntity, parentCallback, currentUser, myFavoriteUser}:
                                              {
                                                  offerEntity: IOffer | undefined,
                                                  parentCallback: any,
                                                  currentUser: IUser,
                                                  myFavoriteUser: boolean
                                              }) {
    const history = useHistory();

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
                    Title
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Add this user to your favorite list
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFavoriteModal}>
                        Cancel
                    </Button>
                    <Button onClick={handleAddFavoriteModal}>
                        Favorite
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return (
        <Grid item xs={12} sm={12}>
            <Card>
                <Typography paragraph sx={{m: 2}}>
                    A propos du vendeur
                </Typography>
                <ListItemButton  onClick={() => redirectToPorfile(offerEntity?.user?.id)} sx={{display: 'block'}}>
                    <CardHeader
                        avatar={
                            offerEntity ? (
                                <Avatar
                                    aria-label="recipe"
                                    alt={offerEntity.user?.imageUrl}
                                    src={getUserAvatar(offerEntity.user?.id, offerEntity.user?.imageUrl, offerEntity.user?.sourceRegister)}
                                    sx={{border: '1px solid #b9b9b9'}}
                                ></Avatar>
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
                    <FacebookShareButton
                        url="https://github.com/nygardk/react-share/blob/master/demo/Demo.tsx"
                        quote="fsdf"
                        style={{color: '#fff'}}
                    >
                        <ShareIcon/>
                    </FacebookShareButton>
                    <IconButton sx={{marginLeft: 'auto', color: '#fff'}} onClick={handleExpandClick}>
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>

                <Grid container item sx={{mt: 3}}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{'& > :not(style)': {m: 1}}}>
                            <Typography paragraph className="text-center">
                                Envoyer un message
                            </Typography>
                            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField id="input-with-sx" label="Name" variant="standard" fullWidth/>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                <EmailIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField id="input-with-sx" label="Email" variant="standard" fullWidth/>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                <MessageIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                <TextField id="input-with-sx" label="Message" variant="standard" fullWidth multiline
                                           rows={4}/>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                <Button variant="outlined" size="small" fullWidth sx={{mt: 2, mb: 2}} color="neutral">
                                    Envoyer
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{p: 2, borderLeft: '1px solid #cfcbcb;'}}>
                        <Typography paragraph className="text-center">
                            Contacter par
                        </Typography>

                        <Button variant="outlined" startIcon={<FacebookIcon/>} fullWidth sx={{mt: 3}}>
                            Facebook
                        </Button>

                        <Button variant="outlined" startIcon={<PhoneIcon/>} fullWidth sx={{mt: 3}}>
                            Afficher le numéro
                        </Button>

                        <Button variant="outlined" startIcon={<PhoneIcon/>} fullWidth sx={{mt: 3}}>
                            Envoyer un email
                        </Button>
                    </Grid>
                </Grid>
            </Card>

            <Grid container item spacing={2} sx={{mt: 1}}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Découvrir le quartier
                            </Typography>
                            <div style={{maxHeight: 400, marginTop: 30}}>
                                <LazyImage
                                    className="img-fluid"
                                    src={`${getBaseImageUrl('/assets/images/offer/details-offer/desktop-map-neighbourhood.ext.svg')}`}
                                    alt="desktop-map-neighbourhood"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Découvrir le quartier
                            </Typography>
                            <div style={{maxHeight: 400, marginTop: 30}}>
                                <LazyImage
                                    className="img-fluid"
                                    src={`${getBaseImageUrl('/assets/images/offer/details-offer/desktop-time-of-travel-address.ext.svg')}`}
                                    alt="desktop-time-of-travel-address"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div>{renderDialogFavoriteUser()}</div>
        </Grid>
    );
}
