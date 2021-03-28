import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: theme.spacing(4),
      },
      media: {
        height: 140,
        margin: theme.spacing(2),
      },

  }));
  

export default function ArticlesInProfile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/collection/190727/1600x900"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      
    </Card>
  );
}
