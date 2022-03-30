import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {AllAppConfig} from "../../../core/config/all-config";
import {StorageService} from '../../../shared/services/storage.service';
import Button from "@mui/material/Button/Button";
import {getBaseImageUrl} from "../../../shared/utils/utils-functions";

const defaultImage = getBaseImageUrl('/assets/images/home/default_medium_home.jpg');


export default function HomeFullOffer (props: any){
    // const [cmsEntity, setCmsEntity] = useState(StorageService.local.get(AllAppConfig.HomeMediumPost));

    const {cmsHomeMedium} = props;

    React.useEffect(() => {
        // props.getLastEntity(null);
    }, []);

    React.useEffect(() => {
        if (props.cmsHomeMedium) {
            // For next refresh
            StorageService.local.set(AllAppConfig.HomeMediumPost, props.cmsHomeMedium);
        }
    }, [cmsHomeMedium]);

    return (
        <Container maxWidth="xl" sx={{ my: 10 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    {/*<LazyImage className="img-fluid" src={defaultImage} alt={defaultImage}/>*/}
                    <img
                        style={{maxWidth: '100%'}}
                        src={defaultImage}
                        alt='bg'
                        onError={(e: any) => {
                            e.target.onerror = null;
                            e.target.src = defaultImage;
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    {/*<div>{parse(cmsEntity.description)}</div>*/}
                    <h4>The Ultimate Hotel for Both Leisure and Business Goers</h4>
                    <h2>WHO VISIT THE FINE CITY OF INDIANAPOLIS</h2>
                    <p>
                        The Woods hotel, located in the very heart of Indianapolis is a welcoming retreat for either
                        people traveling across the country
                        or businessmen, visiting our Rustbelt state for some commercial affairs. Here, we always make
                        sure that you will have any of
                        your needs satisfied, be it a comfortable hotel room with a strong WiFi signal and a diligent
                        room service, a dining and lounge
                        zone or any additional amenities a traveller might want…
                    </p>
                    <Button variant="outlined">Default</Button>
                </Grid>
            </Grid>
        </Container>
    );
};
