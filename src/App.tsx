import React, {useEffect} from 'react';
import './core/config/dayjs';
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Header from "./shared/layout/header/header";
import Footer from "./shared/layout/footer/footer";
import AllRoutes from "./shared/routes/all-routes";
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
    Link, useLocation,
    useNavigate
} from 'react-router-dom';
import {IRootState} from "./shared/reducers";
import {connect} from "react-redux";
import { hot } from 'react-hot-loader';
import {
    getNumberOfMessagesNotSee,
    getNumberOfNotificationsNotSee,
    loginGooglePlusOneTap,
    logout
} from "./shared/reducers/user-reducer";
import Drawer from "@mui/material/Drawer/Drawer";
import ListItem from "@mui/material/ListItem/ListItem";
import List from "@mui/material/List/List";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import Avatar from "@mui/material/Avatar/Avatar";
import {getFullnameUser, getUserAvatar} from "./shared/utils/utils-functions";
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
import StarBorder from "@mui/icons-material/StarBorder";
import InfoIcon from '@mui/icons-material/Info';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Menu from '@mui/material/Menu/Menu';
import { getEntities as getEntitiesAddresses } from '../src/shared/reducers/address.reducer';
import { getPublicEntities as getCategories } from '../src/shared/reducers/category.reducer';
import {reset as resetNotification} from '../src/shared/reducers/notification.reducer';
import {reset as resetOffer} from '../src/shared/reducers/offer.reducer';
import {reset as resetConversations} from '../src/shared/reducers/conversation.reducer';
import {reset as resetMessages} from '../src/shared/reducers/message.reducer';
import {getEntities as getEntitiesTopHomeSlidesImage} from '../src/shared/reducers/top-home-slides-image';
import {getEntity as getEntityPostHomeFeature} from '../src/shared/reducers/post-home-feature.reducer';

import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import GoogleOneTapLogin from 'react-google-one-tap-login';
import {StorageService} from "./shared/services/storage.service";
import {languages, locales, setLocale} from "./shared/reducers/locale.reducer";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import {initGoogleAnalytics, loadScriptGoogleAnalytics, trackPagesGA} from "./shared/providers/google-anaylitics";
import {createEntity as createEntityNewsLetter, INewsLetter} from "./shared/reducers/news-letter.reducer";
import createTheme from "@mui/material/styles/createTheme";
import {MaterialUISwitch} from "./shared/pages/material-ui-switch";
import {IGooglePlusOneTap} from "./shared/model/user.model";
import {SourceProvider} from "./shared/enums/source-provider";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
    dispatchSuccessSession,
    getWebsocketListConnectedUsers, removeEmailFromListConnectedUsers
} from "./shared/reducers/web-socket.reducer";
import CookieConsent from "react-cookie-consent";
import {loadScriptFacebook} from "./shared/providers/facebook.provider";
import {oneSignalProviders} from "./shared/providers/onesignal.provider";



function ScrollToTopRouters() {
    const { pathname } = useLocation();

    useEffect(() => {
        window?.scrollTo(0, 0);
    }, [pathname]);

    return null;
    // const history = useHistory();
    // const navigate = useNavigate();
    // React.useEffect(() => {
    //     let prevLocation: any;
    //     const unlisten = navigate.listen((location, action) => {
    //
    //         if(location.pathname !== prevLocation?.pathname){
    //
    //             // Add track page Google Analytics
    //             trackPagesGA(location.pathname, location.pathname).then((result: boolean) => {
    //                 // console.log('Success track pages');
    //             }, (error: boolean) => {console.log('Error track pages');})
    //         }
    //         prevLocation = location;
    //
    //         if (action !== 'POP') {
    //             window.scrollTo(0, 0);
    //         }
    //     });
    //     return () => unlisten();
    // }, []);
    // return null;
}

