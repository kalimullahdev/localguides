import React from 'react';
import { Container, Box } from '@material-ui/core';
import SinglePost from '../../components/SinglePost/SinglePost';
import Typography from '@material-ui/core/Typography';





const TrendingPost = () => {
    return (
        <Container maxWidth="sm" >
            <Box py={2}>
            <Typography  variant="h3" color="textSecondary" component="h3" > 
                Trending Post...
            </Typography>
            </Box>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center"
            py={3} alignContent="center" alignItems="center"> 
                <SinglePost/>
                <SinglePost/>
                <SinglePost/>
            </Box>
        </Container>
    );
};

export default TrendingPost;