import React from 'react';
import {IOffer} from "../../../shared/model/offer.model";
import Box from "@mui/material/Box/Box";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import CardActions from "@mui/material/CardActions/CardActions";
import Button from "@mui/material/Button/Button";


export function ListOffersProfile({listOffers, loading}: {listOffers: any, loading: boolean}) {

    React.useEffect(() => {
        console.log('listOffers ', listOffers);
    }, [listOffers])

    return (
        <Box>
            {/*{*/}
                {/*loading ? <Box sx={{ display: 'flex', justifyContent: 'center' }}>*/}
                    {/*<CircularProgress color="inherit" />*/}
                {/*</Box> :*/}

                    {/*<Container sx={{ py: 4 }} maxWidth="lg" className="pl-0 pr-0">*/}
                        {/*<h3>List of offers by user</h3>*/}
                        {/*<Grid container spacing={4}>*/}
                            {/*{listOffers.map((offer: IOffer) => (*/}
                                {/*<Grid item key={offer.id} xs={12} sm={6} md={4}>*/}
                                    {/*<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>*/}
                                        {/*<CardMedia*/}
                                            {/*component="img"*/}
                                            {/*sx={{*/}
                                                {/*// 16:9*/}
                                                {/*// pt: '',*/}
                                                {/*maxHeight: 150,*/}
                                            {/*}}*/}
                                            {/*image="https://source.unsplash.com/random"*/}
                                            {/*alt="random"*/}
                                        {/*/>*/}
                                        {/*<CardContent sx={{ flexGrow: 1 }}>*/}
                                            {/*<Typography gutterBottom variant="h5" component="h2">*/}
                                                {/*Heading*/}
                                            {/*</Typography>*/}
                                            {/*<Typography>This is a media card. You can use this section to describe the content.</Typography>*/}
                                        {/*</CardContent>*/}
                                        {/*<CardActions>*/}
                                            {/*<Button size="small">View</Button>*/}
                                            {/*<Button size="small">Edit</Button>*/}
                                        {/*</CardActions>*/}
                                    {/*</Card>*/}
                                {/*</Grid>*/}
                            {/*))}*/}
                        {/*</Grid>*/}
                    {/*</Container>*/}
            {/*}*/}
        </Box>
    );
}