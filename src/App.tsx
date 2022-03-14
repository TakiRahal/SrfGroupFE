import React, {useEffect} from 'react';
import './core/config/dayjs';
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Header from "./shared/layout/header/header";
import Footer from "./shared/layout/footer/footer";
import AllRoutes from "./shared/routes/all-routes";
import {ThemeApp} from "./shared/theme/ThemeApp";
import Zoom from "@mui/material/Zoom/Zoom";
import Box from "@mui/material/Box/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger/useScrollTrigger";
import Fab from "@mui/material/Fab/Fab";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './i18n/i18n';
import {useTranslation} from "react-i18next";
import {
    BrowserRouter as Router, Link, useHistory
} from "react-router-dom";
import {LoadingBackdrop} from "./shared/pages/loading-backdrop";
import {IRootState} from "./shared/reducers";
import {connect} from "react-redux";
import { hot } from 'react-hot-loader';
import {logout} from "./shared/reducers/user-reducer";
import Drawer from "@mui/material/Drawer/Drawer";
import ListItem from "@mui/material/ListItem/ListItem";
import List from "@mui/material/List/List";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import Avatar from "@mui/material/Avatar/Avatar";
import {getUserAvatar} from "./shared/utils/utils-functions";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Typography from "@mui/material/Typography/Typography";
import Divider from "@mui/material/Divider/Divider";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import MailIcon from '@mui/icons-material/Mail';
import Logout from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PostAddIcon from '@mui/icons-material/PostAdd';
import {AllAppConfig} from "./core/config/all-config";
import {ALL_APP_ROUTES} from "./core/config/all-app-routes";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from "@mui/material/Button/Button";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import {StarBorder} from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { getEntities as getEntitiesAddresses } from '../src/shared/reducers/address.reducer';
import { getPublicEntities as getCategories } from '../src/shared/reducers/category.reducer';

// import OneSignal from 'react-onesignal';
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));


function ScrollToTop() {
    const history = useHistory();
    useEffect(() => {
        const unlisten = history.listen((location, action) => {
            if (action !== 'POP') {
                window.scrollTo(0, 0);
            }
        });
        return () => unlisten();
    }, []);
    return null;
}

function ScrollTop(props: any) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: any) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, left: 16, zIndex: 9 }}>
                {children}
            </Box>
        </Zoom>
    );
}

export interface IAppProps extends StateProps, DispatchProps {}

