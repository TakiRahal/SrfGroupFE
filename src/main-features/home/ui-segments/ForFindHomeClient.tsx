import React from 'react';
import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import Card from '@mui/material/Card/Card';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import Box from '@mui/material/Box/Box';
import {LazyImage} from "../../../shared/pages/lazy-image";
import {getImageForOffer} from "../../../shared/utils/utils-functions";
import {AllAppConfig} from "../../../core/config/all-config";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {useHistory} from "react-router";
import {IRootState} from "../../../shared/reducers";
import {getEntitiesForFind} from "../../../shared/reducers/find-offer.reducer";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";
import {TypeOfferEnum} from "../../../shared/enums/type-offer.enum";
import {Link} from "react-router-dom";
import {IOffer} from "../../../shared/model/offer.model";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from "swiper";

import './ForFindHome.scss';
import {ConvertReactTimeAgo} from "../../../shared/pages/react-time-ago";


function ItemForFindHome({offer, index, rediretTo}: {offer: IOffer, index: number, rediretTo: any}){
    return (
        <CardActionArea component="a" onClick={() => rediretTo(offer.id)}>

            {/*For Desktop*/}
            <Card sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {index % 2 === 0 ? (
                    offer.offerImages && offer.offerImages.length ? (
                        <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 }, backgroundColor: '#0000004f' }}>
                            <LazyImage
                                className="img-fluid"
                                src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                                alt={offer.offerImages[0].path}
                            />
                        </CardMedia>
                    ) : (
                        <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 }, backgroundColor: '#0000004f' }}>
                            <LazyImage className="img-fluid" src={AllAppConfig.DEFAULT_LAZY_IMAGE} alt="Offer" />
                        </CardMedia>
                    )
                ) : null}
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        {offer.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        <ConvertReactTimeAgo convertDate={offer.dateCreated} />
                    </Typography>
                    <Box className="truncate-string-two-lines" style={{ maxWidth: 400 }}>
                        <div dangerouslySetInnerHTML={{__html: offer.description || ''}}></div>
                    </Box>
                </CardContent>
                {index % 2 !== 0 ? (
                    offer.offerImages && offer.offerImages.length ? (
                        <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 }, backgroundColor: '#0000004f' }}>
                            <LazyImage
                                className="img-fluid"
                                src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                                alt={offer.offerImages[0].path}
                            />
                        </CardMedia>
                    ) : (
                        <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 }, backgroundColor: '#0000004f' }}>
                            <LazyImage className="img-fluid" src={AllAppConfig.DEFAULT_LAZY_IMAGE} alt="Offer" />
                        </CardMedia>
                    )
                ) : null}
            </Card>


            {/*For Mobile*/}
            <Card sx={{ display: { xs: 'block', sm: 'none' } }}>
                {
                    offer.offerImages && offer.offerImages.length ? (
                        <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 }, backgroundColor: '#0000004f' }}>
                            <LazyImage
                                className="img-fluid"
                                src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                                alt={offer.offerImages[0].path}
                            />
                        </CardMedia>
                    ) : (
                        <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 }, backgroundColor: '#0000004f' }}>
                            <LazyImage className="img-fluid" src={AllAppConfig.DEFAULT_LAZY_IMAGE} alt="Offer" />
                        </CardMedia>
                    )
                }
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        {offer.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        <ConvertReactTimeAgo convertDate={offer.dateCreated} />
                    </Typography>
                    <Box className="truncate-string-two-lines" style={{ maxWidth: 400 }}>
                        <div dangerouslySetInnerHTML={{__html: offer.description || ''}}></div>
                    </Box>
                </CardContent>
            </Card>
        </CardActionArea>
    );
}

export interface IForFindClientProp extends StateProps, DispatchProps {}

export const ForFindHomeClient = (props: IForFindClientProp) => {

    const history = useHistory();
    const { t } = useTranslation();

    const { listFindOffers, getEntitiesForFind } = props;

    React.useEffect(() => {
        getEntitiesForFind(0, 4, 'id,asc');
    }, [])

    const rediretTo = (offerId: number) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.OFFER.DEAILS_OFFER + '/' + offerId);
        }, 300);
    };

    return (
        <Container maxWidth="xl" className="container-for-find-home">
            <h3>
                <Link to={`${ALL_APP_ROUTES.OFFER.LIST}?typeOffer=${TypeOfferEnum.Find}`}>
                    {t('common.for_find')}
                </Link>
            </h3>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display: {xs: 'none', md: 'flex'}}}>
                {listFindOffers.map((offer: any, index: number) => (
                    <Grid item xs={12} md={6} key={`offer-${index}`}>
                        <ItemForFindHome offer={offer} index={index} rediretTo={rediretTo}/>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{display: {md: 'none'}}} className="box-swiper">
                <Swiper
                    pagination={true}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {listFindOffers.map((offer: any, index: number) => (
                        <SwiperSlide key={`offer-${index}`}>
                            <ItemForFindHome offer={offer} index={index} rediretTo={rediretTo}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Container>
    );
}

const mapStateToProps = ({ findOffer }: IRootState) => ({
    listFindOffers: findOffer.entitiesFindOffers,
});

const mapDispatchToProps = {
    getEntitiesForFind,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ForFindHomeClient);