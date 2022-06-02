import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SendIcon from '@mui/icons-material/SendAndArchive';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Grid from '@mui/material/Grid/Grid';
import Avatar from '@mui/material/Avatar/Avatar';
import Stack from '@mui/material/Stack/Stack';
import {getBaseImageUrl} from "../../utils/utils-functions";
import packageJson from '../../../../package.json';
import {useFormik} from "formik";
import {initialValuesSubscribeNewsLetter, validationSchemaSubscribeNewsLetter} from './validation/initial-values-subscribe-news-letter';
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import {useTranslation} from "react-i18next";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {Link} from "react-router-dom";

function Copyright() {
    return (
        <Box>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 3 }}>
                {'Copyright © '}
                <Link color="inherit" to="https://www.linkedin.com/in/rahal-taki-eddine-51952ba4/" target="_blank">
                    Taki Eddine Rahal
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ py: 1 }}>
                V {packageJson.version}
            </Typography>
        </Box>
    );
}

const initialValues = initialValuesSubscribeNewsLetter;

export default function Footer({sendCallback, addSuccess, loadingEntity}:
                                {sendCallback: any, addSuccess: boolean, loadingEntity: boolean}){

    const { t } = useTranslation();

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaSubscribeNewsLetter,
        onSubmit: values => {
            sendCallback(values);
        },
    });

    React.useEffect(() => {
        if(addSuccess){
            formik.resetForm();
        }
    }, [addSuccess])

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper' }}>
            <form onSubmit={formik.handleSubmit}>
                <Toolbar
                    component="nav"
                    variant="dense"
                    sx={{
                        backgroundColor: '#e2c498',
                        justifyContent: 'center',
                        paddingTop: 2,
                        paddingBottom: 2,
                        display: { xs: 'block', sm: 'flex;' },
                    }}
                >
                    <Typography sx={{ fontSize: 20, mr: 1 }} color="text.secondary" display="flex">
                        <SendIcon sx={{mr: 0.9}}/> Inscrivez-vous à la newsletter
                    </Typography>
                    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: { xs: '100%', sm: 400 } }}>
                        <InputBase
                            id="email"
                            name="email"
                            sx={{ ml: 1, flex: 1 }}
                            placeholder={t('common.label_email')}
                            inputProps={{ 'aria-label': t('common.label_email') }}
                            size="small"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error
                        />
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <LoadingButton loading={false} variant="text" color="neutral" type="submit">
                            {t('common.label_subscribe')}
                        </LoadingButton>
                    </Paper>
                    {
                        formik.touched.email && formik.errors.email ? <Typography sx={{ mx: 1 }} color="error" display="flex">
                            Email required
                        </Typography> : null
                    }
                </Toolbar>
            </form>
            <div>
                <Typography variant="h5" align="center" gutterBottom sx={{ pt: 3 }}>
                    SRF
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Follow us
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mb: 3 }}>
                            <a href="https://www.facebook.com/profile.php?id=100054409273167" target="_blank">
                                <Avatar alt="facebook" src={getBaseImageUrl('/assets/images/footer/facebook.png')} />
                            </a>
                            <a href="https://www.instagram.com/srfgroup/" target="_blank">
                                <Avatar alt="instagram" src={getBaseImageUrl('/assets/images/footer/instagram.png')}/>
                            </a>
                            <Avatar alt="youtube" src={getBaseImageUrl('/assets/images/footer/youtube.png')} />
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Nos services
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                            Qui somme nous
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                            Politique de confidentialité
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                            Politique des cookies
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                            Contact
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                            FAQ
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" align="center" gutterBottom>
                            {t('footer.label_about_us')}
                        </Typography>

                        <Link to={ALL_APP_ROUTES.SUPPORT.ABOUT_US}>
                            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                                {t('footer.label_Who_are_we')}
                            </Typography>
                        </Link>

                        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                            {t('footer.label_privacy_policy')}
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                            Politique des cookies
                        </Typography>
                        <Link to={ALL_APP_ROUTES.SUPPORT.CONTACT_US}>
                            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                                Contact
                            </Typography>
                        </Link>
                        <Link to={ALL_APP_ROUTES.SUPPORT.FAQ}>
                            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                                FAQ
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Apps mobile
                        </Typography>
                        <Typography component="p" align="center">
                            <img src={getBaseImageUrl('/assets/images/footer/android.svg')}
                                 style={{marginRight: '2px'}}
                                 width="100"
                                 height="30"
                                 alt='Logo Android'/>
                            <img src={getBaseImageUrl('/assets/images/footer/ios.svg')}
                                 style={{marginLeft: '2px'}}
                                 width="100"
                                 height="30"
                                 alt='Logo iOS'/>
                        </Typography>
                    </Grid>
                </Grid>

                <Copyright />
            </div>
        </Box>
    );
}