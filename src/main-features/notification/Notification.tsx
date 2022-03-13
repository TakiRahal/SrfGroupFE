import React from 'react';
import {connect} from "react-redux";
import {IRootState} from "../../shared/reducers";
import Container from "@mui/material/Container/Container";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
import LoadingNotification from "./ui-segments/NotificationLoading";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import Avatar from "@mui/material/Avatar/Avatar";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Divider from "@mui/material/Divider/Divider";
import List from "@mui/material/List/List";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {getEntities as getEntitiesNotification} from '../../shared/reducers/notification.reducer';
import {INotification} from "../../shared/model/notification.model";

export interface INotificationProps extends StateProps, DispatchProps {}

export const Notification = (props: INotificationProps) => {

    const {loadingNotificationss,
        listNotifications,
        getEntitiesNotification } = props;

    React.useEffect(() => {
        getEntitiesNotification(0, 10, 'id,asc');
    }, []);

    return(
        <Container>
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
                        <Typography color="text.primary">
                            Notifications
                        </Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={6}
                style={{
                    paddingTop: 50,
                }}
            >
                <Grid item xs={12} sm={6} md={3}></Grid>

                <Grid item xs={12} sm={6} md={6}>
                    {loadingNotificationss ? (
                        <LoadingNotification />
                    ) : listNotifications && listNotifications.length > 0 ? (
                        <List
                            sx={{
                                bgcolor: 'background.paper',
                            }}
                        >
                            {listNotifications.map((notification: INotification, index: number) => (
                                <React.Fragment key={`notification-${notification.id}`}>
                                    <ListItem button>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <CircleNotificationsIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={notification.dateCreated} secondary={notification.content} />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            ))}
                        </List>
                    ) : (
                        <div className="alert alert-warning">
                            No Notifications found
                        </div>
                    )}
                </Grid>
            </Grid>

        </Container>
    )
}

const mapStateToProps = ({ notification }: IRootState) => ({
    loadingNotificationss: notification.loadingEntities,
    listNotifications: notification.entities
});

const mapDispatchToProps = {
    getEntitiesNotification
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Notification);