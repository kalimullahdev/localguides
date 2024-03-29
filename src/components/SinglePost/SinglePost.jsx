import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import firebaseApp from '../../firebase/firebase';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    width:440,
    height:200,
    display: 'flex',
    margin:theme.spacing(1),
    cursor: 'pointer',
    

  },
  details: {
    display: 'inline-block',
    flexDirection: 'column',
    textAlign: 'start',
    width: '60%',
  },
  content: {
    flex: '1 0 auto',
  },
  cardContent: {
      paddingTop: '4px',
      userSelect:'none',
  },
  cardHeader: {
    paddingTop:'0px',
    paddingBottom:'0px',
    userSelect:'none',
  },
  cover: {
    width: '40%',
    display:'inline-block',
    margin: theme.spacing(2),
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
  marginAll:{
    margin:theme.spacing(2),
    fontWeight: 600,
  }
}));



export default function SinglePost(props) {
  const classes = useStyles();
  const {id, title, description, uid, articlePic, aid} = props.postData;
  const [sUsername, setsUsername] = useState('');
  const [sProfilePic, setsProfilePic] = useState('');
  const history = useHistory();

  useEffect(() => {
    firebaseApp.database().ref("users").child(uid).get().then(function(snapshot) {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data.username);
        setsUsername(data.username);
        setsProfilePic(data.profilePic);
      }
      else {
        console.log("No data available");
      }
    }).catch(function(error) {
      console.error(error);
    });  
  }, [uid]);


  function articleDetails({aid}){
    history.push({
      pathname: '/singleArticle',
      state:  {
        aid: aid,
        userId: uid,
      } 
    });
  }
  


  return (
    <Card className={classes.root} key={id} onClick={()=> articleDetails({aid})} >
      <div className={classes.details}>
      <Typography gutterBottom variant="p" className={classes.marginAll}  component="p"  >
          {title}
          </Typography>
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" src={sProfilePic} className={classes.avatar}/>
        }
        title={sUsername}
      />
      <CardContent className={classes.cardContent}>
          <Typography variant="body2" color="textSecondary" component="p" >
            {description}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={articlePic}
        title="Live from space album cover"
      />
    </Card>
  );
}
