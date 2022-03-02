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
                height: 250,
                backgroundColor: 'rgb(0 0 0 / 74%)',
                color:'#fff',
                textAlign: 'center'
            }}
        >
            <Container maxWidth="xl" className="container-full-slide">
                <Grid container className="grid-full-slide">
                    <Grid item xs={12} md={3} className="text-center item-full-slide">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://next.material-ui.com/static/images/avatar/1.jpg"
                            sx={{
                                width: 56,
                                height: 56,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 5,
                            }}
                        />
                        <h2 className="mt-2">Category 0</h2>
                        <p>Description of category 0</p>
                    </Grid>
                    <Grid item xs={12} md={3} className="text-center">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://next.material-ui.com/static/images/avatar/1.jpg"
                            sx={{
                                width: 56,
                                height: 56,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 5,
                            }}
                        />
                        <h2 className="mt-2">Category 0</h2>
                        <p>Description of category 0</p>
                    </Grid>
                    <Grid item xs={12} md={3} className="text-center">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://next.material-ui.com/static/images/avatar/1.jpg"
                            sx={{
                                width: 56,
                                height: 56,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 5,
                            }}
                        />
                        <h2 className="mt-2">Category 0</h2>
                        <p>Description of category 0</p>
                    </Grid>
                    <Grid item xs={12} md={3} className="text-center">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://next.material-ui.com/static/images/avatar/1.jpg"
                            sx={{
                                width: 56,
                                height: 56,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 5,
                            }}
                        />
                        <h2 className="mt-2">Category 0</h2>
                        <p>Description of category 0</p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
