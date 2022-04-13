import * as React from 'react';
import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs/Breadcrumbs';
import Typography from '@mui/material/Typography/Typography';
import Container from '@mui/material/Container/Container';
import { useFormik } from 'formik';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar/ListItemAvatar';
import Avatar from '@mui/material/Avatar/Avatar';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import Divider from '@mui/material/Divider/Divider';
import {initialValuesContactUs, validationSchemaContactUs} from "./validation/init-value-contact-us";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import {IRootState} from "../../shared/reducers";
import { createEntity as createEntityContactUs } from '../../shared/reducers/contact-us.reducer';
// import { reset as resetContactUs } from '../../shared/reducers/contact-us.reducer';
import {getBaseImageUrl} from "../../shared/utils/utils-functions";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import ReCAPTCHA from "react-google-recaptcha";
import {AllAppConfig} from "../../core/config/all-config";

const initialValues = initialValuesContactUs;

export interface IContactUsUpdateProps extends StateProps, DispatchProps {}

export const ContactUs = (props: IContactUsUpdateProps) => {

    const [recaptcha, setRecaptcha] = React.useState('');
    const recaptchaRef = React.createRef<any>();

    const {
        loadingEntity,
        addSuccessEntity,createEntityContactUs,
        // resetContactUs
    } = props;

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaContactUs,
        onSubmit: values => {
            console.log('values ', values);
            createEntityContactUs(values);
        },
    });

    useEffect(() => {
        console.log('addSuccessEntity ', addSuccessEntity);
        if (addSuccessEntity) {
            formik.resetForm();
            // resetContactUs();
            recaptchaRef?.current?.reset();
        }
    }, [addSuccessEntity]);

    const onChange = (value: any) => {
        console.log("Captcha value:", value);
        // setRecaptcha(value);
        formik.setFieldValue('captchaResponse', value);
    }

    return (
        <div>
            <Container maxWidth="xl" sx={{ mb: 5 }}>
                <Grid
                    container
                    style={{
                        paddingTop: 10,
                    }}
                >
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                                SRF
                            </Link>
                            <Typography color="text.primary">ContactUS</Typography>
                        </Breadcrumbs>
                    </Grid>
                </Grid>

                <Grid container sx={{ mt: 6 }}>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <h3 className="mb-3">Ecrivez-nous</h3>

                            <form onSubmit={formik.handleSubmit}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={6}>
                                        <FormControl fullWidth error={formik.touched.name && Boolean(formik.errors.name)} size="small">
                                            <InputLabel htmlFor="outlined-adornment-title">Name</InputLabel>
                                            <OutlinedInput
                                                id="name"
                                                name="name"
                                                label="Name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                            />
                                            <FormHelperText id="component-helper-text">{formik.touched.name && formik.errors.name}</FormHelperText>
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
                                                type="email"
                                            />
                                            <FormHelperText id="component-helper-text">{formik.touched.email && formik.errors.email}</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <FormControl fullWidth error={formik.touched.subject && Boolean(formik.errors.subject)} size="small">
                                            <InputLabel htmlFor="outlined-adornment-title">Subject</InputLabel>
                                            <OutlinedInput
                                                id="subject"
                                                name="subject"
                                                label="Subject"
                                                value={formik.values.subject}
                                                onChange={formik.handleChange}
                                            />
                                            <FormHelperText id="component-helper-text">{formik.touched.subject && formik.errors.subject}</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={12}>
                                        <FormControl fullWidth sx={{ mt: 3 }} error={formik.touched.message && Boolean(formik.errors.message)} size="small">
                                            <InputLabel htmlFor="outlined-adornment-amount">Message</InputLabel>
                                            <OutlinedInput
                                                id="message"
                                                name="message"
                                                label="Message"
                                                value={formik.values.message}
                                                onChange={formik.handleChange}
                                                multiline
                                                maxRows={4}
                                                rows={4}
                                            />
                                            <FormHelperText id="component-helper-text">{formik.touched.message && formik.errors.message}</FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={12}>
                                        <ReCAPTCHA
                                            sitekey={AllAppConfig.RECAPTCHA_CONTACT_US.SITE_KEY}
                                            onChange={onChange}
                                            ref={recaptchaRef}
                                        />
                                        <FormHelperText className="red-color">{formik.touched.captchaResponse && formik.errors.captchaResponse}</FormHelperText>
                                    </Grid>

                                    <Grid item xs={12} md={12}>
                                        <LoadingButton loading={loadingEntity} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color="neutral" type="submit">
                                            Envoyer le message
                                        </LoadingButton>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{ p: 2 }}>
                        <Typography variant="h5" color="text.secondary">
                            A votre écoute
                        </Typography>

                        <List sx={{}}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Email" src={`${getBaseImageUrl('/assets/images/contact-us/mail.png')}`} />
                                </ListItemAvatar>
                                <ListItemText primary="Email" secondary="srfgroup.contact@gmail.com" />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Call" src={`${getBaseImageUrl('/assets/images/contact-us/call.png')}`} />
                                </ListItemAvatar>
                                <ListItemText primary="Phone" secondary="+216 21 636 339 -  +216 73 900 850" />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Location" src={`${getBaseImageUrl('/assets/images/contact-us/location.png')}`} />
                                </ListItemAvatar>
                                <ListItemText primary="Address" secondary="Rue Montreal Skanes ElMechref, 5000, Monastir, Tunisia" />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Location" src={`${getBaseImageUrl('/assets/images/contact-us/location.png')}`} />
                                </ListItemAvatar>
                                <ListItemText primary="Google Maps" secondary="Tunis, Tunisia" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
            {/*<ContactUsMap />*/}
        </div>
    );
};

const mapStateToProps = ({contactUs}: IRootState) => ({
    loadingEntity: contactUs.loadingEntity,
    contactUsEntity: contactUs.entity,
    addSuccessEntity: contactUs.addSuccess
});

const mapDispatchToProps = {
    createEntityContactUs,
    // resetContactUs,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
