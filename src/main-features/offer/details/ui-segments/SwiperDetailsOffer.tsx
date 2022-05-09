import * as React from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import Card from '@mui/material/Card/Card';
import {Autoplay, EffectFade, Lazy, Navigation, Thumbs, Zoom} from 'swiper';
import SwiperCore from 'swiper';
import {IOffer} from "../../../../shared/model/offer.model";
import {IOfferImages} from "../../../../shared/model/offer-images.model";
import {getImageForOffer} from "../../../../shared/utils/utils-functions";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageLightbox from "../../../../shared/pages/image-lightbox";
import Box from "@mui/material/Box/Box";

interface IImageLightBox {
    images: string[];
    thumbs: string[];
    titles: string[];
    captions: string[];
}

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Lazy, Zoom, Navigation, Thumbs]);

export default function SwiperDetailsOffer(offerEntity: IOffer) {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<any | null>(null);// useState(null);
    const [openLightBox, setOpenLightBox] = React.useState(false);

    const closeLightBox = () => {
        setOpenLightBox(false);
    }

    const getFullListImages = (): string[] | undefined => {
        return offerEntity?.offerImages?.map(item => getImageForOffer(offerEntity.id, item.path));
    }

    const getFullListTitles = (): string[] | undefined => {
        return offerEntity?.offerImages?.map(item => (offerEntity?.title || '').toString());
    }

    const getFullListCaptions = (): string[] | undefined => {
        return offerEntity?.offerImages?.map(item => (offerEntity?.description || '').toString());
    }

    return offerEntity && offerEntity.offerImages && offerEntity.offerImages.length > 0 ? (

        <Box>
            <ImageLightbox openLightBox={openLightBox}
                           callbackClose={closeLightBox}
                           listImages={getFullListImages()}
                           listTitles={getFullListTitles()}
                           listCaptions={getFullListCaptions()}/>

            <Card sx={{mb: 2}}>
                <Swiper
                    spaceBetween={10}
                    navigation
                    pagination={{clickable: true}}
                    thumbs={{swiper: thumbsSwiper}}
                    zoom={true}
                    lazy={true}
                    effect={'fade'}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper2"
                >
                    {offerEntity.offerImages.map((offerImage: IOfferImages, index) => (
                        <SwiperSlide key={offerImage.id}>
                            <div className="swiper-zoom-container">
                                <img src={getImageForOffer(offerEntity.id, offerImage.path)}
                                     onClick={() => setOpenLightBox(true)} onContextMenu={(e) => e.preventDefault()}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    className="mySwiper"
                >
                    {offerEntity.offerImages.map((offerImage: IOfferImages, index) => (
                        <SwiperSlide key={offerImage.id}>
                            <img src={getImageForOffer(offerEntity.id, offerImage.path)}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Card>
        </Box>
    ) : null;
}
