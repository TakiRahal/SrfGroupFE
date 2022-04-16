import React from 'react';
import {connect} from "react-redux";
import {IRootState} from "../../shared/reducers";
import Container from "@mui/material/Container/Container";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link, useHistory} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
import LoadingNotification from "./ui-segments/NotificationLoading";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import Avatar from "@mui/material/Avatar/Avatar";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Divider from "@mui/material/Divider/Divider";
import List from "@mui/material/List/List";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {
    getEntities as getEntitiesNotification,
    setIsReadNotifications,
    reset as resetNotification
} from '../../shared/reducers/notification.reducer';
import {INotification} from "../../shared/model/notification.model";
import Alert from "@mui/material/Alert/Alert";
import {useTranslation} from "react-i18next";
import {ConvertReactTimeAgo} from "../../shared/pages/react-time-ago";
import {ModuleNotification} from "../../shared/enums/module-notification";
import {AllAppConfig} from "../../core/config/all-config";
import InfiniteScroll from 'react-infinite-scroller';
import {resetNbeNotificationsNotRead} from "../../shared/reducers/user-reducer";

export interface INotificationProps extends StateProps, DispatchProps {}

export const Notification = (props: INotificationProps) => {

    const [activePage, setActivePage] = React.useState(-1);


    let tmpListNotSee : INotification[] = [];
    const { t } = useTranslation();
    const history = useHistory();

    const resetAll = () => {
        props.resetNotification();
        setActivePage(0);
    };

    React.useEffect(() => {
        resetAll();
    }, []);

    React.useEffect(() => {
        if(activePage>=0){
            props.getEntitiesNotification(activePage, AllAppConfig.NOTIFICATIONS_PER_PAGE, '');
        }
    }, [activePage]);


    React.useEffect(() => {
        if(props.listNotifications && props.listNotifications.length>0){
            for (let i = 0; i < props.listNotifications.length; i++) {
                if(!props.listNotifications[i].isRead){
                    tmpListNotSee.push({
                        id: props.listNotifications[i].id
                    });
                }
            }
            if(tmpListNotSee.length>0){
                props.setIsReadNotifications(tmpListNotSee);
            }
        }
    }, [props.listNotifications])

    React.useEffect(() => {
        if(props.addSuccessIsRead){
            props.resetNbeNotificationsNotRead();
        }
    }, [props.addSuccessIsRead]);

    const loadMore = () => {
        setActivePage(activePage+1);
    }

    const redirect = (notification: INotification) => {
        if(notification.module===ModuleNotification.COMMENT_OFFER_NOTIFICATION){
            setTimeout(() => {
                history.push(ALL_APP_ROUTES.DETAILS_OFFER + '/' + notification?.offer?.id);
            }, 300);
        }
    }

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
                            {t('notification.title_page')}
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

                    <InfiniteScroll
                        pageStart={activePage}
                        loadMore={loadMore}
                        hasMore={props.totalPages-1 > activePage}
                        loader={<div className="loader" key={0}><LoadingNotification/></div>}
                        threshold={0}
                        initialLoad={false}
                    >
                        <List>
                            {props.listNotifications.map((notification: INotification, index: number) => (
                                <React.Fragment key={`notification-${notification.id}-${index}`}>
                                    <ListItem button sx={{
                                        bgcolor: notification.isRead ? '' : 'background.paper',
                                    }} onClick={() => redirect(notification)}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <CircleNotificationsIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={<ConvertReactTimeAgo convertDate={notification.dateCreated} />}
                                                      secondary={notification.content} />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </React.Fragment>
                            ))}
                        </List>
                    </InfiniteScroll>

                </Grid>
            </Grid>

        </Container>
    )
}

const mapStateToProps = ({ notification }: IRootState) => ({
    loadingNotificationss: notification.loadingEntities,
    listNotifications: notification.entities,
    totalItems: notification.totalItems,
    totalPages: notification.totalPages,
    addSuccessIsRead: notification.addSuccessIsRead
});

const mapDispatchToProps = {
    getEntitiesNotification,
    setIsReadNotifications,
    resetNbeNotificationsNotRead,
    resetNotification
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Notification);