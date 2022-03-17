import React from 'react';
import {IFavoriteUser} from "../../../../shared/model/favorite.model";
import Grid from "@mui/material/Grid/Grid";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from '@mui/material/CardMedia';
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import IconButton from "@mui/material/IconButton/IconButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import {getFullnameUser, getUserAvatar} from "../../../../shared/utils/utils-functions";
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from "@mui/material/Dialog/Dialog";
import {TransitionProps} from "@mui/material/transitions";
import Slide from "@mui/material/Slide/Slide";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import Button from "@mui/material/Button/Button";
import {ALL_APP_ROUTES} from "../../../../core/config/all-app-routes";
import {useHistory} from "react-router";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ListFavoriteUsers({ favorite, parentCallback }: { favorite: IFavoriteUser, parentCallback: Function }) {
    const [openFavoriteModal, setOpenFavoriteModal] = React.useState(false);
    const history = useHistory();

    const { favoriteUser, id } = favorite;

    const handleClickOpenFavoriteModal = (event: any) => {
        event.stopPropagation();
        setOpenFavoriteModal(true);
    };

    const handleCloseFavoriteModal = () => {
        setOpenFavoriteModal(false);
    };

    const redirectToPorfile = (userId: number) => {
        history.push(ALL_APP_ROUTES.PROFILE + '/' + userId);
    };

    const disFavoriteHandleClick = () => {
        setOpenFavoriteModal(false);
        parentCallback(id);
    }


    const renderDialogDisFavoriteUser = () => {
        return (
            <Dialog
                open={openFavoriteModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseFavoriteModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    Title
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Description
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFavoriteModal}>
                        Cancel
                    </Button>
                    <Button onClick={disFavoriteHandleClick} color="error">
                        DisFavorite
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" onClick={() => redirectToPorfile(favoriteUser?.id)}>
                <Card sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image={getUserAvatar(favoriteUser?.id, favoriteUser?.imageUrl, favoriteUser?.sourceRegister)}
                        alt='User avatar'
                    />
                    <CardContent sx={{ flex: 1 }}>
                        <List dense={false}>
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={event => handleClickOpenFavoriteModal(event)}>
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary={getFullnameUser(favoriteUser)}
                                    secondary={favoriteUser?.email}
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </CardActionArea>
            <div>{renderDialogDisFavoriteUser()}</div>
        </Grid>

    );
}