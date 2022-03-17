import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/SendAndArchive';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Grid from '@mui/material/Grid/Grid';
import Avatar from '@mui/material/Avatar/Avatar';
import Stack from '@mui/material/Stack/Stack';
import {getBaseImageUrl} from "../../utils/utils-functions";
import packageJson from '../../../../package.json';

function Copyright() {
    return (
        <Box>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 3 }}>
                {'Copyright © '}
                <Link color="inherit" href="https://www.linkedin.com/in/rahal-taki-eddine-51952ba4/" target="_blank">
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


export default function Footer(){
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper' }}>
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
                <Box sx={{ display: 'flex', mr: 1 }}>
                    <IconButton aria-label="menu">
                        <SendIcon />
                    </IconButton>
                    <Typography paragraph>Inscrivez-vous à la newsletter</Typography>
                </Box>
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: { xs: '100%', sm: 400 } }}>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Entrez votre adresse Mail"
                        inputProps={{ 'aria-label': 'Entrez votre adresse Mail' }}
                        size="small"
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton sx={{ p: '10px' }} aria-label="directions">
                        Inscrire
                    </IconButton>
                </Paper>
            </Toolbar>
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
                            <Avatar alt="facebook" src={getBaseImageUrl('/assets/images/footer/facebook.png')} />
                            <Avatar alt="instagram" src={getBaseImageUrl('/assets/images/footer/instagram.png')}/>
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
                            A Propos
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
                            Apps mobile
                        </Typography>
                        <Typography component="p" align="center">
                            <img src={getBaseImageUrl('/assets/images/footer/android.svg')} style={{marginRight: '2px'}} width="100" alt='Logo Android'/>
                            <img src={getBaseImageUrl('/assets/images/footer/ios.svg')} style={{marginLeft: '2px'}} width="100"  alt='Logo iOS'/>
                        </Typography>
                    </Grid>
                </Grid>

                <Copyright />
            </div>
        </Box>
    );
}