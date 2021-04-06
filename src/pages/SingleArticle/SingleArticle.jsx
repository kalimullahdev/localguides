import { Avatar, Box, Button, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
        width: 551,
        margin: theme.spacing(2),
      },
  }));
  

export default function SingleArticle() {
    const classes = useStyles();


    return (
        <Container maxWidth="md">
            <Typography variant="h3" component="h1">The Lahore Journal of Economics</Typography>
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


            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Vel pretium lectus quam id leo in vitae turpis. Ornare arcu odio ut sem nulla. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Donec enim diam vulputate ut. Vel risus commodo viverra maecenas. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Volutpat odio facilisis mauris sit amet massa vitae tortor. Risus in hendrerit gravida rutrum quisque non tellus. Purus semper eget duis at tellus. At consectetur lorem donec massa sapien. Convallis posuere morbi leo urna molestie at elementum eu. Feugiat nisl pretium fusce id velit ut. Nec sagittis aliquam malesuada bibendum. Sit amet facilisis magna etiam tempor. Risus viverra adipiscing at in tellus.
            <Box m={4} />

            <CardMedia
            className={classes.cover}
            image="https://images.unsplash.com/photo-1571950337252-fcb5801b117a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            title="Live from space album cover"
            />
            sPellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Laoreet sit amet cursus sit amet dictum. Risus at ultrices mi tempus. Massa eget egestas purus viverra. Sagittis nisl rhoncus mattis rhoncus. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Venenatis tellus in metus vulputate eu scelerisque. Commodo odio aenean sed adipiscing diam. Malesuada fames ac turpis egestas sed. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Condimentum id venenatis a condimentum vitae sapien pellentesque. Sociis natoque penatibus et magnis. Viverra ipsum nunc aliquet bibendum. Sagittis orci a scelerisque purus semper eget duis. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Id semper risus in hendrerit gravida rutrum. Facilisis gravida neque convallis a cras semper.
            <Box m={4} />
            
            Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nulla aliquet porttitor lacus luctus accumsan tortor. Quam lacus suspendisse faucibus interdum posuere lorem. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Pretium lectus quam id leo in. Lectus nulla at volutpat diam ut venenatis tellus in. Orci ac auctor augue mauris augue neque gravida in fermentum. Egestas sed tempus urna et pharetra pharetra massa massa. Arcu odio ut sem nulla pharetra diam sit amet. Purus sit amet volutpat consequat mauris nunc. Ut sem nulla pharetra diam sit. Cras semper auctor neque vitae. Felis eget nunc lobortis mattis aliquam. Eu volutpat odio facilisis mauris. Neque ornare aenean euismod elementum nisi quis. Et tortor consequat id porta nibh. Eget gravida cum sociis natoque. Ac odio tempor orci dapibus ultrices in iaculis.
            <Box m={4} />

            Ultricies tristique nulla aliquet enim tortor. Et sollicitudin ac orci phasellus egestas tellus. At risus viverra adipiscing at in. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Fringilla ut morbi tincidunt augue interdum velit. Augue eget arcu dictum varius duis at consectetur. Urna porttitor rhoncus dolor purus non enim praesent. Ullamcorper malesuada proin libero nunc consequat interdum varius. Id interdum velit laoreet id donec ultrices tincidunt. Sagittis aliquam malesuada bibendum arcu vitae elementum. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Pulvinar mattis nunc sed blandit libero. Neque egestas congue quisque egestas diam in arcu. Lorem ipsum dolor sit amet consectetur adipiscing elit. Odio euismod lacinia at quis risus sed vulputate odio. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.
            <Box m={4} />

            Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipiscing. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Tincidunt augue interdum velit euismod in pellentesque. Et malesuada fames ac turpis egestas sed tempus urna. Mi tempus imperdiet nulla malesuada pellentesque. Enim ut sem viverra aliquet eget sit amet. Tempor orci eu lobortis elementum nibh tellus. Cursus metus aliquam eleifend mi in nulla. At in tellus integer feugiat scelerisque varius morbi enim nunc. Arcu non odio euismod lacinia at. Sapien et ligula ullamcorper malesuada proin.
            <Box m={4} />

            Tincidunt tortor aliquam nulla facilisi cras. Faucibus ornare suspendisse sed nisi lacus. Vestibulum lectus mauris ultrices eros in cursus. Turpis egestas sed tempus urna et pharetra. Massa tempor nec feugiat nisl pretium fusce id velit. Tortor condimentum lacinia quis vel eros donec. Adipiscing at in tellus integer feugiat scelerisque varius morbi. In egestas erat imperdiet sed euismod. Sodales ut eu sem integer vitae. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Elit eget gravida cum sociis natoque penatibus.
            <Box m={4} />

            Scelerisque viverra mauris in aliquam sem fringilla ut. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sem viverra aliquet eget sit amet tellus. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Auctor augue mauris augue neque gravida in fermentum. Enim eu turpis egestas pretium aenean pharetra. Ornare arcu dui vivamus arcu felis bibendum. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Tortor condimentum lacinia quis vel eros donec ac odio. Lobortis feugiat vivamus at augue. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Vulputate mi sit amet mauris commodo. Augue neque gravida in fermentum. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Volutpat odio facilisis mauris sit amet massa. Augue eget arcu dictum varius duis at consectetur lorem donec.
            
            </Typography>
            </Container>

        </Container>
    )
}