function ScrollTop(props: any) {
    const { children, window } = props;
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
    const [darkMode, setDarkMode] = React.useState<'light' | 'dark'>('light');

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();


    // const isDark = false;
    const ThemeApp = createTheme({
      palette: {
        mode: darkMode==='dark' ? 'dark' : 'light',
        neutral: {
          main: 'rgb(63 63 64)',
          contrastText: '#fff',
        },
      },
    });

    const toggleDarkMode = (event: any, checked: boolean) => {
        setDarkMode(checked ? 'light' : 'dark' );
    };

    const { currentUser, getEntitiesAddresses, getCategories } = props;

    React.useEffect(() => {

        if(process.env.NODE_ENV === 'production'){
            // OneSignal Platform
            oneSignalProviders();
        }

        // Init Google Analytics
        loadScriptGoogleAnalytics().then((resultLoad: boolean) => {
            if(resultLoad){
                initGoogleAnalytics().then((result: boolean) => {
                    console.log('Success init Google Analytics');
                }, (errorInit: boolean) => {console.log('Error init Google Analytics ', errorInit);})
            }
        }, (errorLoad: boolean) => {console.log('Error to load script Google Analytics ', errorLoad);})


        // Load Facebook SDK
        loadScriptFacebook().then((resultLoad: boolean) => {
            console.log('Success init Google Facebook');
        }, (errorLoad: boolean) => {console.log('Error to load script Facebook ', errorLoad);})

        // Set Default configs
        i18n.changeLanguage(StorageService.session.get('locale', 'fr'));
        props.setLocale(StorageService.session.get('locale', 'fr'));

        getEntitiesAddresses(0, 40, '');
        getCategories(0, 1, '');
        props.getEntitiesTopHomeSlidesImage();
        props.getEntityPostHomeFeature();

        if(props.isAuthenticated){
            props.dispatchSuccessSession(); // For WebSocket
            props.getNumberOfNotificationsNotSee();
            props.getNumberOfMessagesNotSee();
        }
    }, [])

    // Callback From header and menu mobile
    const handleLogout = () => {
        handleDrawerToggleRight(false);

        props.removeEmailFromListConnectedUsers(props.currentUser.email); // remove user from list
        props.resetNotification();
        props.resetOffer();
        props.resetConversations();
        props.resetMessages();
        props.logout();
        navigate(ALL_APP_ROUTES.HOME);
    }

    const handleDrawerToggleRight = (isOpen: boolean) => {
        setOpenAnchorDrawerRight(isOpen);
    };

    const handleDrawerToggle = (isOpen: boolean) => {
        setOpenAnchorDrawer(isOpen);
    };

    const handleClickSupport = () => {
        setOpenSubMenuSupport(!openSubMenuSupport);
    };

    const listMenuMobile = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListItem button component={Link} to={ALL_APP_ROUTES.HOME} onClick={() => handleDrawerToggle(false)}>
                    <ListItemIcon>
                        <Avatar alt="Logo" src={getUserAvatar(-1)} sx={{ width: 30, height: 30, mr: 0.6 }} />
                    </ListItemIcon>
                    <ListItemText primary="SRF" />
                </ListItem>

                <ListItem button onClick={handleLAnguagesMenuOpen}>
                    <Button variant="outlined" color="neutral" startIcon={<LanguageIcon />} endIcon={<ExpandMore />} size="small">
                        {props.currentLocale ? languages[props.currentLocale].name : undefined}
                    </Button>
                </ListItem>
                <Divider />

                <ListItem button component={Link} to={ALL_APP_ROUTES.HOME} onClick={() => handleDrawerToggle(false)}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('header.link_home')} />
                </ListItem>

                <ListItem button component={Link} to={ALL_APP_ROUTES.OFFER.LIST} onClick={() => handleDrawerToggle(false)}>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('common.label_search')} />
                </ListItem>

                <ListItemButton onClick={handleClickSupport}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('header.link_support.link_label_support')} />
                    {openSubMenuSupport ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSubMenuSupport} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to={ALL_APP_ROUTES.SUPPORT.CONTACT_US} onClick={() => handleDrawerToggle(false)}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={t('header.link_support.link_contact_us')} />
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 4 }} component={Link} to={ALL_APP_ROUTES.SUPPORT.ABOUT_US} onClick={() => handleDrawerToggle(false)}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('header.link_support.link_about')} />
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 4 }} component={Link} to={ALL_APP_ROUTES.SUPPORT.FAQ} onClick={() => handleDrawerToggle(false)}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={t('header.link_support.link_faq')} />
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
                            onChange={toggleDarkMode}
                            label=""
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
                        <Avatar alt="Avatar" src={getUserAvatar(currentUser?.id, currentUser?.imageUrl, currentUser?.sourceProvider)} >{getFullnameUser(currentUser)?.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        className="list-item-text-user"
                        primary={getFullnameUser(currentUser)}
                        secondary={
                            <React.Fragment>
                                <Typography component="span" variant="body2" color="text.primary">
                                    {currentUser.email}
                                </Typography>
                                {
                                    currentUser?.address?.city ? '— '+currentUser?.address?.city : null
                                }
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider />

                <ListItem button component={Link} to={ALL_APP_ROUTES.CART.LIST} onClick={() => handleDrawerToggleRight(false)}>
                    <ListItemIcon>
                        <Badge badgeContent={props.nbeMessagesNotRead > 0 ? props.nbeMessagesNotRead : null} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary={t('header.label_cart')} />
                </ListItem>

                <ListItem button component={Link} to={ALL_APP_ROUTES.CHAT.LIST} onClick={() => handleDrawerToggleRight(false)}>
                    <ListItemIcon>
                        <Badge badgeContent={props.nbeMessagesNotRead > 0 ? props.nbeMessagesNotRead : null} color="error">
                            <MailIcon />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary={t('header.chat')} />
                </ListItem>

                <ListItem button component={Link} to={ALL_APP_ROUTES.OFFER.MY_OFFERS} onClick={() => handleDrawerToggleRight(false)}>
                    <ListItemIcon>
                        <PostAddIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('header.my_offers')} />
                </ListItem>

                <ListItem button component={Link} to={ALL_APP_ROUTES.FAVORITE.USER} onClick={() => handleDrawerToggleRight(false)}>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('header.my_favorite_users')} />
                </ListItem>

                <ListItem button component={Link} to={ALL_APP_ROUTES.NOTIFICATION.LIST} onClick={() => handleDrawerToggleRight(false)}>
                    <ListItemIcon>
                        <Badge badgeContent={props.nbeNotificationsNotRead} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary={t('header.notifications')}/>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => handleLogout()}>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText primary={t('header.logout')} />
                </ListItem>
            </List>
        </Box>
    );


    const handleLocaleChange = (locale: string) => {
        i18n.changeLanguage(locale);
        handleLAnguagesMenuClose();
        props.setLocale(locale);
    };
    const handleLAnguagesMenuClose = () => {
        setLanguagesAnchorEl(null);
    };
    const handleLAnguagesMenuOpen = (event: any) => {
        setLanguagesAnchorEl(event.currentTarget);
    };
    const menuIdLanguages = 'languages-menu-mobile';
    const renderMenuLanguages = (
        <Menu
            anchorEl={languagesAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            id={menuIdLanguages}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={isLanguagesMenuOpen}
            onClose={handleLAnguagesMenuClose}
        >
            {Object.keys(languages).length > 1
                ? locales.map(locale => (
                    <MenuItem key={locale} onClick={() => handleLocaleChange(locale)}>
                        {languages[locale].name}
                    </MenuItem>
                ))
                : null}
        </Menu>
    );

    const sendNewsLetter =(newsLetter: INewsLetter) => {
        props.createEntityNewsLetter(newsLetter);
    }

    const responseGoogle = (response: any) => {
        if (!response.error) {
            const requestData: IGooglePlusOneTap = {
                ...response,
                sourceProvider: SourceProvider.GOOGLE_PLUS,
                idOneSignal: props.oneSignalId,
                langKey: props.currentLocale
            };
            props.loginGooglePlusOneTap(requestData);
        }
    };

    return (
        <>
            <ScrollToTopRouters />
            <ThemeProvider theme={ThemeApp}>
                <CssBaseline/>
                <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" autoClose={5000}/>
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
                        parentCallbackLogout={(event: any) => handleLogout()}
                        parentCallbackRightMenuMobile={(event: any) => handleDrawerToggleRight(event)}
                        parentCallbackMenuMobile={(event: any) => handleDrawerToggle(event)}
                        currentLocale={props.currentLocale}
                        onLocaleChange={props.setLocale}
                        nbeNotificationsNotSee={props.nbeNotificationsNotRead}
                        parentCallbackDarkMode={(event: any, checked: boolean) => toggleDarkMode(event, checked)}
                        nbeMessagesNotRead={props.nbeMessagesNotRead}/>
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

                    {/*<MessengerCustomerChat pageId={AllAppConfig.PAGE_ID} appId={AllAppConfig.APP_ID_FACEBOOK} />*/}
                </main>
                <Footer sendCallback={sendNewsLetter} addSuccess={props.addSuccessNewsLetter} loadingEntity={props.loadingEntityNewsLetter}/>
                {
                    !props.isAuthenticated ? <GoogleOneTapLogin onError={(error: any) => console.log('error ', error)}
                                                                onSuccess={(response: any) => responseGoogle(response)}
                                                                googleAccountConfigs={{ client_id: AllAppConfig.CLIENT_ID_GOOGLLE }} /> : null
                }

                {renderMenuLanguages}

                <CookieConsent
                    location="bottom"
                    buttonText="Sure man!!"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                    expires={150}
                >
                    This website uses cookies to enhance the user experience.{" "}
                    <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
                </CookieConsent>
            </ThemeProvider>
        </>
    );
}

const mapStateToProps = ({user, address, locale, newsLetter, webSocketState}: IRootState) => ({
    currentLocale: locale.currentLocale,

    isAuthenticated: user.isAuthenticated,
    currentUser: user.currentUser,
    nbeNotificationsNotRead: user.nbeNotificationsNotRead,
    nbeMessagesNotRead: user.nbeMessagesNotRead,

    loadingAddress: address.loadingEntities,
    entitiesAddress: address.entities,

    loadingEntityNewsLetter: newsLetter.loadingEntity,
    addSuccessNewsLetter: newsLetter.addSuccess,

    oneSignalId: user.oneSignalId,

    listConnectedUsers: webSocketState.listConnectedUsers
});

const mapDispatchToProps = {
    logout,
    getEntitiesAddresses,
    getCategories,
    setLocale,
    createEntityNewsLetter,
    getNumberOfNotificationsNotSee,
    resetNotification,
    getEntitiesTopHomeSlidesImage,
    getEntityPostHomeFeature,
    resetOffer,
    loginGooglePlusOneTap,
    getWebsocketListConnectedUsers,
    dispatchSuccessSession,
    removeEmailFromListConnectedUsers,
    resetConversations,
    resetMessages,
    getNumberOfMessagesNotSee
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));

