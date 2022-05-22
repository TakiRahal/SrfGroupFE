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
import Button from "@mui/material/Button/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import {getBaseImageUrl} from "../../../../shared/utils/utils-functions";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShortcutIcon from '@mui/icons-material/Shortcut';

export default function CartSellDetailsOffer() {
    const [value, setValue] = React.useState<string>('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1', my: 3 }}>
            <TabContext value={value}>
                <TabPanel value={value}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography variant="subtitle2" color="text.secondary" display="flex">
                                <InfoOutlinedIcon fontSize="small" sx={{mr: 0.9}}/>
                                En Stock
                            </Typography>
                            <Box sx={{my: 2}}>
                                <Typography variant="subtitle2" color="text.secondary" display="flex">
                                    <ShortcutIcon fontSize="small" sx={{mr: 0.9}}/>
                                    Quantité
                                </Typography>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 150 }} >
                                    <IconButton sx={{ p: '10px' }} aria-label="menu" >
                                        <RemoveIcon />
                                    </IconButton>
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="1"
                                        inputProps={{ 'aria-label': '1' }}
                                        type="number"
                                    />
                                    <IconButton sx={{ p: '10px' }} aria-label="directions">
                                        <AddIcon />
                                    </IconButton>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item  xs={12} md={6}>
                            <List sx={{ }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp"
                                                src={getBaseImageUrl('/assets/images/offer/details-offer/creditcard.svg')} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Paiement facile"
                                        secondary="Payer vos articles commandés au comptant lors de la livraison"
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Travis Howard"
                                                src={getBaseImageUrl('/assets/images/offer/details-offer/local-shipping.svg')}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Politique de livraison"
                                        secondary="Remise de 5% à partir de 50dt d'achats sur les produits mazroub exclusive"
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Cindy Baker"
                                                src={getBaseImageUrl('/assets/images/offer/details-offer/loop.svg')}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Politique de retours"
                                        secondary="Remboursement entre 3 et 12 jours à partir la date de réception de votre retour"
                                    />
                                </ListItem>
                            </List>
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