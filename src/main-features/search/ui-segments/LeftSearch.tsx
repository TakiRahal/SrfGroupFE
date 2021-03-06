import * as React from 'react';
import Box from '@mui/material/Box/Box';
import {IAddress} from "../../../shared/model/address.model";
import {FilterOffer} from "./FilterOffer";

export default function LeftSearchClient({listAddress, filterCallback}: {listAddress: IAddress[], filterCallback: Function}) {

    // const { t } = useTranslation();

    React.useEffect(() => {
        try {
          if (FB) {
            FB.XFBML.parse();
          }
        } catch (e) {
          window.console.error('FB not defined');
        }
    }, []);

    const onChange = (values: any) => {
        // console.log('values ', values);
        filterCallback(values);
    }

    return (
        <Box sx={{ width: '100%'}}>

            <FilterOffer listAddress={listAddress} handelChange={onChange}/>

            <Box sx={{mb: 4}}>
                <div style={{width: '100%'}}>
                    <div
                        className="fb-page"
                        data-href="https://www.facebook.com/profile.php?id=100054409273167"
                        data-tabs="timeline"
                        data-width="250"
                        data-height=""
                        data-small-header="false"
                        data-adapt-container-width="true"
                        data-hide-cover="false"
                        data-show-facepile="true"
                    ></div>
                </div>

            </Box>

        </Box>
    );
}
