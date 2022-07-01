import * as React from 'react';
import Box from "@mui/material/Box/Box";
import {Link} from "react-router-dom";
import {ALL_APP_ROUTES} from "../../core/config/all-app-routes";
import {TopHomeSlides} from "./ui-segments/TopHomeSlides";
import {ForSellHomeClient} from "./ui-segments/ForSellHomeClient";
import FirstHorizentalListHomeClient from "./ui-segments/FirstHorizentalListHomeClient";
import {ForRentHomeClient} from "./ui-segments/ForRentHomeClient";
import SecondHorizentalListHomeClient from './ui-segments/SecondHorizentalListHomeClient';
import {ForFindHomeClient} from "./ui-segments/ForFindHomeClient";
import ThirdHorizentalListHomeClient from "./ui-segments/ThirdHorizentalListHomeClient";
// import FirstHorizentalListHomeClient from "./ui-segments/FirstHorizentalListHomeClient";
// import SecondHorizentalListHomeClient from "./ui-segments/SecondHorizentalListHomeClient";
// import ThirdHorizentalListHomeClient from "./ui-segments/ThirdHorizentalListHomeClient";
// import RecentlyAddedHomeClient from "./ui-segments/RecentlyAddedHomeClient";
// import ForRentHomeClient from "./ui-segments/ForRentHomeClient";
// import ForFindHomeClient from "./ui-segments/ForFindHomeClient";
// import BottomHomeSlides from "./ui-segments/BottomHomeSlides";
// import './home.scss';
// import PostHomeFeature from "./ui-segments/PostHomeFeature";

export default function Home(){
    return (
        <Box>
            <TopHomeSlides />

            <ForSellHomeClient />

            <FirstHorizentalListHomeClient />

            <ForRentHomeClient />

            {<SecondHorizentalListHomeClient />}

            <ForFindHomeClient />

            <ThirdHorizentalListHomeClient />

            {/*<RecentlyAddedHomeClient />*/}

            {/*<PostHomeFeature />*/}

            {/*<BottomHomeSlides {...props}/>*/}
        </Box>
    );
}
