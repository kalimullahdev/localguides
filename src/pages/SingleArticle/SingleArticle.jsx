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
import { red } from "@material-ui/core/colors";
import { useLocation } from "react-router-dom";
import firebaseApp from "../../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(1),
  },
  avatar: {
    backgroundColor: red[500],
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
    margin: theme.spacing(2),
  },
  articleTitleStyle: {
    padding: theme.spacing(5),
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Comment is "+ sComment);
    
    console.log("Article ID is: "+ sArticleId);
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
      .child(location.state.detail)
      .get()
      .then(function (snapshot) {
        if (snapshot.exists()) {
          
          setsArticleId(location.state.detail);
          const data = snapshot.val();
          setsUserId(data.uid);
          setsArticleTitle(data.title);
          setsArticleContent(data.articleContent);
          setsArticlePicture(data.articlePic);
        } else {
          console.log("No data available");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [location.state.detail]);

  return (
    <Container maxWidth="md">
      <Typography
        variant="h5"
        className={classes.articleTitleStyle}
        component="h1"
      >
        {" "}
        {sArticleTitle}{" "}
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Box>
          <Grid container direction="row" justify="center" alignItems="center">
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>

            <Box className={classes.marginAll}>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
              >
                <Typography variant="subtitle1" component="span">
                  Business Insider
                </Typography>
                <Typography variant="subtitle2" component="span">
                  Feb 13 2021
                </Typography>
              </Grid>
            </Box>
            <Button
              size="small"
              color="primary"
              variant="contained"
              className={classes.marginAll}
            >
              Follow
            </Button>
          </Grid>
        </Box>

        <Typography>Share</Typography>
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
      </Container>
      <Box mb={8} />
    </Container>
  );
}
