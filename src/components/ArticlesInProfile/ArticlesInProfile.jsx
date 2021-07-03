import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

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



export default function ArticlesInProfile(props) {
  const classes = useStyles();
  const { title,uid, description, articlePic, aid } = props.article;
  const history = useHistory();

  function articleDetails() {
    if(uid){
      history.push({
        pathname: '/singleArticle',
        state: {
          aid: aid,
          userId: uid,
        }
      });
    }
  }
  return (
    <Card className={classes.root} 
    onClick= {()=> articleDetails()} 
     >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={articlePic}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}
