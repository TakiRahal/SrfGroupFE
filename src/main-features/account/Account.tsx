import React from 'react';
import Container from "@mui/material/Container/Container";
import {IRootState} from "../../shared/reducers";
import {connect} from "react-redux";
import {getCurrentUser, updateInfosUser, updatePasswordUser, uploadAvatar} from "../../shared/reducers/user-reducer";
import Box from "@mui/material/Box/Box";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import Avatar from "@mui/material/Avatar/Avatar";
import {dataUrlToFile, getFullnameUser, getUserAvatar} from "../../shared/utils/utils-functions";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {useFormik} from "formik";
import {
    initialValuesAccount,
    initialValuesPasswordAccount,
    validationSchemaAccount, validationSchemaPasswordAccount
} from "./validation/validation-account";
import IconButton from "@mui/material/IconButton/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import Button from "@mui/material/Button/Button";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import Typography from "@mui/material/Typography/Typography";
import {Link} from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {getImageUrl} from "../../shared/utils/image-url";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField/TextField";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {useTranslation} from "react-i18next";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import {languages, locales} from "../../shared/reducers/locale.reducer";
import {AllAppConfig} from "../../core/config/all-config";
import {StorageService} from "../../shared/services/storage.service";
import {SourceProvider} from "../../shared/enums/source-provider";

const initialValues = initialValuesAccount;
const initialValuesPassword = initialValuesPasswordAccount;

export interface IAccountClientProps extends StateProps, DispatchProps {}

