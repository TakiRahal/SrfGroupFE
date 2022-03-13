import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, {EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper';
import {connect} from 'react-redux';
import {RouteComponentProps, useHistory} from 'react-router-dom';
import {AllAppConfig} from "../../../core/config/all-config";
import {StorageService} from "../../../shared/services/storage.service";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {getImageForOffer} from "../../../shared/utils/utils-functions";
import {IRootState} from "../../../shared/reducers";
import {getEntitiesExistOfferImages} from "../../../shared/reducers/offer-images.reducer";
import Box from "@mui/material/Box/Box";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

export interface IBottomHomeSlidesProp extends StateProps, DispatchProps, RouteComponentProps {
}

export const BottomHomeSlides = (props: IBottomHomeSlidesProp) => {
    const [slideListBottom, setSlideListBottom] = React.useState(StorageService.local.get(AllAppConfig.SlideListBottom));

    const history = useHistory();

    const {listExistOfferImages, loadingExistOfferImages, getEntitiesExistOfferImages} = props;

    React.useEffect(() => {
        getEntitiesExistOfferImages(0, 5, 'id,asc')
    }, []);

    React.useEffect(() => {
        if (listExistOfferImages && listExistOfferImages.length > 0) {
            setSlideListBottom(listExistOfferImages.slice());

            // For next refresh
            StorageService.local.set(AllAppConfig.SlideListBottom, listExistOfferImages);
        }
    }, [listExistOfferImages]);

    React.useEffect(() => {
    }, [slideListBottom])

    const rediretTo = (offerId: number) => {
        setTimeout(() => {
            history.push(ALL_APP_ROUTES.OFFER.DEAILS_OFFER + '/' + offerId);
        }, 300);
    };

    return slideListBottom && slideListBottom.length > 0 && !loadingExistOfferImages ? (
        <Box sx={{my: 5}} className="bottom-home-slides">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                navigation={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                className="mySwiper"
            >
                {slideListBottom.map((offer: any, index: number) => (
                    <div key={`${index}-${offer[0]}`}>
                        <SwiperSlide key={`slide-${index}-${offer[0]}`} onClick={() => rediretTo(offer[0])}>
                            <img src={getImageForOffer(offer[0], offer[1])}/>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </Box>
    ) : (
        <Box></Box>
    );
};

const mapStateToProps = ({offerImages}: IRootState) => ({
    listExistOfferImages: offerImages.entitiesExistOfferImages,
    loadingExistOfferImages: offerImages.loadingExistOfferImages,
});

const mapDispatchToProps = {
    getEntitiesExistOfferImages,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(BottomHomeSlides);
