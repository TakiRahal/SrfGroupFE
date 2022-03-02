import * as React from 'react';
import Card from '@mui/material/Card/Card';
import Skeleton from '@mui/material/Skeleton/Skeleton';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import PropTypes from 'prop-types';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';

LoadingSearchOffers.propTypes = {
  loading: PropTypes.bool,
};

export default function LoadingSearchOffers() {
  // const { loading = false } = props;

  return (
    <>
      <CardActionArea component="a">
        <Card sx={{ display: 'flex' }}>
          <CardMedia sx={{ width: 250, display: { xs: 'none', sm: 'block' } }}>
            <Skeleton sx={{ height: '100%' }} animation="wave" variant="rectangular" />
          </CardMedia>
          <CardContent sx={{ flex: 1 }} className="pb-0">
            <Typography component="h2" variant="h5">
              <Skeleton animation="wave" height={24} style={{ marginBottom: 6 }} />
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              <Skeleton animation="wave" height={14} style={{ marginBottom: 6 }} />
            </Typography>
            <Typography variant="subtitle1" paragraph>
              <Skeleton sx={{ height: 150 }} animation="wave" variant="rectangular" />
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>

      <CardActionArea component="a" sx={{mt: 5}}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia sx={{ width: 250, display: { xs: 'none', sm: 'block' } }}>
            <Skeleton sx={{ height: '100%' }} animation="wave" variant="rectangular" />
          </CardMedia>
          <CardContent sx={{ flex: 1 }} className="pb-0">
            <Typography component="h2" variant="h5">
              <Skeleton animation="wave" height={24} style={{ marginBottom: 6 }} />
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              <Skeleton animation="wave" height={14} style={{ marginBottom: 6 }} />
            </Typography>
            <Typography variant="subtitle1" paragraph>
              <Skeleton sx={{ height: 150 }} animation="wave" variant="rectangular" />
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>

      <CardActionArea component="a" sx={{mt: 5}}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia sx={{ width: 250, display: { xs: 'none', sm: 'block' } }}>
            <Skeleton sx={{ height: '100%' }} animation="wave" variant="rectangular" />
          </CardMedia>
          <CardContent sx={{ flex: 1 }} className="pb-0">
            <Typography component="h2" variant="h5">
              <Skeleton animation="wave" height={24} style={{ marginBottom: 6 }} />
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              <Skeleton animation="wave" height={14} style={{ marginBottom: 6 }} />
            </Typography>
            <Typography variant="subtitle1" paragraph>
              <Skeleton sx={{ height: 150 }} animation="wave" variant="rectangular" />
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </>
  );
}
