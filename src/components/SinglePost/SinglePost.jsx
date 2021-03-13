import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:theme.spacing(1),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
  },
  content: {
    flex: '1 0 auto',
  },
  cardContent: {
      paddingTop: '4px',
  },
  cardHeader: {
    paddingBottom:'0px'
  },
  cover: {
    width: 551,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default function SinglePost() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        
      
      <div className={classes.details}>
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="p" component="p"  >
          Islamabad is the capital city of Pakistan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://images.unsplash.com/photo-1547656807-9733c2b738c2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        title="Live from space album cover"
      />
    </Card>
  );
}
