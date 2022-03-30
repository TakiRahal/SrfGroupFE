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
import {useTranslation} from "react-i18next";
import AppBar from "@mui/material/AppBar/AppBar";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridOnIcon from '@mui/icons-material/GridOn';
import {TypeDisplaySearchOffers} from "../../enums/type-offer.enum";


const initialValues = initialValuesSearchAppBar;

export function SearchAppBar({entitiesAddress, searchCalback, typeDisplayCallback}: {entitiesAddress: IAddress[], searchCalback: any, typeDisplayCallback?: any}) {

    const [typeDisplayOffers, setTypeDisplayOffers] = React.useState<TypeDisplaySearchOffers>(TypeDisplaySearchOffers.Grid);

    const { search } = useLocation();

    const { t } = useTranslation();

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

    const changeTypeDisplayOffers = () => {
        setTypeDisplayOffers(typeDisplayOffers===TypeDisplaySearchOffers.Grid ? TypeDisplaySearchOffers.List : TypeDisplaySearchOffers.Grid);
        typeDisplayCallback(typeDisplayOffers===TypeDisplaySearchOffers.Grid ? TypeDisplaySearchOffers.List : TypeDisplaySearchOffers.Grid);
    }

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>

                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="default" sx={{backgroundColor: '#fff'}}>
                        <Toolbar sx={{
                            display: {xs: 'block', sm: 'flex'},
                            paddingRight: {md: 0},
                            paddingLeft: {md: 0},
                        }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mx: 1, display: {xs: 'none', md: 'inline-flex'} }}
                                onClick={() => changeTypeDisplayOffers()}
                            >
                                {typeDisplayOffers===TypeDisplaySearchOffers.Grid ? <FormatListBulletedIcon /> : <GridOnIcon />}

                            </IconButton>
                            <FormControl variant="standard" sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0,  mx: 1, width: {xs: '100%', md: 'auto'}}}>
                                <TextField id="title"
                                           name="title"
                                           label={t('common.label_search')}
                                           variant="standard"
                                           value={formik.values.title}
                                           onChange={formik.handleChange}/>
                            </FormControl>

                            <FormControl variant="standard" sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0, mx: 1, width: {xs: '100%', md: 'auto'}}}>
                                <Autocomplete
                                    id="country-select"
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

                            <FormControl variant="standard" sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0,  mx: 1, width: {xs: '100%', md: 'auto'}}}>
                                <InputLabel id="demo-simple-select-label">{t('common.type_offer')}</InputLabel>
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

                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    sx={{ mx: 1, display: {xs: 'inline-flex', md: 'none'} }}
                                    onClick={() => changeTypeDisplayOffers()}
                                >
                                    {typeDisplayOffers===TypeDisplaySearchOffers.Grid ? <FormatListBulletedIcon /> : <GridOnIcon />}

                                </IconButton>
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
                                    {t('common.label_search')}
                                </Button>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </form>
        </Box>
    );
}