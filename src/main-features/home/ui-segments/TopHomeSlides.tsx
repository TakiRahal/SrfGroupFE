import React from 'react';
import Box from '@mui/material/Box';
import {getBaseImageUrl, getFullUrlWithParams} from "../../../shared/utils/utils-functions";
import {SearchAppBar} from "../../../shared/layout/menus/SearchAppBar";
import {IRootState} from "../../../shared/reducers";
import {connect} from "react-redux";
import {AllAppConfig} from "../../../core/config/all-config";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {useHistory} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Parallax, Pagination, Navigation } from "swiper";
import './TopHomeSlides.scss';
import {StorageService} from "../../../shared/services/storage.service";
import {ITopHomeSlidesImages} from "../../../shared/model/top-home-slides-images.model";
import i18n from "i18next";


// const defaultImage = getBaseImageUrl('/assets/images/home/default_top_home.jpg');

export interface ITopHomeSlidesProp extends StateProps, DispatchProps {}

export const TopHomeSlides = (props: ITopHomeSlidesProp) => {

    const [listTopSlidesImage, setListTopSlidesImage] = React.useState<ITopHomeSlidesImages[]>(StorageService.local.get(AllAppConfig.HOME_TOP_SLIDES_IMAGE))
    const [defaultLanguage, setDefaultLanguage] = React.useState('fr');

    const history = useHistory();

    React.useEffect(() => {
        i18n.on('languageChanged', (lang: any) => {
            setDefaultLanguage(lang);
        });
    }, []);

    const searchCalback = (values: any) => {
        console.log('searchCalback ', values);
        let queryParams = getFullUrlWithParams(values);
        let urlSearch = '?page=0&size='+AllAppConfig.OFFERS_PER_PAGE+queryParams;
        history.push(ALL_APP_ROUTES.OFFER.LIST+urlSearch);
    }

    React.useEffect(() => {
        if(props.entitiesTopHomeSlidesImages && props.entitiesTopHomeSlidesImages.length){
            StorageService.local.set(AllAppConfig.HOME_TOP_SLIDES_IMAGE, props.entitiesTopHomeSlidesImages.slice());
        }
    }, [props.entitiesTopHomeSlidesImages])

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
                    {/*<SwiperSlide>*/}
                    {/*<div className="title" data-swiper-parallax="-300">*/}
                    {/*Slide 1*/}
                    {/*</div>*/}
                    {/*<div className="subtitle" data-swiper-parallax="-200">*/}
                    {/*Subtitle*/}
                    {/*</div>*/}
                    {/*<div className="text" data-swiper-parallax="-100">*/}
                    {/*<p>*/}
                    {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam*/}
                    {/*dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla*/}
                    {/*laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.*/}
                    {/*Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.*/}
                    {/*Aliquam hendrerit lorem at elit facilisis rutrum. Ut at*/}
                    {/*ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,*/}
                    {/*tincidunt ut libero. Aenean feugiat non eros quis feugiat.*/}
                    {/*</p>*/}
                    {/*</div>*/}
                    {/*</SwiperSlide>*/}
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
                <SearchAppBar entitiesCategories={props.entitiesCategories.slice()} searchCalback={searchCalback}/>
            </Box>
        </div>
    )
}

const mapStateToProps = ({category, topHomeSlidesImages}: IRootState) => ({
    entitiesCategories: category.entities,
    entitiesTopHomeSlidesImages: topHomeSlidesImages.entities,
});

const mapDispatchToProps = {
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TopHomeSlides);