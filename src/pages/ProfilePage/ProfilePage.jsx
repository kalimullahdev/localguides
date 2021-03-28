import { Container, Avatar, Grid, Button, Box, Typography} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArticlesInProfile from '../../components/ArticlesInProfile/ArticlesInProfile';
import { useHistory } from "react-router-dom";


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

    function moveToEditPage(){
      history.push("/main/editprofile");
    }
    
    return (
        <Container maxWidth="lg" className={classes.root} >
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center">
                <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random"  className={classes.avatar} />


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
                            Muhammad Arsalan
                        </Typography>
                        <Typography className={classes.horizantalMargin} >
                            5.3k Followers
                        </Typography>
                        
                        <Button  className={classes.buttonStyle} onClick={ () => moveToEditPage() }  >
                                Edit
                        </Button>
                        
                    </Box>

                    <Typography variant="subtitle1">
                        Arsalan is a Tourist who has visited many places in Pakistan.
                    </Typography>
                </Box>
                
                
                <Box
                display="flex"
                flexDirection="column"
                >
                    <Button variant="contained" color="primary" className={classes.buttonStyle}>
                    Follow
                    </Button><Button variant="contained" color="primary" className={classes.buttonStyle}>
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
                <ArticlesInProfile/>
                <ArticlesInProfile/>
                <ArticlesInProfile/>
                <ArticlesInProfile/>
                <ArticlesInProfile/>
            </Grid>

        </Container>
    );
};

export default ProfilePage;