import * as React from 'react';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar/Avatar';
import {useTranslation} from "react-i18next";

export default function ThirdHorizentalListHomeClient() {

    const { t } = useTranslation();

    return (
        <Box
            style={{
                marginTop: 40,
                // height: 250,
                backgroundColor: 'rgb(0 0 0 / 74%)',
                color:'#fff',
                textAlign: 'center'
            }}
        >
            <Container maxWidth="xl" className="container-full-slide">
                <Grid container className="grid-full-slide">
                    <Grid item xs={12} md={3} className="text-center item-full-slide">
                        <Avatar
                            sx={{
                                width: 56,
                                height: 56,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 5,
                                bgcolor: '#fff',
                                color: '#000',
                                fontSize: '25px'
                            }}
                        >01</Avatar>
                        <h2 className="mt-2">{t('home.steps.title_create_account')}</h2>
                        <p>{t('home.steps.sub_title_create_account')}</p>
                    </Grid>
                    <Grid item xs={12} md={3} className="text-center item-full-slide">
                        <Avatar
                            sx={{
                                width: 56,
                                height: 56,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 5,
                                bgcolor: '#fff',
                                color: '#000',
                                fontSize: '25px'
                            }}
                        >02</Avatar>
                        <h2 className="mt-2">{t('home.steps.title_login')}</h2>
                        <p>{t('home.steps.sub_title_login')}</p>
                    </Grid>
                    <Grid item xs={12} md={3} className="text-center item-full-slide">
                        <Avatar
                            sx={{
                                width: 56,
                                height: 56,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 5,
                                bgcolor: '#fff',
                                color: '#000',
                                fontSize: '25px'
                            }}
                        >03</Avatar>
                        <h2 className="mt-2">{t('home.steps.title_participate')}</h2>
                        <p>{t('home.steps.sub_title_participate')}</p>
                    </Grid>
                    <Grid item xs={12} md={3} className="text-center item-full-slide">
                        <Avatar
                            sx={{
                                width: 56,
                                height: 56,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 5,
                                bgcolor: '#fff',
                                color: '#000',
                                fontSize: '25px'
                            }}
                        >04</Avatar>
                        <h2 className="mt-2">{t('home.steps.title_win_auction')}</h2>
                        <p>{t('home.steps.sub_title_win_auction')}</p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
