import * as React from 'react';
import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar/Avatar';

export default function ThirdHorizentalListHomeClient() {
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
                        <h2 className="mt-2">CRÉEZ VOTRE COMPTE</h2>
                        <p>Créez votre compte et Complétez votre profil.</p>
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
                        <h2 className="mt-2">CONNECTEZ VOUS</h2>
                        <p>Connectez Vous.</p>
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
                        <h2 className="mt-2">PARTICIPEZ AUX ENCHÈRES</h2>
                        <p>Participez aux enchères que vous intéresses..</p>
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
                        <h2 className="mt-2">REMPORTEZ L'ENCHÈRE</h2>
                        <p>Remportez l'enchère et gagnez un produit à moins de 30% de sa valeur !.</p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
