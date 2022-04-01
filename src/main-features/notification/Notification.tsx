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
    setIsReadNotifications
} from '../../shared/reducers/notification.reducer';
import {INotification} from "../../shared/model/notification.model";
import Alert from "@mui/material/Alert/Alert";
import {useTranslation} from "react-i18next";
import {ConvertReactTimeAgo} from "../../shared/pages/react-time-ago";
import {ModuleNotification} from "../../shared/enums/module-notification";
import {AllAppConfig} from "../../core/config/all-config";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import RefreshIcon from '@mui/icons-material/Refresh';

export interface INotificationProps extends StateProps, DispatchProps {}

export const Notification = (props: INotificationProps) => {

    const [activePage, setActivePage] = React.useState(-1);


    let tmpListNotSee : INotification[] = [];
    const { t } = useTranslation();
    const history = useHistory();

    const {loadingNotificationss,
        listNotifications,
        getEntitiesNotification } = props;

    React.useEffect(() => {
        if(listNotifications.length===0){
            setActivePage(0);
        }
    }, []);


    React.useEffect(() => {
        if(activePage>=0){
            getEntitiesNotification(activePage, AllAppConfig.NOTIFICATIONS_PER_PAGE, '');
        }
    }, [activePage]);


    React.useEffect(() => {
        if(listNotifications && listNotifications.length>0){
            for (let i = 0; i < listNotifications.length; i++) {
                if(!listNotifications[i].isRead){
                    tmpListNotSee.push({
                        id: listNotifications[i].id
                    });
                }
            }
            if(tmpListNotSee.length>0){
                props.setIsReadNotifications(tmpListNotSee);
            }
        }
    }, [listNotifications])

    const redirect = (notification: INotification) => {
        if(notification.module===ModuleNotification.COMMENT_OFFER_NOTIFICATION){
            console.log(notification);
            setTimeout(() => {
                history.push(ALL_APP_ROUTES.DETAILS_OFFER + '/' + notification?.offer?.id);
            }, 300);
        }
    }

    const loadMore = () => {
        setActivePage(activePage+1);
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

                    <List>
                        {listNotifications.map((notification: INotification, index: number) => (
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

                    {loadingNotificationss ? <LoadingNotification /> : null}

                    {
                        !loadingNotificationss && props.totalItems===0 ? <Alert severity="warning">{t('notification.not_found_result')}</Alert> : null
                    }

                    {
                        props.totalItems > listNotifications.length ? <Box sx={{ paddingTop: 5, textAlign: 'center' }}>
                            <Button color="neutral" variant="contained" startIcon={<RefreshIcon />} onClick={loadMore}>{t('common.label_load_more')}...</Button>
                        </Box> : null
                    }
                </Grid>
            </Grid>

        </Container>
    )
}

const mapStateToProps = ({ notification }: IRootState) => ({
    loadingNotificationss: notification.loadingEntities,
    listNotifications: notification.entities,
    totalItems: notification.totalItems
});

const mapDispatchToProps = {
    getEntitiesNotification,
    setIsReadNotifications
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Notification);