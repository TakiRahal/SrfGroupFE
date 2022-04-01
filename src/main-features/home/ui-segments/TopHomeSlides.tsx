import * as React from 'react';
import Paper from "@mui/material/Paper/Paper";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import {getBaseImageUrl, getFullUrlWithParams} from "../../../shared/utils/utils-functions";
import {SearchAppBar} from "../../../shared/layout/menus/SearchAppBar";
import {getEntitiesForSell} from "../../../shared/reducers/seller-offer.reducer";
import {IRootState} from "../../../shared/reducers";
import {connect} from "react-redux";
import {AllAppConfig} from "../../../core/config/all-config";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {useHistory} from "react-router-dom";

const defaultImage = getBaseImageUrl('/assets/images/home/default_top_home.jpg');

export interface IForSellClientProp extends StateProps, DispatchProps {}

export const TopHomeSlides = (props: IForSellClientProp) => {

    const history = useHistory();

    const searchCalback = (values: any) => {
        console.log('searchCalback ', values);
        let queryParams = getFullUrlWithParams(values);
        let urlSearch = '?page=0&size='+AllAppConfig.OFFERS_PER_PAGE+queryParams;
        history.push(ALL_APP_ROUTES.OFFER.LIST+urlSearch);
    }

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
                    {/*<SearchAppBar entitiesAddress={props.entitiesAddress.slice()} searchCalback={searchCalback}/>*/}
                </Box>
            </Paper>
        </div>
    )
}

const mapStateToProps = ({address}: IRootState) => ({
    entitiesAddress: address.entities,
});

const mapDispatchToProps = {
    getEntitiesForSell,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TopHomeSlides);