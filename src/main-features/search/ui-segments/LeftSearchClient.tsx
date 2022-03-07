import * as React from 'react';
import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography/Typography';
import CardContent from '@mui/material/CardContent/CardContent';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import Card from '@mui/material/Card/Card';
import Container from '@mui/material/Container';
import { red } from '@mui/material/colors';
import Collapse from '@mui/material/Collapse/Collapse';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton/IconButton';
import CardActions from '@mui/material/CardActions/CardActions';
import styled from '@mui/material/styles/styled';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Avatar from '@mui/material/Avatar/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

export default function LeftSearchClient() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    // try {
    //   if (FB) {
    //     FB.XFBML.parse();
    //   }
    // } catch (e) {
    //   window.console.error('FB not defined');
    // }
  }, []);

  return (
    <Box>
      <Box>
        <div style={{ width: '100%' }}>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/profile.php?id=100054409273167"
            data-tabs="timeline"
            data-width="300"
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </div>

      </Box>
      <Card sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia component="img" height="194" image="https://source.unsplash.com/random" alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along
            with the mussels, if you like.
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.</Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and
              cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often
              until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the
              liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the
              rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any
              mussels that don’t open.)
            </Typography>
            <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
          </CardContent>
        </Collapse>
      </Card>

      {/*<div*/}
      {/*className="fb-page fb_iframe_widget mt-5"*/}
      {/*data-hide-cover="false"*/}
      {/*data-href="https://www.facebook.com/KaryaJdida-2257977854528671"*/}
      {/*data-show-facepile="false"*/}
      {/*data-tabs="timeline,events,messages"*/}
      {/*ng-reflect-class-base="fb-page"*/}
      {/*fb-xfbml-state="rendered"*/}
      {/*fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=245657049545231&amp;container_width=266&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FKaryaJdida-2257977854528671&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;tabs=timeline%2Cevents%2Cmessages"*/}
      {/*>*/}
      {/*<iframe*/}
      {/*name="f25e669ab81d0a8"*/}
      {/*width="500px"*/}
      {/*height="1000px"*/}
      {/*title="fb:page Facebook Social Plugin"*/}
      {/*frameBorder="0"*/}
      {/*scrolling="no"*/}
      {/*allow="encrypted-media"*/}
      {/*src="https://www.facebook.com/v5.0/plugins/page.php?adapt_container_width=true&amp;app_id=245657049545231&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df24ee1eab1a4754%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A4200%252Ff33ac19e7de361%26relation%3Dparent.parent&amp;container_width=266&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FKaryaJdida-2257977854528671&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;tabs=timeline%2Cevents%2Cmessages"*/}
      {/*className=""*/}
      {/*></iframe>*/}
      {/*</div>*/}
    </Box>
  );
}
