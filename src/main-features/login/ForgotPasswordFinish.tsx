import { handlePasswordResetFinish } from "../../shared/reducers/user-reducer";
import {connect} from "react-redux";
import {IRootState} from "../../shared/reducers";
import Paper from "@mui/material/Paper";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import Slide from "@mui/material/Slide/Slide";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link, useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography/Typography";
import {useTranslation} from "react-i18next";
import React from "react";
import Box from "@mui/material/Box/Box";
import Avatar from "@mui/material/Avatar/Avatar";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import {initialValuesForgotPasswordFinish, validationSchemaForgotPasswordFinish} from "./validation/validation-signin";
import {useFormik} from "formik";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import {useQuery} from "../../shared/utils/utils-functions";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import IconButton from "@mui/material/IconButton/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const initialValues = initialValuesForgotPasswordFinish;

export interface IForgotPasswordProps extends StateProps, DispatchProps {}

export const ForgotPasswordFinish = (props: IForgotPasswordProps) => {

    const [startAnimation, setStartAnimation] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState({
        showPassword: false,
    });
    const [showConfPassword, setShowConfPassword] = React.useState({
        showPassword: false,
    });
    const [keyFinish, setKeyFinish] = React.useState('');

    const query = useQuery();

    React.useEffect(() => {
        const key = query.get("key");
        console.log('key ', key);
        if( key ){
            setKeyFinish(key);
        }
    }, [query])

    const { t } = useTranslation();
    const navigate = useNavigate();

    React.useEffect(() => {
        setStartAnimation(true);
    }, []);

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaForgotPasswordFinish,
        onSubmit: values => {
            if(keyFinish){
                props.handlePasswordResetFinish(keyFinish, values.password.toString());
            }
            else{
                navigate(ALL_APP_ROUTES.LOGIN);
            }
        },
    });

    React.useEffect(() => {
        if(props.resetPasswordSuccess){
            formik.resetForm();
            navigate(ALL_APP_ROUTES.LOGIN);
        }
    }, [props.resetPasswordSuccess]);

    const handleClickShowPassword = () => {
        setShowPassword({
            showPassword: !showPassword.showPassword,
        });
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const handleClickShowConfPassword = () => {
        setShowConfPassword({
            showPassword: !showConfPassword.showPassword,
        });
    };

    const handleMouseDownConfPassword = (event: any) => {
        event.preventDefault();
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
                                {t('signin.title_page_forgot_password')}
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
                                {t('signin.title_page_forgot_password')}
                            </Typography>

                            <Box sx={{ mt: 1, pb: 2 }}>
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth error={formik.touched.password && Boolean(formik.errors.password)}>
                                                <InputLabel htmlFor="outlined-adornment-title">{t('common.label_password')}</InputLabel>
                                                <OutlinedInput
                                                    id="password"
                                                    name="password"
                                                    type={showPassword.showPassword ? 'text' : 'password'}
                                                    label={t('common.label_password')}
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
                                        <Grid item xs={12}>
                                            <FormControl fullWidth error={formik.touched.confPassword && Boolean(formik.errors.confPassword)}>
                                                <InputLabel htmlFor="outlined-adornment-title">{t('common.label_password')}</InputLabel>
                                                <OutlinedInput
                                                    id="confPassword"
                                                    name="confPassword"
                                                    type={showConfPassword.showPassword ? 'text' : 'password'}
                                                    label={t('common.label_password')}
                                                    value={formik.values.confPassword}
                                                    onChange={formik.handleChange}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowConfPassword}
                                                                onMouseDown={handleMouseDownConfPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.confPassword && formik.errors.confPassword}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <LoadingButton loading={props.loading} fullWidth variant="contained" color="neutral" type="submit" sx={{ mt: 3, mb: 2 }}>
                                        {t('common.label_update')}
                                    </LoadingButton>
                                </form>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Slide>
    );
}

const mapStateToProps = ({user}: IRootState) => ({
    loading: user.loadingForgotPasswordFinish,
    resetPasswordSuccess: user.resetPasswordSuccessFinish
});

const mapDispatchToProps = {
    handlePasswordResetFinish
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordFinish);