import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import firebaseApp from "../../firebase/firebase";
import SingleComment from "../../components/SingleComment/SingleComment";
import {
    FacebookShareButton,
  } from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  marginAll: {
    margin: theme.spacing(1),
  },
  marginHorizantal: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  cover: {
    width: "100%",
    height: theme.spacing(40),
    display: "inline-block",
    marginBlock: theme.spacing(2),
  },
  articleTitleStyle: {
    paddingInline: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    fontWeight: "bold",
  },
}));

export default function SingleArticle() {
  const classes = useStyles();
  const location = useLocation();
  const [sArticleTitle, setsArticleTitle] = useState("");
  const [sArticleContent, setsArticleContent] = useState("");
  const [sArticlePicture, setsArticlePicture] = useState("");
  const [sComment, setsComment] = useState("");
  const [sArticleId, setsArticleId] = useState("");
  const [sUserId, setsUserId] = useState("");
  const [sUserName, setsUserName] = useState("");
  const [sProfilePic, setsProfilePic] = useState("");


  const [commentsList, setCommentsList] = useState([]);

  function getComments(aid){
    var articlesRef = firebaseApp.database().ref('articles/' + aid + "/comments/");
      articlesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const listOfComments = [];
        for(let cid in data){
          listOfComments.push({cid,...data[cid]})
        }
        setCommentsList(listOfComments);
      });
  }


  function handleSubmit(event) {
    event.preventDefault();
    setsComment("");
    DoComment(sUserId, sArticleId, sComment);
  }


  function DoComment(userId, aid, description) {
    firebaseApp.database().ref('articles/' + aid + "/comments/").push().set({
      userId: userId,
      description : description,
    });
  }


  useEffect(() => {

    firebaseApp
      .database()
      .ref("articles")
      .child(location.state.aid)
      .get()
      .then(function (snapshot) {
        if (snapshot.exists()) {
          
          setsArticleId(location.state.aid);
          const data = snapshot.val();
          setsUserId(location.state.userId);
          setsArticleTitle(data.title);
          setsArticleContent(data.articleContent);
          setsArticlePicture(data.articlePic);
          firebaseApp.database().ref("users").child(location.state.userId).get().then(function(snapshot) {
            if (snapshot.exists()) {
              const data = snapshot.val();
              console.log(data.username);
              setsProfilePic(data.profilePic);
              setsUserName(data.username);
            }
            else {
              console.log("No data available");
            }
          }).catch(function(error) {
            console.error(error);
          }); 
        } else {
          console.log("No data available");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
      getComments(location.state.aid);
  }, [location.state]);


  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        className={classes.articleTitleStyle}
        component="h1"
      >
        {sArticleTitle}
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Box>
          <Grid container direction="row" justify="center" alignItems="center">
            <Avatar aria-label="recipe" className={classes.avatar} src={sProfilePic} />

            <Container>
            <Box className={classes.marginAll} >
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
              >
                <Typography variant="subtitle1" component="span">
                  {sUserName}
                </Typography>
                <Typography variant="subtitle2" component="span">
                  Feb 13 2021
                </Typography>
              </Grid>
            </Box>
            </Container>
            <FacebookShareButton 
             quote="Visit the newly lunched Tourism LocalGuide(WebApp)"
             url="www.localguides.com"
             >
              <Button
                variant="contained"
                color="primary"
                className={classes.marginAll}
              >
                Share
              </Button>
            </FacebookShareButton>
          </Grid>
        </Box>
      </Grid>

      <Container maxWidth="sm">
        <Typography variant="body1" align="left">
          <CardMedia
            className={classes.cover}
            image={sArticlePicture}
            title="Live from spacedse album cover"
          />

          {sArticleContent}
        </Typography>
        <Typography
          variant="h6"
          align="left"
          paragraph="true"
          className={classes.marginAll}
        >
          Commnets
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            required
            id="comment"
            name="comment"
            multiline
            rows={4}
            placeholder="Add a public comment"
            variant="outlined"
            fullWidth
            value={sComment}
            onInput={(e) => setsComment(e.target.value)}
          />
          <Button
            fullWidth
            color="primary"
            variant="contained"
            className={classes.marginHorizantal}
            type="submit"
          >
            COMMENT
          </Button>
        </form>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center"
            py={3} alignContent="center" alignItems="center">
                {
                    commentsList ? commentsList.map((row) => (
                        <SingleComment  postData={row}  />
                    )) : 'No Comment'  
                }
            </Box>
      </Container>
      <Box mb={8} />
    </Container>
  );
}
