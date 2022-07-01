import React, {FunctionComponent} from 'react';
import Box from '@mui/material/Box';
import {SearchAppBar} from "../../../shared/layout/menus/SearchAppBar";
import {IRootState} from "../../../shared/reducers";
import {connect, useDispatch, useSelector} from "react-redux";
import {AllAppConfig} from "../../../core/config/all-config";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import { useNavigate} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Parallax, Pagination, Navigation } from "swiper";
import './TopHomeSlides.scss';
import {StorageService} from "../../../shared/services/storage.service";
import {ITopHomeSlidesImages} from "../../../shared/model/top-home-slides-images.model";
import i18n from "i18next";
import {getFullUrlWithParams} from "../../../shared/utils/utils-functions";
import {allSessionSelector} from "../../user/store/slice";
import {allCategorySelector} from "../../category/store/slice";
import {allAddressSelector} from "../../address/store/slice";
import {allTopHomeSlidesImagesSelector} from "../store/slice";
import {fetchTopHomeSlidesImages} from '../store/slice';


// const defaultImage = getBaseImageUrl('/assets/images/home/default_top_home.jpg');

// export interface ITopHomeSlidesProp extends StateProps, DispatchProps {}

export const TopHomeSlides: FunctionComponent = () => {

    const [listTopSlidesImage] = React.useState<ITopHomeSlidesImages[]>(StorageService.local.get(AllAppConfig.HOME_TOP_SLIDES_IMAGE))
    const [defaultLanguage, setDefaultLanguage] = React.useState('fr');

    const navigate = useNavigate();

    const entitiesCategories = useSelector(allCategorySelector).entities ?? [];
    const entitiesAddress = useSelector(allAddressSelector).entities ?? [];
    const entitiesTopHomeSlidesImages = useSelector(allTopHomeSlidesImagesSelector) ?? [];

    React.useEffect(() => {
        i18n.on('languageChanged', (lang: any) => {
            setDefaultLanguage(lang);
        });
    }, []);

    const searchCalback = (values: any) => {
        navigate({
            pathname: ALL_APP_ROUTES.SEARCH,
            search: "?" + new URLSearchParams(getFullUrlWithParams(values)).toString()
        })
    }

    React.useEffect(() => {
        if(entitiesTopHomeSlidesImages?.length){
            StorageService.local.set(AllAppConfig.HOME_TOP_SLIDES_IMAGE, entitiesTopHomeSlidesImages.slice());
        }
    }, [entitiesTopHomeSlidesImages])

    const getBackgroundImage = () => {
        for (let i=0; i<listTopSlidesImage.length; i++){
            if(listTopSlidesImage[i]?.image){
                return listTopSlidesImage[i]?.image;
            }
        }
    }

    const getDescription = (item: ITopHomeSlidesImages): string => {
        if( defaultLanguage==='en' ){
            return item.descriptionEn || '';
        }
        else if( defaultLanguage==='fr' ){
            return item.descriptionFr || '';
        }
        return item.descriptionAr || '';
    }

    return (
        <div className="top-home-slides">
            {
                listTopSlidesImage && listTopSlidesImage.length ? <Swiper
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{ "backgroundImage": `url(${getBackgroundImage()})` }}
                        data-swiper-parallax="-23%"
                    ></div>
                    {
                        listTopSlidesImage.map((item: ITopHomeSlidesImages, index: number) => (
                            <SwiperSlide key={`index-${index}`}>
                                <div className="text" data-swiper-parallax="-300">
                                    <div dangerouslySetInnerHTML={{ __html: getDescription(item) }}></div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper> : null
            }


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
                    zIndex: 9
                }}
            >
                <SearchAppBar entitiesCategories={entitiesCategories?.slice()} searchCalback={searchCalback} listAddress={entitiesAddress?.slice()} hideFilter={true}/>
            </Box>
        </div>
    )
}
