import * as React from 'react';
import Paper from "@mui/material/Paper/Paper";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import SearchAppBar from "../../../shared/layout/menus/SearchAppBar";
import {getBaseImageUrl} from "../../../shared/utils/utils-functions";

const defaultImage = getBaseImageUrl('/assets/images/home/default_top_home.jpg');

export default function TopHomeSlides(){

    return (
        <div>
            <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    marginBottom: 20,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${defaultImage})`,
                    height: { sx: 'auto', md: 700 },
                }}
            >
                {/* Increase the priority of the hero background image */}
                {
                    <img
                        style={{ display: 'none' }}
                        src={defaultImage}
                        alt='bg'
                        onError={(e: any) => {
                            e.target.onerror = null;
                            e.target.src = defaultImage;
                        }}
                    />
                }
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />
                <Grid container>
                    <Grid item md={12}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
                            }}
                        >
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                title
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                description
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        position: { xs: 'relative', md: 'absolute' },
                        bottom: -50,
                        right: 0,
                        left: 0,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        backgroundColor: '#fff',
                        maxWidth: 959,
                        height: { sx: 'auto', md: 100 },
                    }}
                >
                    <SearchAppBar />
                </Box>
            </Paper>
        </div>
    )
}