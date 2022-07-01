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
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import {initialValuesSignUp, validationSchemaSignUp} from "./validation/validation-signup";
import {connect} from "react-redux";
import {handleRegister, resetRegister} from "../../shared/reducers/user-reducer";
import {IRootState} from "../../shared/reducers";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import Container from "@mui/material/Container/Container";
// import {TransitionModal} from "../../shared/pages/transition-modal";
import {useTranslation} from "react-i18next";
import {checkMobileDesktopBrowser} from "../../shared/utils/utils-functions";

const initialValues = initialValuesSignUp;

interface ISignUP {
    accept: boolean;
    email: string;
    firstPassword: string;
    secondPassword: string;
}

// export interface ISignUpProps extends StateProps, DispatchProps {}

export const SignUp = () => {
    // const [startAnimation, setStartAnimation] = React.useState(false);
    // const [showPassword, setShowPassword] = React.useState({
    //     showPassword: false,
    // });
    // const [showConfPassword, setShowConfPassword] = React.useState({
    //     showPassword: false,
    // });
    // const [openDialogRegister, setOpenDialogRegister] = React.useState(false);
    //
    // const { t } = useTranslation();
    // const navigate = useNavigate();
    //
    // React.useEffect(() => {
    //     setStartAnimation(true);
    // }, []);
    //
    // React.useEffect(() => {
    //     console.log('props.oneSignalId ', props?.oneSignalId);
    // }, [props?.oneSignalId])
    //
    // const { registrationSuccess } = props;
    //
    // const formik = useFormik({
    //     initialValues,
    //     validationSchema: validationSchemaSignUp,
    //     onSubmit: (values: ISignUP) => {
    //         props.handleRegister(values.email, values.firstPassword, checkMobileDesktopBrowser(), props.oneSignalId, props.currentLocale);
    //     },
    // });
    //
    // const handleClickShowPassword = () => {
    //     setShowPassword({
    //         showPassword: !showPassword.showPassword,
    //     });
    // };
    //
    // const handleClickShowConfPassword = () => {
    //     setShowConfPassword({
    //         showPassword: !showConfPassword.showPassword,
    //     });
    // };
    //
    // const handleMouseDownPassword = (event: any) => {
    //     event.preventDefault();
    // };
    //
    // React.useEffect(() => {
    //     if(registrationSuccess){
    //         setOpenDialogRegister(true);
    //     }
    // }, [registrationSuccess]);
    //
    // const handleClose = () => {
    //     setOpenDialogRegister(false);
    //     props.resetRegister();
    //     formik.resetForm();
    //     navigate(ALL_APP_ROUTES.LOGIN);
    // }

    // const shwDialogRegister = () => {
    //     return (
    //         <Dialog
    //             open={openDialogRegister}
    //             TransitionComponent={TransitionModal}
    //             onClose={handleClose}
    //             aria-labelledby="alert-dialog-title"
    //             aria-describedby="alert-dialog-description"
    //         >
    //             <DialogTitle id="alert-dialog-title">
    //                 {t<string>('signup.title-dialog-register')}
    //             </DialogTitle>
    //             <DialogContent>
    //                 <DialogContentText id="alert-dialog-description">
    //                     {t<string>('signup.inbox-dialog-register')}
    //                 </DialogContentText>
    //             </DialogContent>
    //             <DialogActions>
    //                 <Button onClick={handleClose} autoFocus color="success">
    //                     {t<string>('signup.label-activation-dialog-register')}
    //                 </Button>
    //             </DialogActions>
    //         </Dialog>
    //     );
    // }

    return (
        <Box>Register</Box>
    );
}

//
// const mapStateToProps = ({ user, locale }: IRootState) => ({
//     loading: user.registrationLoading,
//     registrationSuccess: user.registrationSuccess,
//     oneSignalId: user.oneSignalId,
//     currentLocale: locale.currentLocale,
// });
//
// const mapDispatchToProps = {
//     handleRegister,
//     resetRegister
// };
//
// type StateProps = ReturnType<typeof mapStateToProps>;
// type DispatchProps = typeof mapDispatchToProps;
//
// export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
