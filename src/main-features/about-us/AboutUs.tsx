import React from 'react';
import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs/Breadcrumbs';
import Typography from '@mui/material/Typography/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {IRootState} from "../../shared/reducers";
import { getEntity as getEntitiyAboutUs } from '../../shared/reducers/about-us.reducer';
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Box from "@mui/material/Box/Box";
import Alert from "@mui/material/Alert/Alert";


export interface IAboutUsClientProps extends StateProps, DispatchProps{}

export const AboutUs = (props: IAboutUsClientProps) => {

    const { aboutUsEntity, loadingEntity, getEntitiyAboutUs } = props;


    React.useEffect(() => {
        getEntitiyAboutUs();
    }, []);


    return (
        <Container maxWidth="xl">
            <Grid
                container
                style={{
                    paddingTop: 10,
                }}
            >
                <Grid item xs={12} sm={6}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                            SRF
                        </Link>
                        <Typography color="text.primary">AboutUs</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            <Grid
                container
                style={{
                    paddingTop: 50,
                }}
            >

                {
                    loadingEntity ? <Grid item xs={12}>
                        <Box sx={{ paddingTop: 10, textAlign: 'center' }}>
                            <CircularProgress color="inherit"  />
                        </Box>
                    </Grid> : null
                }


                <Grid item xs={12}>
                    {aboutUsEntity && aboutUsEntity.contentEn ?
                        <div dangerouslySetInnerHTML={{ __html: aboutUsEntity.contentEn }}></div> :
                        <Alert severity="warning">No About Us found</Alert>}
                </Grid>
            </Grid>
        </Container>
    );
};

const mapStateToProps = ({ aboutUs }: IRootState) => ({
    loadingEntity: aboutUs.loadingEntity,
    aboutUsEntity: aboutUs.entity,

    // currentLocale: locale.currentLocale,
});

const mapDispatchToProps = {
    getEntitiyAboutUs
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
