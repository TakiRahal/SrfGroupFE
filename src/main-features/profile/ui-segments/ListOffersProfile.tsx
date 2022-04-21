import React from 'react';
import {IOffer} from "../../../shared/model/offer.model";
import Box from "@mui/material/Box/Box";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import CardActions from "@mui/material/CardActions/CardActions";
import Button from "@mui/material/Button/Button";
import {getBaseImageUrl, getImageForOffer} from "../../../shared/utils/utils-functions";
import {AllAppConfig} from "../../../core/config/all-config";
import {useTranslation} from "react-i18next";
import CardActionArea from "@mui/material/CardActionArea/CardActionArea";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {useHistory} from "react-router-dom";
import {LazyImageLoading} from "../../../shared/pages/lazy-image-loading";


export function ListOffersProfile({listOffers, loading}: {listOffers: any, loading: boolean}) {

    const history = useHistory();
    const { t } = useTranslation();

    const rediretTo = (offerId: number) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.DETAILS_OFFER + '/' + offerId);
        }, 300);
    };

    return (
        <Box>
            {
                loading ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress color="inherit" />
                </Box> :

                    <Container sx={{ py: 4 }} maxWidth="lg">
                        <h3>{t('profile.title_list_offers_by_user')}</h3>
                        <Grid container spacing={4}>
                            {listOffers.map((offer: IOffer) => (
                                <Grid item key={offer.id} xs={12} sm={6} md={4}>
                                    <CardActionArea component="a" onClick={() => rediretTo(offer?.id || -1 )}>
                                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <CardMedia
                                                sx={{ height: 150 }} >
                                                {offer.offerImages && offer.offerImages.length ? (
                                                    <LazyImageLoading src={getImageForOffer(offer.id, offer.offerImages[0].path)} />
                                                ) : (
                                                    <Box sx={{height: '100%', display: {xs: 'none', md: 'block'}}}>
                                                        <LazyImageLoading src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)} />
                                                    </Box>
                                                )}
                                            </CardMedia>
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography gutterBottom variant="h5" component="h2" className="truncate-text">
                                                    {offer?.title}
                                                </Typography>
                                                <div className="truncate-text" dangerouslySetInnerHTML={{ __html: offer?.description || '' }}></div>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">View</Button>
                                            </CardActions>
                                        </Card>
                                    </CardActionArea>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
            }
        </Box>
    );
}