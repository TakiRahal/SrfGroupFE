import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Divider from "@mui/material/Divider/Divider";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";

export default function CartSellDetailsOffer() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1', my: 3 }}>
            <TabContext value={value}>
                <TabPanel value="1">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography variant="subtitle2" color="text.secondary" display="flex">
                                <InfoOutlinedIcon fontSize="small" sx={{mr: 0.9}}/>
                                En Stock
                            </Typography>

                        </Grid>
                        <Grid item  xs={12} md={6}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
                        </Grid>
                    </Grid>
                    <Box sx={{  my: 2 }} display="flex" justifyContent="center">
                        <Button variant="contained" color="success">Ajouter</Button>
                    </Box>
                </TabPanel>
                <TabPanel value="2">Acheter directement</TabPanel>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="Ajouter au panier" value="1" />
                        <Tab label="Acheter directement" value="2" />
                    </TabList>
                </Box>
            </TabContext>
        </Box>
    );
}