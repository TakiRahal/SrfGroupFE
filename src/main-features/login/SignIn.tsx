import React  from 'react';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab/Fab';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useFormik } from 'formik';
import {connect, useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import IconButton from '@mui/material/IconButton/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import Breadcrumbs from '@mui/material/Breadcrumbs/Breadcrumbs';
import Slide from '@mui/material/Slide';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import {initialValuesSignIn, validationSchemaSignIn} from "./validation/validation-signin";
import {login} from "../../shared/reducers/user-reducer";
import {IRootState} from "../../shared/reducers";
import Container from "@mui/material/Container/Container";
import {AllAppConfig} from "../../core/config/all-config";
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import './SignIn.scss';

const initialValues = initialValuesSignIn;

// class CpmFacebookLogin extends React.Component<any> {
//     render() {
//         return(<div></div>)
//     }
// }
// const tagFacebookLogin: Node | React.Component<any, {}, any> | undefined = undefined;

export interface ISignInProps extends StateProps, DispatchProps {}

export const SignIn = (props: ISignInProps) => {
    const [startAnimation, setStartAnimation] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState({
        showPassword: false,
    });
    const history = useHistory();

    const { loading, isAuthenticated } = props;

    const handleClickShowPassword = () => {
        setShowPassword({
            showPassword: !showPassword.showPassword,
        });
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    React.useEffect(() => {
        setStartAnimation(true);
    }, []);

    React.useEffect(() => {
        console.log('isAuthenticated ', isAuthenticated);
        if (isAuthenticated) {
            history.push(ALL_APP_ROUTES.HOME);
        }
    }, [isAuthenticated]);


    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaSignIn,
        onSubmit: values => {
            props.login(values.email.toString(), values.password.toString(), true);
        },
    });

    const responseFacebook = (response: any) => {
        console.log('responseFacebook ', response);
        // const requestData: IFacebook = {
        //     ...response,
        //     sourceProvider: SourceProvider.FACEBOOK,
        // };
        // props.loginFacebook(requestData);
    };

    const responseGoogle = (response: any) => {
        console.log('responseGoogle ', response);
        // if (!response.error) {
        //     const requestData: IGooglePlus = {
        //         ...response,
        //         sourceProvider: SourceProvider.GOOGLE_PLUS,
        //     };
        //     props.loginGooglePlus(requestData);
        // }
    };

    return (
        <Slide direction="up" in={startAnimation} mountOnEnter unmountOnExit>
            <Container maxWidth="xl">
                <Grid
                    container
                    style={{
                        paddingTop: 10,
                    }}
                >
                    <Grid item sm={4}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                                SRF
                            </Link>
                            <Typography color="text.primary">
                                Sign in
                            </Typography>
                        </Breadcrumbs>
                    </Grid>
                </Grid>
                <Grid container sx={{pt: 5, pb: 5}}>
                    <Grid item xs={4}></Grid>

                    <Grid item xs={12} sm={8} md={4} component={Paper} md-offset={3} elevation={6} square>
                        <Box
                            sx={{
                                my: 4,
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
                                Sign in
                            </Typography>

                            {/*{loginError ? (*/}
                                {/*<Alert severity="error">*/}
                                    {/*<strong>Failed to sign in!</strong> Please check your credentials and try again.*/}
                                {/*</Alert>*/}
                            {/*) : null}*/}

                            <Box sx={{ mt: 1, pb: 2 }}>
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth error={formik.touched.email && Boolean(formik.errors.email)}>
                                                <InputLabel htmlFor="outlined-adornment-title">Email</InputLabel>
                                                <OutlinedInput
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    label="email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.email && formik.errors.email}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth error={formik.touched.password && Boolean(formik.errors.password)}>
                                                <InputLabel htmlFor="outlined-adornment-title">password</InputLabel>
                                                <OutlinedInput
                                                    id="password"
                                                    name="password"
                                                    type={showPassword.showPassword ? 'text' : 'password'}
                                                    label="password"
                                                    value={formik.values.password}
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
                                                <FormHelperText id="component-helper-text">{formik.touched.password && formik.errors.password}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />

                                    <LoadingButton loading={loading} fullWidth variant="contained" color="neutral" type="submit" sx={{ mt: 3, mb: 2 }}>
                                        Sign in
                                    </LoadingButton>
                                </form>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to={''}>
                                            Did you forget your password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to={ALL_APP_ROUTES.REGISTER}>
                                            Register a new account
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                        <Box sx={{ textAlign: 'center', my: 4 }}>
                            <FacebookLogin
                                appId={AllAppConfig.APP_ID_FACEBOOK}
                                autoLoad={false}
                                fields="name,email,picture"
                                tag="div"
                                textButton=""
                                icon={
                                    <Fab color="primary" aria-label="facebook" sx={{ m: 1 }}>
                                        <FacebookIcon />
                                    </Fab>
                                }
                                callback={responseFacebook}
                            ></FacebookLogin>

                            <GoogleLogin
                                clientId={AllAppConfig.CLIENT_ID_GOOGLLE}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                autoLoad={false}
                                render={renderProps => (
                                    <Fab
                                        color="secondary"
                                        aria-label="google"
                                        sx={{ m: 1, backgroundColor: '#E93F2E' }}
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <GoogleIcon />
                                    </Fab>
                                )}
                            ></GoogleLogin>
                        </Box>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </Container>
        </Slide>
    );
}


const mapStateToProps = ({user}: IRootState) => ({
    loading: user.loginLoading,
    isAuthenticated: user.isAuthenticated,
    currentUser: user.currentUser
});

const mapDispatchToProps = {
    login
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);