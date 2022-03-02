import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import Collapse from '@mui/material/Collapse/Collapse';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@mui/material/styles/styled';
import { useEffect } from 'react';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';

const ExpandMore = styled((props: any) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function RecentlyAddedHomeClient(props: any){
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const rediretTo = (id: string) => {
    };

    const getPathAvatar = (url: string) => {
        return '';
    };

    const getPathImage = (url: string) => {
        return '';
    };

    const offerList: any[] = [];

    return (
        <Container maxWidth="xl" className="mt-5" sx={{ p: 0 }}>
            <h3>
                <u>Récemment ajoutés</u>
            </h3>
            <Grid container spacing={4}>
                {offerList.map((offer: any, index: number) => (
                    <Grid item key={offer.id} xs={12} sm={6} md={4}>
                        <CardActionArea component="a" onClick={() => rediretTo(offer.id)} key={`entity-${index}`}>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={getPathAvatar(offer.user)}>
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={offer.user?.firstName + ' ' + offer.user?.lastName}
                                    subheader={offer.dateCreated}
                                />
                                <CardMedia component="img" height="194" image={getPathImage(offer)} alt="Paella dish" />
                                <CardContent className="card-content-offer">
                                    <Typography variant="body2" color="text.secondary" className="truncate-string-two-lines">
                                        {offer.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}