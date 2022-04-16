import {IAddress} from "../../../shared/model/address.model";
import List from "@mui/material/List/List";
import ListSubheader from "@mui/material/ListSubheader/ListSubheader";
import ListItem from "@mui/material/ListItem/ListItem";
import FormControl from "@mui/material/FormControl/FormControl";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import Box from "@mui/material/Box/Box";
import TextField from "@mui/material/TextField/TextField";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography/Typography";
import Grid from "@mui/material/Grid/Grid";
import Slider from "@mui/material/Slider/Slider";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";

function valuetext(value: number) {
    return `${value}°C`;
}

export function FilterOffer({listAddress}: { listAddress: IAddress[] }) {

    const [value, setValue] = React.useState<number[]>([20, 50]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const {t} = useTranslation();

    return (
        <Box>
            <List
                sx={{width: '100%', mb: 4}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        FILTRER PAR
                    </ListSubheader>
                }
            >

                <ListItem sx={{my: 2}}>
                    <FormControl fullWidth variant="standard">
                        <Autocomplete
                            id="typeOffer"
                            options={listAddress}
                            autoHighlight
                            getOptionLabel={(option) => option.city || ''}
                            renderOption={(propsRender, option) => (
                                <Box component="li" {...propsRender}>
                                    {option.city}
                                </Box>
                            )}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    label={t('common.address')}
                                    variant="standard"
                                    inputProps={{
                                        ...params.inputProps,
                                        form: {
                                            autocomplete: 'off',
                                        },
                                        autoComplete: 'off', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        />
                    </FormControl>
                </ListItem>
                <ListItem>
                    <Box sx={{width: '100%', my: 2}}>
                        <Typography id="input-slider" gutterBottom>
                            Price
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                min
                            </Grid>
                            <Grid item xs>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    color="secondary"
                                />
                            </Grid>
                            <Grid item>
                                max
                            </Grid>
                        </Grid>
                    </Box>
                </ListItem>
                <ListItemButton>
                    Drafts
                </ListItemButton>
            </List>
        </Box>
    );
}