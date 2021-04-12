import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as RouterLink} from 'react-router-dom';
import firebaseApp from '../../firebase/firebase';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function writeUserData(userId, username, email) {
  firebaseApp.database().ref('users/' + userId).set({
    username: username,
    email: email,
    phoneNumber: "",
    followers:"",
    about:"",
    location:"",
    profilePic:"",
    uid:userId,
  });
}


export default function Register(props) {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');



    function handleSubmit(event) {
      event.preventDefault();
      // console.log( 'Email:', email, 'Password: ', password, 'Username', username);
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var userID = userCredential.user.uid;
        writeUserData(userID, username, email);
        history.push('/');
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
      });
      
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
        Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                onInput={ e=>setUsername(e.target.value)}
                autoComplete="username"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onInput={ e=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onInput={ e=>setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container justify="center">
            <Grid item>
            <Typography variant="body2" component="body">OR</Typography>
            <Link component={RouterLink} to="/signin" underline="none" color="secondary">
                SignIn
            </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}