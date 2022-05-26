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
import {useFormik} from "formik";
import {
    initialValuesQuantityOffer,
    validationSchemaQuantityOffer
} from "../validation/initial-values-add-comment-offer";
import {IOffer} from "../../../../shared/model/offer.model";
import {IUser} from "../../../../shared/model/user.model";
import TextField from "@mui/material/TextField/TextField";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import {useTranslation} from "react-i18next";
import {InputQuantity} from "../../../../shared/components/input-quantity/InputQuantity";

// const initialValues = initialValuesQuantityOffer;

export default function CartSellDetailsOffer({parentCallbackAddCart, loadingAddCart}:
    {parentCallbackAddCart: Function, loadingAddCart: boolean}) {
    const [value, setValue] = React.useState<string>('1');
    const [valueQuantity, setValueQuantity] = React.useState<number>(1);

    const { t } = useTranslation();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    // const formik = useFormik({
    //     initialValues,
    //     validationSchema: validationSchemaQuantityOffer,
    //     onSubmit: values => {
    //         if (isAuthenticated) {
    //             parentCallbackAddCart(values);
    //         }
    //     },
    // });
    //
    // const changeQuantity = (type: string) => {
    //     if(type==='+' && formik.values.quantity < 100){
    //         formik.setFieldValue('quantity', formik.values.quantity+1);
    //     }
    //     else if( formik.values.quantity > 1 ){
    //         formik.setFieldValue('quantity', formik.values.quantity-1);
    //     }
    // }

    const changeQuantity = (data: any) => {
        console.log('data ', data);
        setValueQuantity(data);
    }

    const addNewCart = () => {
        console.log('valueQuantity ', valueQuantity);
        parentCallbackAddCart({
            quantity: valueQuantity
        });
    }

    return (
        <Box sx={{ width: '100%', typography: 'body1', my: 3 }}>
            {/*<form onSubmit={formik.handleSubmit}>*/}
                <TabContext value={value}>
                    <TabPanel value={value}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle2" color="text.secondary" display="flex">
                                    <InfoOutlinedIcon fontSize="small" sx={{mr: 0.9}}/>
                                    En Stock
                                </Typography>
                                <Box sx={{my: 2}}>
                                    <InputQuantity parentCallChangeQuantity={changeQuantity} />
                                    {/*<Typography variant="subtitle2" color="text.secondary" display="flex">*/}
                                    {/*    <ShortcutIcon fontSize="small" sx={{mr: 0.9}}/>*/}
                                    {/*    Quantité*/}
                                    {/*</Typography>*/}
                                    {/*<Paper*/}
                                    {/*    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 150 }} >*/}
                                    {/*    <IconButton sx={{ p: '10px' }} aria-label="menu"  onClick={() => changeQuantity('-')}>*/}
                                    {/*        <RemoveIcon />*/}
                                    {/*    </IconButton>*/}
                                    {/*    <InputBase*/}
                                    {/*        sx={{ ml: 1, flex: 1 }}*/}
                                    {/*        placeholder="1"*/}
                                    {/*        inputProps={{ 'aria-label': '1' }}*/}
                                    {/*        type="number"*/}
                                    {/*        value={formik.values.quantity}*/}
                                    {/*        onChange={formik.handleChange}*/}
                                    {/*    />*/}
                                    {/*    <IconButton sx={{ p: '10px' }} aria-label="directions" onClick={() => changeQuantity('+')}>*/}
                                    {/*        <AddIcon />*/}
                                    {/*    </IconButton>*/}
                                    {/*</Paper>*/}
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
                            <LoadingButton loading={loadingAddCart} fullWidth
                                           variant="contained"
                                           color="success"
                                           onClick={addNewCart}>
                                {t('common.label_add')}
                            </LoadingButton>
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
            {/*</form>*/}
        </Box>
    );
}