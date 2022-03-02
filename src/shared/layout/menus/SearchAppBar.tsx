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

interface MainFeaturedPostProps {
    post: {
        description: string;
        image: string;
        imageText: string;
        linkText: string;
        title: string;
    };
}

export default function SearchAppBar() {
    const [age, setAge] = React.useState('');
    const history = useHistory();

    const handleChange = (event: any) => {
        setAge(event.target.value);
    };

    const searchNavigate = () => {
        history.push(ALL_APP_ROUTES.SEARCH);
    };

    return (
        <Box>
            <Paper elevation={16} sx={{ height: { sx: 'auto', md: 100 } }}>
                <Toolbar
                    sx={{
                        display: { xs: 'block', sm: 'flex' },
                        justifyContent: 'space-between',
                        overflowX: 'auto',
                        borderColor: 'divider',
                        backgroundColor: '#fff',
                        paddingRight: { md: 0 },
                    }}
                >
                    <IconButton color="inherit" aria-label="upload picture" component="span" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
                        <FilterIcon />
                    </IconButton>
                    <FormControl variant="standard" sx={{ m: { xs: 'auto', md: 1 }, minWidth: 230, width: { xs: '100%', md: 'auto' } }}>
                        <TextField id="outlined-basic" label="Search" variant="standard" />
                    </FormControl>
                    <FormControl variant="standard" sx={{ m: { xs: 'auto', md: 1 }, minWidth: 230, width: { xs: '100%', md: 'auto' } }}>
                        <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" sx={{ m: { xs: 'auto', md: 1 }, minWidth: 230, width: { xs: '100%', md: 'auto' } }}>
                        <InputLabel id="demo-simple-select-label">Type offre</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Type" onChange={handleChange}>
                            <MenuItem value={TypeOfferEnum.Sell}>À vendre</MenuItem>
                            <MenuItem value={TypeOfferEnum.Rent}>À louer</MenuItem>
                            <MenuItem value={TypeOfferEnum.Find}>À trouver</MenuItem>
                        </Select>
                    </FormControl>

                    <Box sx={{ my: { xs: 2, md: 'auto' } }}>
                        <Button
                            variant="contained"
                            sx={{
                                width: 100,
                                height: { xs: 'auto', md: 100 },
                                borderRadius: 'unset',
                                backgroundColor: '#3f3f40',
                                marginRight: '0.8rem',
                                color: '#fff',
                                display: { xs: 'inline-flex', md: 'none' },
                            }}
                            color="neutral"
                        >
                            <FilterIcon />
                        </Button>

                        <Button
                            variant="contained"
                            sx={{
                                height: { xs: 'auto', md: 100 },
                                borderRadius: 'unset',
                                backgroundColor: '#3f3f40',
                                color: '#fff',
                            }}
                            onClick={() => searchNavigate()}
                            startIcon={<SearchIcon />}
                            color="neutral"
                        >
                            Search
                        </Button>
                    </Box>
                </Toolbar>
            </Paper>
        </Box>
    );
}
