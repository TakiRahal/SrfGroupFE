import React from 'react';
import {getEntities} from "../../shared/reducers/cart.reducer";
import {connect} from "react-redux";
import {IRootState} from "../../shared/reducers";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs/Breadcrumbs";
import {Link} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import Typography from "@mui/material/Typography/Typography";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Alert from "@mui/material/Alert/Alert";
import Container from "@mui/material/Container/Container";
import {GetCardList} from "../faq/Faq";
import {useTranslation} from "react-i18next";

export interface ICartProps extends StateProps, DispatchProps {}

export const Cart = (props: ICartProps) => {

    const { t } = useTranslation();

    React.useEffect(() => {
        props.getEntities(0, 20, '');
    }, [])

    return (
        <Container maxWidth="xl">
            <Grid
                container
                style={{
                    paddingTop: 10,
                }}
            >
                <Grid item xs={12} md={6}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to={ALL_APP_ROUTES.HOME}>
                            SRF
                        </Link>
                        <Typography color="text.primary">{t('header.label_cart')}</Typography>
                    </Breadcrumbs>
                </Grid>

            </Grid>

            <Grid container spacing={4} sx={{ mt: 3 }}>
                {/*{*/}
                {/*    loadingEntitiesFaq ? <Grid item xs={12}>*/}
                {/*        <Box sx={{ paddingTop: 10, textAlign: 'center' }}>*/}
                {/*            <CircularProgress color="inherit"  />*/}
                {/*        </Box>*/}
                {/*    </Grid> : null*/}
                {/*}*/}

                {/*{*/}
                {/*    listFaq && listFaq.length > 0*/}
                {/*        ? listFaq.map((faq, i) => (*/}
                {/*            <Grid item xs={12} md={6} key={`entity-${i}`}>*/}
                {/*                <GetCardList faq={faq} currentLocale={defaultLanguage} />*/}
                {/*            </Grid>*/}
                {/*        ))*/}
                {/*        : !loadingEntitiesFaq && (*/}
                {/*        <Grid item xs={12} md={6}>*/}
                {/*            <Alert severity="warning">No Faqs found</Alert>*/}
                {/*        </Grid>)*/}
                {/*}*/}
            </Grid>
        </Container>
    );
}

const mapStateToProps = ({ conversation, user, message, cart }: IRootState) => ({
    loadingEntities: cart.loadingEntities,
    entities: cart.entities,
    totalItems: cart.totalItems
})

const mapDispatchToProps = {
    getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Cart);