import React, {FunctionComponent} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, {EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper';
import {connect, useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AllAppConfig} from "../../../core/config/all-config";
import {StorageService} from "../../../shared/services/storage.service";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {getBaseImageUrl, getImageForOffer} from "../../../shared/utils/utils-functions";
import {IRootState} from "../../../shared/reducers";
import {getEntitiesExistOfferImages} from "../../../shared/reducers/offer-images.reducer";
import Box from "@mui/material/Box/Box";

import './BottomHomeSlides.scss';
import {entitiesImagesOffers, entitiesRentOffer, fetchImagesOffer, loadingEntitiesImagesOffers} from "../../offer/store/slice";
import { LazyImage } from 'react-lazy-images';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

// export interface IBottomHomeSlidesProp extends StateProps, DispatchProps {
// }

export const BottomHomeSlides: FunctionComponent = () => {
// export const BottomHomeSlides = (props: IBottomHomeSlidesProp) => {
    const [slideListBottom, setSlideListBottom] = React.useState(StorageService.local.get(AllAppConfig.SlideListBottom));

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loadingEntitiesImagesOffersSelector = useSelector(loadingEntitiesImagesOffers) ?? [];
    const entitiesImagesOffersSelector = useSelector(entitiesImagesOffers) ?? [];

    // const {entitiesImagesOffersSelector, loadingEntitiesImagesOffersSelector, getEntitiesExistOfferImages} = props;

    React.useEffect(() => {
        dispatch(fetchImagesOffer({
            page: 0,
            size: 5
        }));

        // getEntitiesExistOfferImages(0, 5, 'id,asc')
    }, []);

    React.useEffect(() => {
        if (entitiesImagesOffersSelector && entitiesImagesOffersSelector.length > 0) {
            setSlideListBottom(entitiesImagesOffersSelector.slice());

            // For next refresh
            StorageService.local.set(AllAppConfig.SlideListBottom, entitiesImagesOffersSelector);
        }
    }, [entitiesImagesOffersSelector]);

    React.useEffect(() => {
    }, [slideListBottom])

    const rediretTo = (offerId: number) => {
        setTimeout(() => {
            navigate(ALL_APP_ROUTES.OFFER.DEAILS_OFFER + '/' + offerId);
        }, 300);
    };

    return slideListBottom && slideListBottom.length > 0 && !loadingEntitiesImagesOffersSelector ? (
        <Box sx={{my: 5}} className="bottom-home-slides">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {slideListBottom.map((offer: any, index: number) => (
                    <div key={`${index}-${offer[0]}`}>
                        <SwiperSlide key={`slide-${index}-${offer[0]}`} onClick={() => rediretTo(offer[0])}>
                            {/*<img src={getImageForOffer(offer[0], offer[1])} alt="Image not found"*/}
                            {/*     className="full-img-responsive"*/}
                            {/*     width="500"*/}
                            {/*     height="500"/>*/}

                            <LazyImage
                                src={getImageForOffer(offer[0], offer[1])}
                                alt="Image swiper"
                                actual={({ imageProps }: { imageProps: any }) => <img {...imageProps} className="full-img-responsive"/>}
                                placeholder={({ ref }: { ref: any }) => <div ref={ref} />}
                                loading={() => (
                                    <div>
                                        <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE_LOADING)} className="img-lazy-loading"/>
                                    </div>
                                )}
                                error={() => (
                                    <img  src={getBaseImageUrl(AllAppConfig.DEFAULT_LAZY_IMAGE)} className="img-lazy-loading"  alt="image not found"/>
                                )}
                            />

                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>

        </Box>
    ) : (
        <Box></Box>
    );
};

// const mapStateToProps = ({offerImages}: IRootState) => ({
//     entitiesImagesOffersSelector: offerImages.entitiesExistOfferImages,
//     loadingEntitiesImagesOffersSelector: offerImages.loadingEntitiesImagesOffersSelector,
// });
//
// const mapDispatchToProps = {
//     getEntitiesExistOfferImages,
// };
//
// type StateProps = ReturnType<typeof mapStateToProps>;
// type DispatchProps = typeof mapDispatchToProps;
//
// export default connect(mapStateToProps, mapDispatchToProps)(BottomHomeSlides);
