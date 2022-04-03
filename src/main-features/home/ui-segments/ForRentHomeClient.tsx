import React from 'react';
import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import Card from '@mui/material/Card/Card';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import {Link, RouteComponentProps, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import Box from '@mui/material/Box/Box';
import {IRootState} from "../../../shared/reducers";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {IRentOffer} from "../../../shared/model/rent-offer.model";
import {LazyImage} from "../../../shared/pages/lazy-image";
import {getBaseImageUrl, getImageForOffer} from "../../../shared/utils/utils-functions";
import {AllAppConfig} from "../../../core/config/all-config";
import {getEntitiesForRent} from "../../../shared/reducers/rent-offer.reducer";
import {useTranslation} from "react-i18next";
import {TypeOfferEnum} from "../../../shared/enums/type-offer.enum";
import {IOffer} from "../../../shared/model/offer.model";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-flip";
import './ForRentHome.scss';

import { EffectFlip, Pagination, Navigation } from "swiper";

function ItemForRentHome({offer, index, rediretTo}: {offer: IOffer, index: number, rediretTo: any}){
    return (
        <CardActionArea component="a" onClick={() => rediretTo(offer.id)}>
            <Card sx={{display: {xs: 'block', sm: 'flex'}}}>
                {index % 2 === 0 ? (
                    offer.offerImages && offer.offerImages.length ? (
                        <CardMedia sx={{
                            width: {xs: '100%', sm: 250},
                            height: {xs: '100%', sm: 200},
                            backgroundColor: '#0000004f'
                        }}>
                            <LazyImage
                                className="img-fluid"
                                src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                                alt={offer.offerImages[0].path}
                            />
                        </CardMedia>
                    ) : (
                        <CardMedia sx={{
                            width: {xs: '100%', sm: 250},
                            height: {xs: '100%', sm: 200},
                            backgroundColor: '#0000004f'
                        }}>
                            <LazyImage className="img-fluid" src={AllAppConfig.DEFAULT_LAZY_IMAGE}
                                       alt="Offer"/>
                        </CardMedia>
                    )
                ) : null}
                <CardContent sx={{flex: 1}}>
                    <Typography component="h2" variant="h5">
                        {offer.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {offer.dateCreated}
                    </Typography>
                    <Box className="truncate-string" style={{maxWidth: 400}}>
                        <div dangerouslySetInnerHTML={{__html: offer.description || ''}}></div>
                    </Box>
                    <Typography variant="subtitle1" color="primary">
                        Continue reading...
                    </Typography>
                </CardContent>
                {index % 2 !== 0 ? (
                    offer.offerImages && offer.offerImages.length ? (
                        <CardMedia sx={{
                            width: {xs: '100%', sm: 250},
                            height: {xs: '100%', sm: 200},
                            backgroundColor: '#0000004f'
                        }}>
                            <LazyImage
                                className="img-fluid"
                                src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                                alt={offer.offerImages[0].path}
                            />
                        </CardMedia>
                    ) : (
                        <CardMedia sx={{
                            width: {xs: '100%', sm: 250},
                            height: {xs: '100%', sm: 200},
                            backgroundColor: '#0000004f'
                        }}>
                            <LazyImage className="img-fluid" src={AllAppConfig.DEFAULT_LAZY_IMAGE}
                                       alt="Offer"/>
                        </CardMedia>
                    )
                ) : null}
            </Card>
        </CardActionArea>
    );
}

export interface IForRentClientProp extends StateProps, DispatchProps, RouteComponentProps {
}

export const ForRentHomeClient = (props: IForRentClientProp) => {


    const history = useHistory();
    const {t} = useTranslation();

    const {getEntitiesForRent, listRentOffers} = props;

    React.useEffect(() => {
        getEntitiesForRent(0, 4, 'id,asc');
    }, []);

    const rediretTo = (offerId?: number) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.OFFER.DEAILS_OFFER + '/' + offerId);
        }, 300);
    };

    return (
        <Container maxWidth="xl" className="container-for-rent-home">
            <h3>
                <Link to={`${ALL_APP_ROUTES.OFFER.LIST}?page=0&size=${AllAppConfig.OFFERS_PER_PAGE}&typeOffer=${TypeOfferEnum.Rent}`}>
                    {t('common.for_rent')}
                </Link>
            </h3>
            <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3}} sx={{display: {xs: 'none', md: 'flex'}}}>
                {listRentOffers.map((offer: IRentOffer, index: number) => (
                    <Grid item xs={12} md={6} key={`offer-${index}`}>
                        <ItemForRentHome offer={offer} index={index} rediretTo={rediretTo}/>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{display: {md: 'none'}}} className="box-swiper">
                <Swiper
                    effect={"flip"}
                    grabCursor={true}
                    pagination={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {listRentOffers.map((offer: IRentOffer, index: number) => (
                        <SwiperSlide key={`offer-${index}`}>
                            <ItemForRentHome offer={offer} index={index} rediretTo={rediretTo}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Container>
    );
};

const mapStateToProps = ({rentOffer}: IRootState) => ({
    listRentOffers: rentOffer.entitiesRentOffers,
});

const mapDispatchToProps = {
    getEntitiesForRent,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ForRentHomeClient);
