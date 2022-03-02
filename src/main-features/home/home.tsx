import * as React from 'react';
import Box from "@mui/material/Box/Box";
import TopHomeSlides from "./ui-segments/TopHomeSlides";
import ForSellHomeClient from "./ui-segments/ForSellHomeClient";
import FirstHorizentalListHomeClient from "./ui-segments/FirstHorizentalListHomeClient";
import SecondHorizentalListHomeClient from "./ui-segments/SecondHorizentalListHomeClient";
import ThirdHorizentalListHomeClient from "./ui-segments/ThirdHorizentalListHomeClient";
import RecentlyAddedHomeClient from "./ui-segments/RecentlyAddedHomeClient";
import HomeFullOffer from "./ui-segments/HomeFullOffer";

export default function Home(props: any){
    return (
        <Box>

            <TopHomeSlides />

            <ForSellHomeClient {...props} />

            <FirstHorizentalListHomeClient />

            <SecondHorizentalListHomeClient />

            <ThirdHorizentalListHomeClient />

            <RecentlyAddedHomeClient />

            <HomeFullOffer />
        </Box>
    );
}