import React from 'react';
import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import Card from '@mui/material/Card/Card';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import parse from 'html-react-parser';
import Box from '@mui/material/Box/Box';
import {IRootState} from "../../../shared/reducers";
import {ALL_APP_ROUTES} from "../../../core/config/all-app-routes";
import {IRentOffer} from "../../../shared/model/rent-offer.model";
import {LazyImage} from "../../../shared/pages/lazy-image";
import {getBaseImageUrl, getImageForOffer} from "../../../shared/utils/utils-functions";
import {AllAppConfig} from "../../../core/config/all-config";
import {getEntitiesForRent} from "../../../shared/reducers/rent-offer.reducer";

export interface IForRentClientProp extends StateProps, DispatchProps, RouteComponentProps {}

export const ForRentHomeClient = (props: IForRentClientProp) => {


  const history = useHistory();

  const {getEntitiesForRent, listRentOffers} = props;

  React.useEffect(() => {
      getEntitiesForRent(0, 4, 'id,asc');
  }, []);

  const rediretTo = (offerId?: number) => {
    setTimeout(() => {
      history.push(ALL_APP_ROUTES.OFFER.DEAILS_OFFER + '/' + offerId);
    }, 300);
  };

  const getDescription = (offer: IRentOffer): string => {
    return offer.description ? offer.description : '';
  }

  return (
    <Container maxWidth="xl">
      <h3>
        <u>A louer</u>
      </h3>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {listRentOffers.map((offer: IRentOffer, index: number) => (
          <Grid item xs={12} md={6} key={`offer-${index}`}>
            <CardActionArea component="a" onClick={() => rediretTo(offer.id)}>
              <Card sx={{ display: { xs: 'block', sm: 'flex' } }}>
                {index % 2 === 0 ? (
                  offer.offerImages && offer.offerImages.length ? (
                    <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 }, backgroundColor: '#0000004f' }}>
                      <LazyImage
                        className="img-fluid"
                        src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                        alt={offer.offerImages[0].path}
                      />
                    </CardMedia>
                  ) : (
                    <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 }, backgroundColor: '#0000004f' }}>
                      <LazyImage className="img-fluid" src={AllAppConfig.DEFAULT_LAZY_IMAGE} alt="Offer" />
                    </CardMedia>
                  )
                ) : null}
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {offer.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {offer.dateCreated}
                  </Typography>
                  <Box className="truncate-string" style={{ maxWidth: 400 }}>
                      <div dangerouslySetInnerHTML={{ __html: getDescription(offer) }}></div>
                  </Box>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
                {index % 2 !== 0 ? (
                  offer.offerImages && offer.offerImages.length ? (
                    <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 }, backgroundColor: '#0000004f' }}>
                      <LazyImage
                        className="img-fluid"
                        src={getImageForOffer(offer.id, offer.offerImages[0].path)}
                        alt={offer.offerImages[0].path}
                      />
                    </CardMedia>
                  ) : (
                    <CardMedia sx={{ width: { xs: '100%', sm: 250 }, height: { xs: '100%', sm: 200 }, backgroundColor: '#0000004f' }}>
                      <LazyImage className="img-fluid" src={AllAppConfig.DEFAULT_LAZY_IMAGE} alt="Offer" />
                    </CardMedia>
                  )
                ) : null}
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({ rentOffer }: IRootState) => ({
  listRentOffers: rentOffer.entitiesRentOffers,
});

const mapDispatchToProps = {
  getEntitiesForRent,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ForRentHomeClient);
