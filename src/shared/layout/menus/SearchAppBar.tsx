import * as React from 'react';
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
import {TypeOfferEnum} from "../../enums/type-offer.enum";
import {useHistory} from "react-router";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {connect} from "react-redux";
import {IRootState} from "../../reducers";
import {useFormik} from "formik";
import {initialValuesSearchAppBar, validationSchemSearchAppBar} from "./validation/inti-value-search-app-bar";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import {getFullUrlWithParams} from "../../utils/utils-functions";
import DeleteIcon from '@mui/icons-material/Delete';

const initialValues = initialValuesSearchAppBar;

export interface ISearchAppBarProps extends StateProps, DispatchProps {
}

export const SearchAppBar = (props: ISearchAppBarProps) => {
    const history = useHistory();
    const { search } = useLocation();

    const {entitiesAddress} = props;

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemSearchAppBar,
        onSubmit: (values: any) => {
            let queryParams = getFullUrlWithParams(values);
            console.log('queryParams ', queryParams);
            history.push(ALL_APP_ROUTES.SEARCH+queryParams);
        },
    });

    React.useEffect(() => {
        const values = queryString.parse(search);
        formik.setFieldValue('title', values.title || '');
        formik.setFieldValue('typeOffer', values.typeOffer || '');
    }, [search])

    React.useEffect(() => {
        const values = queryString.parse(search);
        formik.setFieldValue('address', entitiesAddress.find(add => add?.id?.toString() === values?.address?.toString())  || null);
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


const mapStateToProps = ({address, category}: IRootState) => ({

    loadingEntitiesAddress: address.loadingEntities,
    entitiesAddress: address.entities,
    updateSuccessAddress: address.updateSuccess,

    loadingEntitiesCategory: category.loadingEntities,
    entitiesCategory: category.entities,
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SearchAppBar);