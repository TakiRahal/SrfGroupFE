import React, {FunctionComponent} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {AllAppConfig} from "../../../core/config/all-config";
import {StorageService} from '../../../shared/services/storage.service';
import {connect} from "react-redux";
import isEmpty from 'lodash/isEmpty';
import {IRootState} from "../../../shared/reducers";
import {IPostHomeFeature} from "../../../shared/model/post-home-feature.model";
import i18n from "i18next";

// export interface IPostHomeFeatureProp extends StateProps, DispatchProps {}


export const PostHomeFeature: FunctionComponent = () => {
// export const PostHomeFeature = (props: IPostHomeFeatureProp) => {

    const [entityPostHomeFeature, setEntityPostHomeFeature] = React.useState<IPostHomeFeature>(StorageService.local.get(AllAppConfig.POST_HOME_FEATURE))
    const [defaultLanguage, setDefaultLanguage] = React.useState('fr');

    React.useEffect(() => {
        i18n.on('languageChanged', (lang: any) => {
            setDefaultLanguage(lang);
        });
    }, []);

    // React.useEffect(() => {
    //
    //     if(!isEmpty(props.entity)){
    //         StorageService.local.set(AllAppConfig.POST_HOME_FEATURE, props.entity);
    //     }
    // }, [props.entity]);

    const getDescription = (): string => {
        if( defaultLanguage==='en' ){
            return entityPostHomeFeature.descriptionEn || '';
        }
        else if( defaultLanguage==='fr' ){
            return entityPostHomeFeature.descriptionFr || '';
        }
        return entityPostHomeFeature.descriptionAr || '';
    }

    return (
        <Container maxWidth="xl" sx={{ my: 10 }}>
            {
                !isEmpty(entityPostHomeFeature) ? <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        {/*<LazyImage className="img-fluid" src={defaultImage} alt={defaultImage}/>*/}
                        <img
                            className="full-img-responsive"
                            src={entityPostHomeFeature.image}
                            alt='bg'
                            onError={(e: any) => {
                                e.target.onerror = null;
                                e.target.src = entityPostHomeFeature.image;
                            }}
                            width="1000"
                            height="500"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div dangerouslySetInnerHTML={{ __html: getDescription() }}></div>

                        {/*<div>{parse(cmsEntity.description)}</div>*/}
                        {/*<h4>The Ultimate Hotel for Both Leisure and Business Goers</h4>*/}
                        {/*<h2>WHO VISIT THE FINE CITY OF INDIANAPOLIS</h2>*/}
                        {/*<p>*/}
                        {/*The Woods hotel, located in the very heart of Indianapolis is a welcoming retreat for either*/}
                        {/*people traveling across the country*/}
                        {/*or businessmen, visiting our Rustbelt state for some commercial affairs. Here, we always make*/}
                        {/*sure that you will have any of*/}
                        {/*your needs satisfied, be it a comfortable hotel room with a strong WiFi signal and a diligent*/}
                        {/*room service, a dining and lounge*/}
                        {/*zone or any additional amenities a traveller might want…*/}
                        {/*</p>*/}
                        {/*<Button variant="outlined">Default</Button>*/}
                    </Grid>
                </Grid> : null
            }

        </Container>
    );
};

//
// const mapStateToProps = ({postHomeFeature}: IRootState) => ({
//     entity: postHomeFeature.entity,
// });
//
// const mapDispatchToProps = {
// };
//
// type StateProps = ReturnType<typeof mapStateToProps>;
// type DispatchProps = typeof mapDispatchToProps;
//
// export default connect(mapStateToProps, mapDispatchToProps)(PostHomeFeature);
