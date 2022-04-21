import * as React from 'react';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import {useEffect, useState} from 'react';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import Box from '@mui/material/Box/Box';
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import TextField from '@mui/material/TextField/TextField';
import Grid from '@mui/material/Grid/Grid';
import FormLabel from "@mui/material/FormLabel/FormLabel";
import RadioGroup from "@mui/material/RadioGroup/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Radio from "@mui/material/Radio/Radio";

export default function OptionsSellAddOffer(props: any) {
    const {formik} = props;

    return (
        <Box>
            <Grid container spacing={2} sx={{my: 2}}>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={formik.touched.amount && Boolean(formik.errors.amount)}>
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            id="amount"
                            type="number"
                            value={formik.values.amount}
                            onChange={formik.handleChange}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Amount"
                            size="small"
                        />
                        <FormHelperText
                            id="component-helper-text">{formik.touched.amount && formik.errors.amount}</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{my: 2}}>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Type de contact</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio/>} label="Le client doit contacter vous directement"/>
                            <FormControlLabel value="male" control={<Radio/>} label="Le client peut passer une commande"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

        </Box>
    );
}
