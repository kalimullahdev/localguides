import { Box, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { storage } from '../../firebase/firebase';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8),
      },

      marginWhole: {
          margin: theme.spacing(1),
          padding: theme.spacing(1),
      },
      buttonStyle:{
          width: theme.spacing(4),
      },

      input: {
        display: 'none',
      },
      imageStyle:{
          width: theme.spacing(28)
      }

  }));



const EditProfilePage = () => {
    const classes = useStyles();
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    console.log(imageAsFile)
    const handleImageAsFile = (e) => {
         const image = e.target.files[0]
         setImageAsFile(imageFile => (image))
     }
    
     const handleFireBaseUpload = e => {
        e.preventDefault()
      console.log('start of upload')
      // async magic goes here...
      if(imageAsFile === '') {
        console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
      }
      const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
      //initiates the firebase side uploading 
      uploadTask.on('state_changed', 
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(imageAsFile.name).getDownloadURL()
         .then(fireBaseUrl => {
           setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
         })
      })
      }
  

    return (
        <Container maxWidth="sm" className={classes.root} >
            <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="space-evenly"
            className={classes.marginWhole}
            >
                
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className={classes.marginWhole}
            >
                <Typography>Upload Image</Typography>
                
                <form onSubmit={handleFireBaseUpload}>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file"     onChange={handleImageAsFile} />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                        </IconButton>
                    </label>
                    <button>upload to firebase</button>
                </form>

            </Grid>
            <Box  >
                <img 
                className={classes.imageStyle}
                src={imageAsUrl.imgUrl} 
                alt="upload profile" />
            </Box>
            <TextField
                required
                id="filled-required"
                label="Name"
                defaultValue="Arsalan"
                variant="filled"
                className={classes.marginWhole}
                />
            <TextField
                required
                id="filled-required"
                label="Description"
                defaultValue="Arsalan Khan ki desriptioin"
                variant="filled"
                className={classes.marginWhole}
                />
            <Box
            display="flex"
            justifyContent="center"
            alignContent="center"
            >
                <Button variant="contained" color="primary" className={classes.buttonStyle}>
                Save
                </Button>
            </Box>
        </Grid>
        </Container>
    );
};

export default EditProfilePage;