function App(props: IAppProps) {
    const [openAnchorDrawer, setOpenAnchorDrawer] = React.useState(false);
    const [openAnchorDrawerRight, setOpenAnchorDrawerRight] = React.useState(false);
    const [openSubMenuSupport, setOpenSubMenuSupport] = React.useState(false);
    const [languagesAnchorEl, setLanguagesAnchorEl] = React.useState(null);
    const isLanguagesMenuOpen = Boolean(languagesAnchorEl);

    const { t, i18n } = useTranslation();

    const { currentUser, getEntitiesAddresses, getCategories } = props;

    useEffect(() => {

        // Init OneSignal Platform
        // OneSignal.init({
        //     appId: AllAppConfig.APP_ID_ONESIGNAL
        // });

        getEntitiesAddresses(0, 40, '');
        getCategories(0, 1, '');
    }, [])

    const handleLogout = (event: any) => {
        props.logout();
    }

    const handleDrawerToggleRight = (isOpen: boolean) => {
        setOpenAnchorDrawerRight(isOpen);
    };

    const getFullName = () => {
        return currentUser?.firstName + ' ' + currentUser?.lastName;
    };

    const handleDrawerToggle = (isOpen: boolean) => {
        setOpenAnchorDrawer(isOpen);
    };

    const handleLAnguagesMenuOpen = (event: any) => {
        setLanguagesAnchorEl(event.currentTarget);
    };

    const handleClickSupport = () => {
        setOpenSubMenuSupport(!openSubMenuSupport);
    };

    const logoutMenuRight = () => {
        handleDrawerToggleRight(false)
        props.logout();
    }

    const listMenuMobile = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListItem button component={Link} to={ALL_APP_ROUTES.HOME} onClick={() => handleDrawerToggle(false)}>
                    <ListItemIcon>
                        <Avatar alt="Logo" src={AllAppConfig.DEFAULT_AVATAR} sx={{ width: 30, height: 30, mr: 0.6 }} />
                    </ListItemIcon>
                    <ListItemText primary="SRF" />
                </ListItem>

                <ListItem button onClick={handleLAnguagesMenuOpen}>
                    <Button variant="outlined" color="neutral" startIcon={<LanguageIcon />} endIcon={<ExpandMore />} size="small">
                        local
                    </Button>
                </ListItem>
                <Divider />

                <ListItem button component={Link} to={ALL_APP_ROUTES.HOME} onClick={() => handleDrawerToggle(false)}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem button component={Link} to={ALL_APP_ROUTES.SEARCH} onClick={() => handleDrawerToggle(false)}>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Recherche" />
                </ListItem>

                <ListItemButton onClick={handleClickSupport}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Support" />
                    {openSubMenuSupport ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSubMenuSupport} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to={ALL_APP_ROUTES.SUPPORT.CONTACT_US} onClick={() => handleDrawerToggle(false)}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Contactez-nous" />
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 4 }} component={Link} to={ALL_APP_ROUTES.SUPPORT.ABOUT_US} onClick={() => handleDrawerToggle(false)}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="À propos" />
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 4 }} component={Link} to={ALL_APP_ROUTES.SUPPORT.FAQ} onClick={() => handleDrawerToggle(false)}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="FAQ" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <PhoneAndroidIcon />
                    </ListItemIcon>
                    <ListItemText primary="App Mobile" />
                </ListItem>

                <ListItem >
                    <FormGroup>
                        <FormControlLabel
                            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                            label="MUI switch"
                        />
                    </FormGroup>
                </ListItem>
            </List>
        </Box>
    );

    const rightMenuMobile = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListItem
                    alignItems="flex-start"
                    button
                    component={Link}
                    to={ALL_APP_ROUTES.ACCOUNT}
                    onClick={() => handleDrawerToggleRight(false)}
                >
                    <ListItemAvatar>
                        <Avatar alt="Avatar" src={getUserAvatar(currentUser?.id, currentUser?.imageUrl, currentUser?.sourceProvider)} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={getFullName()}
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                    {currentUser.email}
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider />

                <ListItem button component={Link} to={ALL_APP_ROUTES.CHAT.LIST} onClick={() => handleDrawerToggleRight(false)}>
                    <ListItemIcon>
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                </ListItem>

                <ListItem button component={Link} to={ALL_APP_ROUTES.OFFER.MY_OFFERS} onClick={() => handleDrawerToggleRight(false)}>
                    <ListItemIcon>
                        <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="My offers" />
                </ListItem>

                <ListItem button component={Link} to={ALL_APP_ROUTES.FAVORITE.USER} onClick={() => handleDrawerToggleRight(false)}>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary="My favorite users" />
                </ListItem>

                <ListItem button component={Link} to={ALL_APP_ROUTES.NOTIFICATION.LIST} onClick={() => handleDrawerToggleRight(false)}>
                    <ListItemIcon>
                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Notifications" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => logoutMenuRight()}>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Router>

            <ScrollToTop />
            <ThemeProvider theme={ThemeApp}>
                <CssBaseline/>
                <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
                <LoadingBackdrop />

                <React.Fragment>
                    <Drawer anchor="left" open={openAnchorDrawer} onClose={() => handleDrawerToggle(false)}>
                        {listMenuMobile()}
                    </Drawer>
                </React.Fragment>
                <React.Fragment>
                    <Drawer anchor="right" open={openAnchorDrawerRight} onClose={() => handleDrawerToggleRight(false)}>
                        {rightMenuMobile()}
                    </Drawer>
                </React.Fragment>

                <div id="back-to-top-anchor"></div>
                <Header isAuthenticated={props.isAuthenticated}
                        currentUser={currentUser}
                        parentCallbackLogout={(event: any) => handleLogout(event)}
                        parentCallbackRightMenuMobile={(event: any) => handleDrawerToggleRight(event)}
                        parentCallbackMenuMobile={(event: any) => handleDrawerToggle(event)}/>
                <main
                    style={{
                        background: '#F2F3F7',
                        paddingBottom: 50,
                        position: 'relative',
                    }} >
                    <AllRoutes {...props} />
                    <ScrollTop {...props}>
                        <Fab sx={{ backgroundColor: '#3f3f40', color: '#fff' }} size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollTop>
                </main>
                <h1>{t('title')}</h1>
                <Footer />
            </ThemeProvider>
        </Router>
    );
}

const mapStateToProps = ({user, address}: IRootState) => ({
    isAuthenticated: user.isAuthenticated,
    currentUser: user.currentUser,

    loadingAddress: address.loadingEntities,
    entitiesAddress: address.entities
    // isAdmin: hasAnyAuthority(authentication.account.authorities, [AUTHORITIES.ADMIN]),
    // ribbonEnv: applicationProfile.ribbonEnv,
    // isInProduction: applicationProfile.inProduction,
    // isOpenAPIEnabled: applicationProfile.isOpenAPIEnabled,
    // account: authentication.account,
    // numberNotReadNotifications: null,
});

const mapDispatchToProps = {
    logout,
    getEntitiesAddresses,
    getCategories
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));

// export default App;
