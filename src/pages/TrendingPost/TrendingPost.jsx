import React, { useEffect, useState }  from 'react';
import { Container, Box } from '@material-ui/core';
import SinglePost from '../../components/SinglePost/SinglePost';
import Typography from '@material-ui/core/Typography';
import firebaseApp from '../../firebase/firebase';




const TrendingPost = () => {
    const [articlesList, setarticlesList] = useState([]);

    useEffect(() => {
        var articlesRef = firebaseApp.database().ref('articles');
        articlesRef.on('value', (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          const trendingArticles = [];
          for(let aid in data){
            trendingArticles.push({aid,...data[aid]})
          }
          setarticlesList(trendingArticles);
        });
      }, []);
    
    
    return (
        <Container maxWidth="sm" >
            <Box py={2}>
            <Typography  variant="h3"  component="h3" > 
                Trending Post...
            </Typography>
            </Box>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center"
            py={3} alignContent="center" alignItems="center">
                {
                    articlesList ? articlesList.map((row) => (
                        <SinglePost postData={row} />
                    )) : 'No Articles'  
                }
            </Box>
        </Container>
    );
};

export default TrendingPost;