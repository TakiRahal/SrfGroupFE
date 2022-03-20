import React from 'react';
import Container from "@mui/material/Container/Container";
import {IRootState} from "../../shared/reducers";
import {connect} from "react-redux";
import {getCurrentUser, updateInfosUser, uploadAvatar} from "../../shared/reducers/user-reducer";
import Box from "@mui/material/Box/Box";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Grid from "@mui/material/Grid/Grid";
import Paper from "@mui/material/Paper/Paper";
import Avatar from "@mui/material/Avatar/Avatar";
import {dataUrlToFile, getFullnameUser, getUserAvatar} from "../../shared/utils/utils-functions";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {useFormik} from "formik";
import {initialValuesAccount, validationSchemaAccount} from "./validation/validation-account";
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

const initialValues = initialValuesAccount;

export interface IAccountClientProps extends StateProps, DispatchProps {}

export const Account = (props: IAccountClientProps) => {
    const [fileState, setFileState] = React.useState(getUserAvatar(props.account.id, props.account.imageUrl, props.account.sourceRegister));
    const [showEditInfos, setShowEditInfos] = React.useState(false);
    const [imageAvatar, setImageAvatar] = React.useState<any>(null);

    const {
        getCurrentUser,
        account,
        loadingAccount,
        uploadAvatar,
    } = props;

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaAccount,
        onSubmit: values => {
            const account = {
                ...props.account,
                ...values,
            };
            props.updateInfosUser(account);
        },
    });


    React.useEffect(() => {
        getCurrentUser();
    }, []);

    React.useEffect(() => {
        if (account) {

            // Set avatar
            setFileState(getUserAvatar(props.account.id, props.account.imageUrl, props.account.sourceRegister));

            formik.setValues({
                login: account.username ? account.username : '',
                firstName: account.firstName ? account.firstName : '',
                lastName: account.lastName ? account.lastName : '',
                email: account.email ? account.email : '',
                phone: account.phone ? account.phone : '',
                address: account.address ? account.address : null,
            });
        }
    }, [account]);

    React.useEffect(() => {
        if(props.updateSuccessInfosAccount){
            setShowEditInfos(false);
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

        // setImageAvatar(event.target.files[0]);
        // setFileState(URL.createObjectURL(event.target.files[0]));
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
                            Account
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
                                    />
                                    <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
                                        <CameraAltIcon />
                                    </Box>
                                </Box>

                                <Box>
                                    <input
                                        type="file"
                                        onChange={selectFile}
                                        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, opacity: 0 }}
                                    />
                                </Box>
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
                                        Personal Details
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
                                            <FormControl fullWidth error={formik.touched.login && Boolean(formik.errors.login)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">Login</InputLabel>
                                                <OutlinedInput
                                                    id="login"
                                                    name="login"
                                                    label="Login"
                                                    value={formik.values.login}
                                                    onChange={formik.handleChange}
                                                    disabled
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.login && formik.errors.login}</FormHelperText>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.email && Boolean(formik.errors.email)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">Email</InputLabel>
                                                <OutlinedInput
                                                    id="email"
                                                    name="email"
                                                    label="Email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    disabled
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.email && formik.errors.email}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} sx={{mt: 1}}>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.firstName && Boolean(formik.errors.firstName)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">Firstname</InputLabel>
                                                <OutlinedInput
                                                    id="firstName"
                                                    name="firstName"
                                                    label="Firstname"
                                                    value={formik.values.firstName}
                                                    onChange={formik.handleChange}
                                                    disabled={!showEditInfos}
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.firstName && formik.errors.firstName}</FormHelperText>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.lastName && Boolean(formik.errors.lastName)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">Lastname</InputLabel>
                                                <OutlinedInput
                                                    id="lastName"
                                                    name="lastName"
                                                    label="Lastname"
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
                                                <InputLabel htmlFor="outlined-adornment-title">Phone</InputLabel>
                                                <OutlinedInput
                                                    id="phone"
                                                    name="phone"
                                                    label="Phone"
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
                                                    id="country-select"
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

                                    {showEditInfos ? (
                                        <Grid container spacing={2} sx={{mt: 2}}>
                                            <Grid item xs={12} md={12}>
                                                <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ float: 'right' }}>
                                                    <Button color="neutral" variant="outlined" startIcon={<BlockIcon />} onClick={() => setShowEditInfos(false)}>
                                                        Cancel
                                                    </Button>

                                                    <LoadingButton
                                                        color="success"
                                                        type="submit"
                                                        loading={props.loadingUpdateInfosAccount}
                                                        loadingPosition="start"
                                                        startIcon={<CheckIcon />}
                                                        variant="contained"
                                                    >
                                                        Save
                                                    </LoadingButton>

                                                </ButtonGroup>
                                            </Grid>
                                        </Grid>
                                    ) : null}
                                </Box>
                            </form>

                        </Paper>

                        <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
                            <form onSubmit={formik.handleSubmit}>
                                <Box sx={{ mt: 2 }}>
                                    <h5 className="mb-4">
                                        Update password
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
                                        <Grid item xs={12}>
                                            <FormControl fullWidth error={formik.touched.login && Boolean(formik.errors.login)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">Login</InputLabel>
                                                <OutlinedInput
                                                    id="login"
                                                    name="login"
                                                    label="Login"
                                                    value={formik.values.login}
                                                    onChange={formik.handleChange}
                                                    disabled
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.login && formik.errors.login}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} sx={{mt: 1}}>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.firstName && Boolean(formik.errors.firstName)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">Firstname</InputLabel>
                                                <OutlinedInput
                                                    id="firstName"
                                                    name="firstName"
                                                    label="Firstname"
                                                    value={formik.values.firstName}
                                                    onChange={formik.handleChange}
                                                    disabled={!showEditInfos}
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.firstName && formik.errors.firstName}</FormHelperText>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth error={formik.touched.lastName && Boolean(formik.errors.lastName)} size="small">
                                                <InputLabel htmlFor="outlined-adornment-title">Lastname</InputLabel>
                                                <OutlinedInput
                                                    id="lastName"
                                                    name="lastName"
                                                    label="Lastname"
                                                    value={formik.values.lastName}
                                                    onChange={formik.handleChange}
                                                    disabled={!showEditInfos}
                                                />
                                                <FormHelperText id="component-helper-text">{formik.touched.lastName && formik.errors.lastName}</FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    {showEditInfos ? (
                                        <Grid container spacing={2} sx={{mt: 2}}>
                                            <Grid item xs={12} md={12}>
                                                <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ float: 'right' }}>
                                                    <Button color="neutral" variant="outlined" startIcon={<BlockIcon />} onClick={() => setShowEditInfos(false)}>
                                                        Cancel
                                                    </Button>

                                                    <LoadingButton
                                                        color="success"
                                                        type="submit"
                                                        loading={props.loadingUpdateInfosAccount}
                                                        loadingPosition="start"
                                                        startIcon={<CheckIcon />}
                                                        variant="contained"
                                                    >
                                                        Save
                                                    </LoadingButton>

                                                </ButtonGroup>
                                            </Grid>
                                        </Grid>
                                    ) : null}
                                </Box>
                            </form>
                        </Paper>

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
    updateSuccessInfosAccount: user.updateSuccessInfosAccount
});

const mapDispatchToProps = {
    getCurrentUser,
    updateInfosUser,
    uploadAvatar
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Account);