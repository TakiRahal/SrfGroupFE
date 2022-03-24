import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField/TextField';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import IconButton from '@mui/material/IconButton/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterIcon from '@mui/icons-material/FilterListSharp';
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import DeleteIcon from '@mui/icons-material/Delete';
import {
    initialValuesSearchAppBar,
    validationSchemSearchAppBar
} from "../../../shared/layout/menus/validation/inti-value-search-app-bar";
import {useFormik} from "formik";
import {useLocation} from "react-router-dom";
import {TypeOfferEnum} from "../../../shared/enums/type-offer.enum";
import {IAddress} from "../../../shared/model/address.model";
import queryString from "query-string";


const initialValues = initialValuesSearchAppBar;

export function SearchAppBar({entitiesAddress, searchCalback}: {entitiesAddress: IAddress[], searchCalback: any}) {
    const { search } = useLocation();

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemSearchAppBar,
        onSubmit: (values: any) => {
            searchCalback(values);
        },
    });


    React.useEffect(() => {
        const objParams = queryString.parse(search);
        formik.setFieldValue('title', objParams.title || '');
        formik.setFieldValue('typeOffer', objParams.typeOffer || '');
    }, [search])

    React.useEffect(() => {
        const values: any = queryString.parse(search);
        Object.keys(values).map((key) => {
            if(key==='address.id'){
                formik.setFieldValue('address', entitiesAddress.find(add => add?.id?.toString() === values[key]?.toString())  || null);
            }
        });
    }, [entitiesAddress])

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Paper elevation={16} sx={{height: {sx: 'auto', md: 100}}}>
                    <Toolbar
                        sx={{
                            display: {xs: 'block', sm: 'flex'},
                            justifyContent: 'space-between',
                            overflowX: 'auto',
                            borderColor: 'divider',
                            backgroundColor: '#fff',
                            paddingRight: {md: 0},
                        }}
                    >
                        <IconButton color="inherit" aria-label="upload picture" component="span"
                                    sx={{display: {xs: 'none', md: 'inline-flex'}}}>
                            <FilterIcon/>
                        </IconButton>
                        <FormControl variant="standard"
                                     sx={{m: {xs: 'auto', md: 1}, minWidth: 230, width: {xs: '100%', md: 'auto'}}}>
                            <TextField id="title"
                                       name="title"
                                       label="Search"
                                       variant="standard"
                                       value={formik.values.title}
                                       onChange={formik.handleChange}/>
                        </FormControl>

                        <FormControl sx={{m: {xs: 'auto', md: 1}, minWidth: 230, width: {xs: '100%', md: 'auto'}}}
                                     error={formik.touched.address && Boolean(formik.errors.address)}>
                            <Autocomplete
                                id="country-select"
                                fullWidth
                                size="small"
                                options={entitiesAddress}
                                value={formik.values.address}
                                onChange={(e, value) => formik.setFieldValue('address', value || '')}
                                autoHighlight
                                getOptionLabel={option => option?.city || ''}
                                renderOption={(propsRender, option) => (
                                    <Box component="li" {...propsRender}>
                                        {option.city}
                                    </Box>
                                )}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        label="Address"
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
                            <FormHelperText
                                id="component-helper-text">{formik.touched.address && formik.errors.address}</FormHelperText>
                        </FormControl>

                        <FormControl variant="standard"
                                     sx={{m: {xs: 'auto', md: 1}, minWidth: 230, width: {xs: '100%', md: 'auto'}}}>
                            <InputLabel id="demo-simple-select-label">Type offre</InputLabel>
                            <Select labelId="demo-simple-select-label"
                                    id="typeOffer"
                                    name="typeOffer"
                                    value={formik.values.typeOffer}
                                    onChange={formik.handleChange}
                                    label="Type">
                                <MenuItem value=''><DeleteIcon /> Clear select</MenuItem>
                                <MenuItem value={TypeOfferEnum.Sell}>À vendre</MenuItem>
                                <MenuItem value={TypeOfferEnum.Rent}>À louer</MenuItem>
                                <MenuItem value={TypeOfferEnum.Find}>À trouver</MenuItem>
                            </Select>
                        </FormControl>

                        <Box sx={{my: {xs: 2, md: 'auto'}}}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: 100,
                                    height: {xs: 'auto', md: 100},
                                    borderRadius: 'unset',
                                    backgroundColor: '#3f3f40',
                                    marginRight: '0.8rem',
                                    color: '#fff',
                                    display: {xs: 'inline-flex', md: 'none'},
                                }}
                                color="neutral"
                            >
                                <FilterIcon/>
                            </Button>

                            <Button
                                variant="contained"
                                sx={{
                                    height: {xs: 'auto', md: 100},
                                    borderRadius: 'unset',
                                    backgroundColor: '#3f3f40',
                                    color: '#fff',
                                }}
                                startIcon={<SearchIcon/>}
                                color="neutral"
                                type="submit"
                            >
                                Search
                            </Button>
                        </Box>
                    </Toolbar>
                </Paper>
            </form>
        </Box>
    );
}