import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Link, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import IconButton from '@mui/material/IconButton/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import Breadcrumbs from '@mui/material/Breadcrumbs/Breadcrumbs';
import Slide from '@mui/material/Slide';
import {initialValuesSignUp, validationSchemaSignUp} from "./validation/validation-signup";
import {connect, useDispatch, useSelector} from "react-redux";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import Container from "@mui/material/Container/Container";
// import {TransitionModal} from "../../shared/pages/transition-modal";
import {useTranslation} from "react-i18next";
import { checkMobileDesktopBrowser } from '../../../../shared/utils/utils-functions';
import {loadingCommentsOffer} from "../../../offer/store/slice";
import {
    addSuccessRegister, allLocaleSelector,
    allSessionSelector,
    loadingRegister,
    registerUser,
    resetRegisterUser
} from "../../store/slice";
import {TransitionModal} from "../../../../shared/pages/transition-modal";
import {ALL_APP_ROUTES} from "../../../../core/config/all-app-routes";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

const initialValues = initialValuesSignUp;

interface ISignUP {
    accept: boolean;
    email: string;
    firstPassword: string;
    secondPassword: string;
}

export default function SignUp (){

    const [startAnimation, setStartAnimation] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState({
        showPassword: false,
    });
    const [showConfPassword, setShowConfPassword] = React.useState({
        showPassword: false,
    });
    const [openDialogRegister, setOpenDialogRegister] = React.useState(false);

    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const loadingRegisterSelector = useSelector(loadingRegister) ?? false;
    const addSuccessRegisterSelector = useSelector(addSuccessRegister) ?? false;

    const {oneSignalId} = useSelector(allSessionSelector);
    const {currentLocale} = useSelector(allLocaleSelector);

    React.useEffect(() => {
        setStartAnimation(true);
    }, []);


    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaSignUp,
        onSubmit: (values: ISignUP) => {
            dispatch(registerUser({
                email: values.email,
                password: values.firstPassword,
                sourceRegister: checkMobileDesktopBrowser(),
                oneSignalId: oneSignalId,
                langKey: currentLocale
            }));
            // props.handleRegister(values.email, values.firstPassword, checkMobileDesktopBrowser(), props.oneSignalId, props.currentLocale);
        },
    });

    const handleClickShowPassword = () => {
        setShowPassword({
            showPassword: !showPassword.showPassword,
        });
    };

    const handleClickShowConfPassword = () => {
        setShowConfPassword({
            showPassword: !showConfPassword.showPassword,
        });
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    React.useEffect(() => {
        if(addSuccessRegisterSelector){
            setOpenDialogRegister(true);
        }
    }, [addSuccessRegisterSelector]);

    const handleClose = () => {
        setOpenDialogRegister(false);
        dispatch(resetRegisterUser({}));
        formik.resetForm();
        navigate(ALL_APP_ROUTES.LOGIN);
    }

    const shwDialogRegister = () => {
        return (
            <Dialog
                open={openDialogRegister}
                TransitionComponent={TransitionModal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {t<string>('signup.title-dialog-register')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {t<string>('signup.inbox-dialog-register')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus color="success">
                        {t<string>('signup.label-activation-dialog-register')}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    return (
        <Slide direction="up" in={startAnimation} mountOnEnter unmountOnExit>
            <Container maxWidth="xl">
                <Grid
                    container
                    style={{
                        paddingTop: 10,
                    }}
                >
                    <Grid item sm={3}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                                SRF
                            </Link>
                            <Typography color="text.primary">
                                {t<string>('signup.title-page-register')}
                            </Typography>
                        </Breadcrumbs>
                    </Grid>
                </Grid>
                <Grid container sx={{pt: 5, pb: 5}}>
                    <Grid item xs={3}></Grid>

                    <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                {t<string>('signup.title-page-register')}
                            </Typography>
                            <Box sx={{ mt: 3 }}>
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth error={formik.touched.email && Boolean(formik.errors.email)}>
                                                <InputLabel htmlFor="outlined-adornment-title">{t<string>('common.label_email')}</InputLabel>
                                                <OutlinedInput
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    label={t<string>('common.label_email')}
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.email && formik.errors.email}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.firstPassword && Boolean(formik.errors.firstPassword)}>
                                                <InputLabel htmlFor="outlined-adornment-title">{t<string>('common.label_new_password')}</InputLabel>
                                                <OutlinedInput
                                                    id="firstPassword"
                                                    name="firstPassword"
                                                    type={showPassword.showPassword ? 'text' : 'password'}
                                                    label={t<string>('common.label_new_password')}
                                                    value={formik.values.firstPassword}
                                                    onChange={formik.handleChange}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                                <FormHelperText id="component-helper-text">
                                                    {formik.touched.firstPassword && formik.errors.firstPassword}
                                                </FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.secondPassword && Boolean(formik.errors.secondPassword)}>
                                                <InputLabel htmlFor="outlined-adornment-title">{t<string>('common.label_confirm_password')}</InputLabel>
                                                <OutlinedInput
                                                    id="secondPassword"
                                                    name="secondPassword"
                                                    type={showConfPassword.showPassword ? 'text' : 'password'}
                                                    label={t<string>('common.label_confirm_password')}
                                                    value={formik.values.secondPassword}
                                                    onChange={formik.handleChange}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowConfPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {showConfPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                                <FormHelperText id="component-helper-text">
                                                    {formik.touched.secondPassword && formik.errors.secondPassword}
                                                </FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth error={Boolean(formik.errors.accept)}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            id="accept"
                                                            name="accept"
                                                            color="primary"
                                                            checked={formik.values.accept}
                                                            onChange={formik.handleChange}
                                                        />
                                                    }
                                                    label={
                                                        <React.Fragment>
                                                            {t<string>('signup.accept-cgu')}
                                                            <Link to="qsd">ici</Link>
                                                        </React.Fragment>
                                                    }
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.accept && formik.errors.accept}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <LoadingButton loading={loadingRegisterSelector}
                                                   fullWidth
                                                   variant="contained"
                                                   color="neutral"
                                                   type="submit"
                                                   data-testid='submit'
                                                   sx={{ mt: 3, mb: 2 }}>
                                        {t<string>('common.label_register')}
                                    </LoadingButton>

                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link to={ALL_APP_ROUTES.LOGIN}>{t<string>('signup.label-already-have-account')}</Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
                {shwDialogRegister()}
            </Container>
        </Slide>
    );
}
