import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from "@mui/material/Button/Button";
import {Link, useHistory} from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import Avatar from "@mui/material/Avatar/Avatar";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {getFullnameUser, getUserAvatar} from "../../utils/utils-functions";
import {languages, locales} from "../../reducers/locale.reducer";
import {Translation, useTranslation} from "react-i18next";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import {AllAppConfig} from "../../../core/config/all-config";


const sections = [
    {
        title: <Translation>{(t, { i18n }) => <>{t('header.link_home')}</>}</Translation>,
        url: ALL_APP_ROUTES.HOME,
        icon: <HomeIcon sx={{ marginRight: 1 }} />,
    },
    {
        title: <Translation>{(t, { i18n }) => <>{t('common.label_search')}</>}</Translation>,
        url: ALL_APP_ROUTES.OFFER.LIST+'?page=0&size='+AllAppConfig.Items_Per_Page,
        icon: <SearchIcon sx={{ marginRight: 1 }} />,
    },
];

export default function Header(props: any){

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [languagesAnchorEl, setLanguagesAnchorEl] = React.useState(null);
    const [anchorElSupport, setAnchorElSupport] = React.useState<HTMLElement | null>(null);

    const history = useHistory();

    const { t, i18n } = useTranslation();

    const { currentUser, isAuthenticated, nbeNotificationsNotSee } = props;

    const isMenuOpen = Boolean(anchorEl);
    const isLanguagesMenuOpen = Boolean(languagesAnchorEl);

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        // setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const logout = () => {
        setAnchorEl(null);
        props.parentCallbackLogout(true);
        history.push(ALL_APP_ROUTES.HOME);
    };

    const handlePartAdmin = () => {
        handleMenuClose();
        setTimeout(() => {
            // window.open(ALL_APP_ROUTES.ADMIN.HOME, '_blank');
        });
    };

    const handleMenuMobile = (event: any) => {
        props.parentCallbackMenuMobile(event);
    };

    const handleRightMenuMobile = (event: any) => {
        props.parentCallbackRightMenuMobile(event);
    };

    const handleLocaleChange = (locale: string) => {
        console.log('handleLocaleChange ', locale);
        i18n.changeLanguage(locale);
        handleLAnguagesMenuClose();
        props.onLocaleChange(locale);
    };

    const handleLAnguagesMenuClose = () => {
        setLanguagesAnchorEl(null);
    };
    const handleLAnguagesMenuOpen = (event: any) => {
        setLanguagesAnchorEl(event.currentTarget);
    };
    const menuIdLanguages = 'languages-menu';
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

    const menuIdAccount = 'account-menu-desktop';
    const renderMenuAccount = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuIdAccount}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem
                component={Link}
                to={ALL_APP_ROUTES.ACCOUNT}
                onClick={() => {
                    handleMenuClose();
                }}
            >
                <ListItemIcon>
                    <AccountCircle fontSize="small" />
                </ListItemIcon>
                My account
            </MenuItem>

            <MenuItem
                component={Link}
                to={ALL_APP_ROUTES.CHAT.LIST}
                onClick={() => {
                    handleMenuClose();
                }}
                sx={{ display: { xs: 'flex', md: 'none' } }}
            >
                <ListItemIcon>
                    <MailIcon fontSize="small" />
                </ListItemIcon>
                Chat
            </MenuItem>

            <MenuItem
                component={Link}
                to={ALL_APP_ROUTES.OFFER.MY_OFFERS}
                onClick={() => {
                    handleMenuClose();
                }}
            >
                <ListItemIcon>
                    <PostAddIcon fontSize="small" />
                </ListItemIcon>
                My offers
            </MenuItem>

            <MenuItem
                component={Link}
                to={ALL_APP_ROUTES.FAVORITE.USER}
                onClick={() => {
                    handleMenuClose();
                }}
            >
                <ListItemIcon>
                    <FavoriteIcon fontSize="small" />
                </ListItemIcon>
                My favorite users
            </MenuItem>

            <MenuItem
                component={Link}
                to=""
                onClick={() => {
                    handleMenuClose();
                }}
                sx={{ display: { xs: 'flex', md: 'none' } }}
            >
                <ListItemIcon>
                    <NotificationsIcon fontSize="small" />
                </ListItemIcon>
                Notifications
            </MenuItem>

            {props.isAdmin ? (
                <MenuItem onClick={handlePartAdmin}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Part admin
                </MenuItem>
            ) : null}

            <MenuItem onClick={logout}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                {t('header.logout')}
            </MenuItem>
        </Menu>
    );

    const redirectSupport = (url: string) => {
        history.push(url);
        handlePopoverCloseSupport();
    };

    const handlePopoverOpenSupport = (event: React.MouseEvent<HTMLElement>) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorElSupport(event.currentTarget);
        }
    };
    const handlePopoverCloseSupport = () => {
        setAnchorElSupport(null);
    };
    const handlePopoverLeaveSupport = () => {
        setTimeout(() => {
            if( anchorElSupport!=null ){
                // setAnchorElSupport(null);
            }
        }, 1000)
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#8080801f' }}>
                    <Tooltip title={t('header.label_add_offer') || ''}>
                        <Button
                            variant="outlined"
                            color="neutral"
                            size="small"
                            sx={{ mr: 1, display: { xs: 'none', sm: 'inline-flex;' } }}
                            startIcon={<AddCircleIcon />}
                            component={Link}
                            to={ALL_APP_ROUTES.ADD_UPDATE_OFFER}
                        >
                            {t('header.label_add_offer')}
                        </Button>
                    </Tooltip>
                    <IconButton
                        size="small"
                        aria-label="Language"
                        color="inherit"
                        aria-controls="Menu"
                        onClick={() => handleMenuMobile(true)}
                        sx={{ fontSize: '0.8rem;', display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        aria-label="Language"
                        color="inherit"
                        aria-controls={menuIdLanguages}
                        onClick={handleLAnguagesMenuOpen}
                        sx={{ fontSize: '0.8rem;', display: { xs: 'none', sm: 'flex' } }}
                    >
                        <LanguageIcon sx={{mr: 0.5}} /> {props.currentLocale ? languages[props.currentLocale].name : undefined}
                    </IconButton>
                    <Typography align="center" variant="h6" noWrap component="h2" sx={{ flex: { sm: 1 }, display: 'block' }}>
                        SRF
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {isAuthenticated ? (
                            <div>
                                <Tooltip title="Messages">
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit" component={Link}
                                                to={ALL_APP_ROUTES.CHAT.LIST}>
                                        <Badge badgeContent={null} color="error">
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Notifications">
                                    <IconButton
                                        size="large"
                                        aria-label="show 17 new notifications"
                                        color="inherit"
                                        component={Link}
                                        to={ALL_APP_ROUTES.NOTIFICATION.LIST}
                                    >
                                        <Badge badgeContent={nbeNotificationsNotSee > 0 ? nbeNotificationsNotSee : null} color="error">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuIdAccount}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <Avatar
                                        alt="Avatar"
                                        src={getUserAvatar(currentUser.id, currentUser.imageUrl, currentUser.sourceRegister)}
                                        sx={{ width: 24, height: 24, mr: 0.6, border: '1px solid #b9b9b9' }}
                                    />
                                    <Typography component="span" variant="body2" color="text.primary">
                                        {getFullnameUser(currentUser)}
                                    </Typography>
                                    <ArrowDropDownIcon />
                                </IconButton>
                            </div>
                        ) : (
                            <div>
                                <Link to={ALL_APP_ROUTES.LOGIN} style={{color: 'transparent'}}>
                                    <IconButton
                                        size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls=""
                                        aria-haspopup="true"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </Link>
                                <Link to={ALL_APP_ROUTES.REGISTER} style={{textDecoration: 'none'}}>
                                    <Button variant="outlined" size="small" color="neutral" sx={{ ml: 1 }}>
                                        {t('header.signup')}
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </Box>

                    <Box sx={{ display: { md: 'none' }, marginLeft: 'auto' }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls=""
                            aria-haspopup="true"
                            component={Link}
                            to={ALL_APP_ROUTES.ADD_UPDATE_OFFER}
                        >
                            <AddCircleIcon sx={{ width: 30, height: 30 }} />
                        </IconButton>

                        {isAuthenticated ? (
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-haspopup="true"
                                onClick={() => handleRightMenuMobile(true)}
                                color="inherit"
                            >
                                <Avatar
                                    alt={currentUser?.imageUrl}
                                    src={getUserAvatar(currentUser.id, currentUser.imageUrl, currentUser.sourceRegister)}
                                    sx={{ width: 30, height: 30, mr: 0.6, border: '1px solid #b9b9b9' }}
                                />
                            </IconButton>
                        ) : (
                            <Link to={ALL_APP_ROUTES.LOGIN}  style={{color: 'transparent'}}>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls=""
                                    aria-haspopup="true"
                                >
                                    <AccountCircle sx={{ width: 30, height: 30 }} />
                                </IconButton>
                            </Link>
                        )}
                    </Box>
                </Toolbar>

                <Toolbar
                    component="nav"
                    variant="dense"
                    sx={{ justifyContent: 'center', overflowX: 'auto', backgroundColor: '#e2c498', display: { xs: 'none', sm: 'flex' } }}
                >
                    {sections.map(section => (
                        <Link color="inherit" key={section.url} to={section.url} style={{ marginRight: 30, display: 'flex', color: 'rgb(60 60 60)', fontWeight: '600' }}>
                            {section.icon}
                            {section.title}
                        </Link>
                    ))}

                    <div>
                        <Link
                            color="inherit"
                            to="#"
                            style={{ marginRight: 30, display: 'flex', color: 'rgb(60 60 60)', fontWeight: '600' }}
                            onMouseEnter={handlePopoverOpenSupport}
                            onMouseLeave={handlePopoverLeaveSupport}
                            onClick={handlePopoverOpenSupport}
                            aria-owns={anchorElSupport ? 'simple-menu' : undefined} >
                            <ExpandMoreIcon sx={{ marginRight: 1 }}/>
                            {t('header.link_support.link_label_support')}
                        </Link>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorElSupport}
                            open={Boolean(anchorElSupport)}
                            onClose={handlePopoverCloseSupport}
                            MenuListProps={{ onMouseLeave: handlePopoverCloseSupport }}
                        >
                            <MenuItem onClick={event => redirectSupport(ALL_APP_ROUTES.SUPPORT.CONTACT_US)}>
                                <ListItemIcon>
                                    <MarkunreadIcon fontSize="small" />
                                </ListItemIcon>
                                {t('header.link_support.link_contact_us')}
                            </MenuItem>
                            <MenuItem onClick={event => redirectSupport(ALL_APP_ROUTES.SUPPORT.ABOUT_US)}>
                                <ListItemIcon>
                                    <InfoIcon fontSize="small" />
                                </ListItemIcon>
                                {t('header.link_support.link_about')}
                            </MenuItem>
                            <MenuItem onClick={event => redirectSupport(ALL_APP_ROUTES.SUPPORT.FAQ)}>
                                <ListItemIcon>
                                    <AccountCircle fontSize="small" />
                                </ListItemIcon>
                                {t('header.link_support.link_faq')}
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenuAccount}
            {/*{renderMobileMenu}*/}
            {renderMenuLanguages}
        </Box>
    );
}