export const Account = (props: IAccountClientProps) => {
    const [fileState, setFileState] = React.useState(getUserAvatar(props.account.id, props.account.imageUrl, props.account.sourceRegister));
    const [showEditInfos, setShowEditInfos] = React.useState(false);
    const [imageAvatar, setImageAvatar] = React.useState<any>(null);
    const [showEditPassword, setShowEditPassword] = React.useState(false);
    const [showCurrentUserPassword, setShowCurrentUserPassword] = React.useState({
        showPassword: false,
    });
    const [showNewPassword, setShowNewPassword] = React.useState({
        showPassword: false,
    });
    const [showConfPassword, setShowConfPassword] = React.useState({
        showPassword: false,
    });

    const { t } = useTranslation();

    const {
        getCurrentUser,
        account,
        loadingAccount,
        uploadAvatar,
    } = props;

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchemaAccount,
        onSubmit: values => {
            const account = {
                ...props.account,
                ...values,
            };
            props.updateInfosUser(account);
        },
    });


    const formikPassword = useFormik({
        initialValues: initialValuesPassword,
        validationSchema: validationSchemaPasswordAccount,
        onSubmit: values => {
            props.updatePasswordUser(values);
        },
    });

    const handleClickShowCurrentUserPassword = () => {
        setShowCurrentUserPassword({
            showPassword: !showCurrentUserPassword.showPassword,
        });
    };
    const handleClickShowNewPassword = () => {
        setShowNewPassword({
            showPassword: !showNewPassword.showPassword,
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
        getCurrentUser();
    }, []);

    React.useEffect(() => {
        if( props.updateSuccessPasswordAccount){
            setShowEditPassword(false);
            formikPassword.resetForm();
        }
    }, [props.updateSuccessPasswordAccount])

    React.useEffect(() => {
        if (account) {

            // Set avatar
            setFileState(getUserAvatar(props.account.id, props.account.imageUrl, props.account.sourceRegister));

            formik.setValues({
                email: account.email ? account.email : '',
                langKey: account.langKey ? account.langKey : '',
                firstName: account.firstName ? account.firstName : '',
                lastName: account.lastName ? account.lastName : '',
                phone: account.phone ? account.phone : '',
                address: account.address ? account.address : null,
                linkProfileFacebook: account.linkProfileFacebook ? account.linkProfileFacebook : '',
            });
        }
    }, [account]);

    React.useEffect(() => {
        if(props.updateSuccessInfosAccount){
            setShowEditInfos(false);
            const currentUser = JSON.parse(StorageService.local.get(AllAppConfig.VALUE_CURRENT_USER));
            const updateCurrentUser = {
                ...currentUser,
                ...props.entityUpdateInfosAccount
            }
            StorageService.local.set(AllAppConfig.VALUE_CURRENT_USER, JSON.stringify(updateCurrentUser));
        }
    }, [props.updateSuccessInfosAccount])

    React.useEffect(() => {
        if (imageAvatar) {
            const formData = new FormData();
            formData.append('avatar', imageAvatar);
            uploadAvatar(formData);
        }
    }, [imageAvatar]);

    const selectFile = (event: any) => {
        getImageUrl(event.target.files[0], 500)
            .then((result: any) => {
                dataUrlToFile(result, event.target.files[0].name)
                    .then((value: any) => {
                        setImageAvatar(value);
                    })
                setFileState(result);
            });
    };

    return (
        <Container maxWidth="xl" className="pt-5">
            <Grid
                container
                style={{
                    paddingTop: 10,
                }} >
                <Grid item xs={12} sm={6}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                            SRF
                        </Link>
                        <Link color="inherit" to={ALL_APP_ROUTES.SEARCH}>
                            {t('account.title')}
                        </Link>
                        <Typography color="text.primary">{getFullnameUser(props.account)}</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            {loadingAccount ? (
                <Box sx={{ textAlign: 'center' }}>
                    <CircularProgress color="inherit" />
                </Box>
            ) : (
                <Grid container spacing={4} style={{
                    paddingTop: 50,
                }}>
                    <Grid item xs={12} sm={3} sx={{ textAlign: 'center' }}>
                        <Paper elevation={3} sx={{ p: 1 }}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'relative', width: '80px', marginLeft: 'auto', marginRight: 'auto' }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={fileState}
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            marginBottom: 2,
                                            mt: 2,
                                            border: '1px solid #f2f3f7',
                                        }}
                                    >{getFullnameUser(props.account)?.charAt(0)}</Avatar>
                                    {
                                        account.sourceRegister===SourceProvider.MOBILE_BROWSER || account.sourceRegister===SourceProvider.WEB_BROWSER ?
                                            <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
                                                <CameraAltIcon />
                                            </Box> : null
                                    }

                                </Box>

                                {
                                    account.sourceRegister===SourceProvider.MOBILE_BROWSER || account.sourceRegister===SourceProvider.WEB_BROWSER ?
                                        <Box>
                                            <input
                                                type="file"
                                                onChange={selectFile}
                                                style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, opacity: 0 }}
                                            />
                                        </Box> : null
                                }

                            </Box>
                            <h3>{getFullnameUser(props.account)}</h3>
                            <p>{props.account.email}</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <form onSubmit={formik.handleSubmit}>
                                <Box sx={{ mt: 2 }}>
                                    <h5 className="mb-4">
                                        {t('account.label_personnel_details')}
                                        {!showEditInfos ? (
                                            <IconButton
                                                aria-label="upload picture"
                                                className="float-right"
                                                component="span"
                                                color="success"
                                                onClick={() => setShowEditInfos(true)}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        ) : null}
                                    </h5>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.email && Boolean(formik.errors.email)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">{t('account.label_email')}</InputLabel>
                                                <OutlinedInput
                                                    id="email"
                                                    name="email"
                                                    label={t('account.label_email')}
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    disabled
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.email && formik.errors.email}</FormHelperText>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.langKey && Boolean(formik.errors.langKey)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">{t('account.label_languages')}</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label={t('account.label_languages')}
                                                    value={formik.values.langKey}
                                                    onChange={e => {
                                                        formik.setFieldValue('langKey', e.target.value);
                                                    }}
                                                    disabled={!showEditInfos}>

                                                    {Object.keys(languages).length > 1
                                                        ? locales.map(locale => (
                                                            <MenuItem key={locale} value={locale}>
                                                                {languages[locale].name}
                                                            </MenuItem>
                                                        ))
                                                        : null}
                                                </Select>
                                                <FormHelperText id="component-helper-text">{formik.touched.langKey && formik.errors.langKey}</FormHelperText>
                                            </FormControl>
                                        </Grid>

                                    </Grid>

                                    <Grid container spacing={2} sx={{mt: 1}}>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.firstName && Boolean(formik.errors.firstName)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">{t('account.label_firstname')} *</InputLabel>
                                                <OutlinedInput
                                                    id="firstName"
                                                    name="firstName"
                                                    label={t('account.label_firstname')}
                                                    value={formik.values.firstName}
                                                    onChange={formik.handleChange}
                                                    disabled={!showEditInfos}
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.firstName && formik.errors.firstName}</FormHelperText>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.lastName && Boolean(formik.errors.lastName)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">{t('account.label_lastname')} *</InputLabel>
                                                <OutlinedInput
                                                    id="lastName"
                                                    name="lastName"
                                                    label={t('account.label_lastname')}
                                                    value={formik.values.lastName}
                                                    onChange={formik.handleChange}
                                                    disabled={!showEditInfos}
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.lastName && formik.errors.lastName}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} sx={{mt: 1}}>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.phone && Boolean(formik.errors.phone)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">{t('account.label_phone')} *</InputLabel>
                                                <OutlinedInput
                                                    id="phone"
                                                    name="phone"
                                                    label={t('account.label_phone')}
                                                    type="tel"
                                                    value={formik.values.phone}
                                                    onChange={formik.handleChange}
                                                    disabled={!showEditInfos}
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.phone && formik.errors.phone}</FormHelperText>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.address && Boolean(formik.errors.address)}>
                                                <Autocomplete
                                                    id="address"
                                                    fullWidth
                                                    size="small"
                                                    options={props.entitiesAddress}
                                                    value={formik.values.address}
                                                    onChange={(e, value) => formik.setFieldValue('address', value || '')}
                                                    autoHighlight
                                                    getOptionLabel={option => option?.city || ''}
                                                    disabled={!showEditInfos}
                                                    renderOption={(propsRender, option) => (
                                                        <Box component="li" {...propsRender}>
                                                            {option.city}
                                                        </Box>
                                                    )}
                                                    renderInput={params => (
                                                        <TextField
                                                            {...params}
                                                            label="Address"
                                                            inputProps={{
                                                                ...params.inputProps,
                                                                form: {
                                                                    autocomplete: 'off',
                                                                },
                                                                autoComplete: 'off', // disable autocomplete and autofill
                                                            }}
                                                        />
                                                    )}
                                                />
                                                <FormHelperText
                                                    id="component-helper-text">{formik.touched.address && formik.errors.address}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} sx={{mt: 1}}>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.linkProfileFacebook && Boolean(formik.errors.linkProfileFacebook)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">{t('account.label_link_profile_facebook')}</InputLabel>
                                                <OutlinedInput
                                                    id="linkProfileFacebook"
                                                    name="linkProfileFacebook"
                                                    type="url"
                                                    label={t('account.label_link_profile_facebook')}
                                                    value={formik.values.linkProfileFacebook}
                                                    onChange={formik.handleChange}
                                                    disabled={!showEditInfos}
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.linkProfileFacebook && formik.errors.linkProfileFacebook}</FormHelperText>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} md={6}>

                                        </Grid>
                                    </Grid>

                                    {showEditInfos ? (
                                        <Grid container spacing={2} sx={{mt: 2}}>
                                            <Grid item xs={12} md={12}>
                                                <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ float: 'right' }}>
                                                    <Button color="neutral" variant="outlined" startIcon={<BlockIcon />} onClick={() => setShowEditInfos(false)}>
                                                        {t('common.label_cancel')}
                                                    </Button>

                                                    <LoadingButton
                                                        color="success"
                                                        type="submit"
                                                        loading={props.loadingUpdateInfosAccount}
                                                        loadingPosition="start"
                                                        startIcon={<CheckIcon />}
                                                        variant="contained"
                                                        size="small"
                                                    >
                                                        {t('common.label_update')}
                                                    </LoadingButton>

                                                </ButtonGroup>
                                            </Grid>
                                        </Grid>
                                    ) : null}
                                </Box>
                            </form>

                        </Paper>

                        {
                            account.sourceRegister===SourceProvider.MOBILE_BROWSER || account.sourceRegister===SourceProvider.WEB_BROWSER ?
                                <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
                                    <form onSubmit={formikPassword.handleSubmit}>
                                        <Box sx={{ mt: 2 }}>
                                            <h5 className="mb-4">
                                                {t('account.label_password_details')}
                                                {!showEditPassword ? (
                                                    <IconButton
                                                        aria-label="upload picture"
                                                        className="float-right"
                                                        component="span"
                                                        color="success"
                                                        onClick={() => setShowEditPassword(true)}
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                ) : null}
                                            </h5>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <FormControl fullWidth error={formikPassword.touched.currentPassword && Boolean(formikPassword.errors.currentPassword)}>
                                                        <InputLabel htmlFor="outlined-adornment-title">{t('account.label_current_password')}</InputLabel>
                                                        <OutlinedInput
                                                            id="currentPassword"
                                                            name="currentPassword"
                                                            type={showCurrentUserPassword.showPassword ? 'text' : 'password'}
                                                            label={t('account.label_current_password')}
                                                            value={formikPassword.values.currentPassword}
                                                            onChange={formikPassword.handleChange}
                                                            disabled={!showEditPassword}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowCurrentUserPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                    >
                                                                        {showCurrentUserPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                        <FormHelperText id="component-helper-text">
                                                            {formikPassword.touched.currentPassword && formikPassword.errors.currentPassword}
                                                        </FormHelperText>
                                                    </FormControl>
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2} sx={{mt: 1}}>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl fullWidth error={formikPassword.touched.newPassword && Boolean(formikPassword.errors.newPassword)}>
                                                        <InputLabel htmlFor="outlined-adornment-title">{t('account.label_new_password')}</InputLabel>
                                                        <OutlinedInput
                                                            id="newPassword"
                                                            name="newPassword"
                                                            type={showNewPassword.showPassword ? 'text' : 'password'}
                                                            label={t('account.label_new_password')}
                                                            value={formikPassword.values.newPassword}
                                                            onChange={formikPassword.handleChange}
                                                            disabled={!showEditPassword}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowNewPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                    >
                                                                        {showNewPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                        <FormHelperText id="component-helper-text">
                                                            {formikPassword.touched.newPassword && formikPassword.errors.newPassword}
                                                        </FormHelperText>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} md={6}>
                                                    <FormControl fullWidth error={formikPassword.touched.confirmNewPassword && Boolean(formikPassword.errors.confirmNewPassword)}>
                                                        <InputLabel htmlFor="outlined-adornment-title">{t('account.label_conf_new_password')}</InputLabel>
                                                        <OutlinedInput
                                                            id="confirmNewPassword"
                                                            name="confirmNewPassword"
                                                            type={showConfPassword.showPassword ? 'text' : 'password'}
                                                            label={t('account.label_conf_new_password')}
                                                            value={formikPassword.values.confirmNewPassword}
                                                            onChange={formikPassword.handleChange}
                                                            disabled={!showEditPassword}
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
                                                            {formikPassword.touched.confirmNewPassword && formikPassword.errors.confirmNewPassword}
                                                        </FormHelperText>
                                                    </FormControl>
                                                </Grid>
                                            </Grid>

                                            {showEditPassword ? (
                                                <Grid container spacing={2} sx={{mt: 2}}>
                                                    <Grid item xs={12} md={12}>
                                                        <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ float: 'right' }}>
                                                            <Button color="neutral" variant="outlined" startIcon={<BlockIcon />} onClick={() => setShowEditPassword(false)}>
                                                                {t('common.label_cancel')}
                                                            </Button>

                                                            <LoadingButton
                                                                color="success"
                                                                type="submit"
                                                                loading={props.loadingPasswordAccount}
                                                                loadingPosition="start"
                                                                startIcon={<CheckIcon />}
                                                                variant="contained"
                                                                size="small"
                                                            >
                                                                {t('account.label_update_password')}
                                                            </LoadingButton>

                                                        </ButtonGroup>
                                                    </Grid>
                                                </Grid>
                                            ) : null}
                                        </Box>
                                    </form>
                                </Paper> : null
                        }

                    </Grid>
                </Grid>
            )}
        </Container>
    )
}

const mapStateToProps = ({ user, address }: IRootState) => ({
    loadingAccount: user.loadingAccount,
    account: user.account,

    entitiesAddress: address.entities,

    uploadAvatarSuccess: user.uploadAvatarSuccess,

    entityUpdateInfosAccount: user.entityUpdateInfosAccount,
    loadingUpdateInfosAccount: user.loadingUpdateInfosAccount,
    updateSuccessInfosAccount: user.updateSuccessInfosAccount,

    loadingPasswordAccount: user.loadingPasswordAccount,
    updateSuccessPasswordAccount: user.updateSuccessPasswordAccount,
});

const mapDispatchToProps = {
    getCurrentUser,
    updateInfosUser,
    uploadAvatar,
    updatePasswordUser
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Account);
