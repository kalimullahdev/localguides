import { Avatar, Box, Button, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect,useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { useLocation } from 'react-router-dom';
import firebaseApp from '../../firebase/firebase';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      margin:theme.spacing(1),
    },
    avatar: {
      backgroundColor: red[500],
    },
    marginAll: {
        margin: theme.spacing(1),
    },
      cover: {
        width: "100%",
        height: theme.spacing(40),
        display:'inline-block',
        margin: theme.spacing(2),
      },
  }));
  

export default function SingleArticle() {
    const classes = useStyles();
    const location = useLocation();
    const [sArticleTitle, setsArticleTitle] = useState('');
    const [sArticleContent, setsArticleContent] = useState('');
    const [sArticlePicture, setsArticlePicture] = useState('');


    useEffect(() => {
        firebaseApp.database().ref('articles').child(location.state.detail).get().then(function(snapshot) {
            if (snapshot.exists()) {
                const data = snapshot.val();
                setsArticleTitle(data.title);
                setsArticleContent(data.articleContent);
                setsArticlePicture(data.articlePic);
            }
            else {
              console.log("No data available");
            }
          }).catch(function(error) {
            console.error(error);
          });

    }, [location.state.detail])

    return (
        <Container maxWidth="md">
            <Typography variant="h3" component="h1"> {sArticleTitle} </Typography>
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            >            
            
            
            <Box>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            > 
            <Avatar aria-label="recipe" className={classes.avatar}>
                R
            </Avatar>
            
            <Box className={classes.marginAll} >
                <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                > 
                    <Typography variant="subtitle1" component="span">Business Insider</Typography>
                    <Typography variant="subtitle2" component="span">Feb 13 2021</Typography>
                </Grid>
            </Box>
            <Button size="small" color="primary" variant="contained" className={classes.marginAll} >
                Follow
            </Button>
          </Grid>

            </Box>

          <Typography>
              Share
          </Typography>

            </Grid>

            <Container maxWidth="sm">

            <Typography variant="body1" align="left"  >
                <CardMedia
                    className={classes.cover}
                    image={sArticlePicture}
                    title="Live from spacedse album cover"
                />

                {sArticleContent}

            </Typography>
            </Container>

        </Container>
    )
}
