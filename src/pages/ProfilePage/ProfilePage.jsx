import { Container, Avatar, Grid, Button, Box, Typography} from '@material-ui/core';
import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArticlesInProfile from '../../components/ArticlesInProfile/ArticlesInProfile';
import { useHistory } from "react-router-dom";
import firebaseApp from '../../firebase/firebase';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(5),
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: theme.spacing(2),
    },
    buttonStyle:{
        margin: theme.spacing(1),
    },

    nameStyle:{
        fontWeight:600,
    },

    horizantalMargin:{
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8),
    },

    marginPadding: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    
    editButtonStyle:{
        
    },

  }));
  


const ProfilePage = () => {
    const classes = useStyles();
    const history = useHistory();

    const [sUsername, setsUsername] = useState('');
    const [sProfilePic, setsProfilePic] = useState('');
    const [sAbout, setsAbout] = useState('');
    const [sFollowers, setsFollowers] = useState('');
    const [sCurrentUserArticles, setsCurrentUserArticles] = useState([]);
    const [sUid, setsUid] = useState('');

    function moveToEditPage(){
        firebaseApp.database().ref("users/").child(sUid).get().then(function(snapshot) {
            if (snapshot.exists()) {
              const lgUserData = snapshot.val();
              history.push({
                pathname: '/editprofile',
                state: { detail: lgUserData }
              })
            }
            else {
              console.log("No data available");
            }
          }).catch(function(error) {
            console.error(error);
          });
    
    
          // const localGuideRef = firebaseApp.database().ref("users/").child(row.uid);

    }



    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                // Get Current User From Database
                const currentUserRef = firebaseApp.database().ref('users').child(user.uid);
                currentUserRef.on('value', (snapshot) => {
                const data = snapshot.val();
                setsUsername(data.username);
                setsProfilePic(data.profilePic);
                setsAbout(data.about);
                setsFollowers(data.followers);
                setsUid(data.uid);
                
                // Get All Articles of That Users
                const articlesRef = firebaseApp.database().ref('articles');
                articlesRef.on('value', (snapshot) => {
                    const data = snapshot.val();
                    const currentUserArticles = [];
                    for(let aid in data){
                        const articleRef = firebaseApp.database().ref('articles').child(aid);
                        articleRef.on('value', (snapshot) => {
                            const articleData = snapshot.val();
                            if(articleData.uid === user.uid){
                                currentUserArticles.push(articleData);
                            }
                        } );

                    }
                   setsCurrentUserArticles(currentUserArticles);
                  });

                });
            } else {
              // User not logged in or has just logged out.
            }
          });

    }, []);
    
    return (
        <Container maxWidth="lg" className={classes.root} >
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
                <Avatar alt="Remy Sharp" src={sProfilePic}  className={classes.avatar} />


                <Box
                display="flex"
                flexDirection="column"
                className={classes.marginPadding}
                >
                    <Box
                    display="flex"
                    flexDirection="row"
                    >
                        <Typography className={classes.nameStyle}>
                            {sUsername}
                        </Typography>
                        <Typography className={classes.horizantalMargin} >
                            {sFollowers} followers
                        </Typography>
                        
                        <Button color='primary' variant='contained' className={classes.buttonStyle} onClick={ () => moveToEditPage() }  >
                                Edit
                        </Button>
                        
                    </Box>

                    <Typography variant="subtitle1">
                        {sAbout}
                    </Typography>
                </Box>
                
                <Box
                display="flex"
                flexDirection="column"
                >
                    <Button variant="contained" color="primary" className={classes.buttonStyle}>
                    Follow
                    </Button>
                    <Button variant="contained" color="primary" className={classes.buttonStyle}>
                    Share
                    </Button>
                </Box>
            </Grid>
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            >
             
             {
                 sCurrentUserArticles ?
                    sCurrentUserArticles.map((article) => <ArticlesInProfile article={article}  />  )
                 : ''
             }  
            </Grid>

        </Container>
    );
};

export default ProfilePage;