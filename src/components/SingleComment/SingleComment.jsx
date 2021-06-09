import React, { useEffect, useState } from "react";
import { Avatar, Grid, Paper, Divider, Container } from "@material-ui/core";
import firebaseApp from "../../firebase/firebase";


export default function SingleComment(props) {
  const { userId, description, id } = props.postData;
  const [sUsername, setsUsername] = useState("");
  const [sProfilePic, setsProfilePic] = useState("");

  useEffect(() => {
    if (userId) {
      firebaseApp
        .database()
        .ref("users")
        .child(userId)
        .get()
        .then(function (snapshot) {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setsUsername(data.username);
            setsProfilePic(data.profilePic);
          } else {
            console.log("No data available");
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [userId]);

  return (
    <Container>
      <Paper style={{ padding: "40px 20px" }} key={id}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
        <Avatar alt="Remy Sharp" src={sProfilePic} />
      </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{sUsername}</h4>
            <p style={{ textAlign: "left" }}>{description}</p>
          </Grid>
        </Grid>
      </Paper>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
    </Container>
  );
}
