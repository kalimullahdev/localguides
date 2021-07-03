import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import TrendingPost from '../TrendingPost/TrendingPost';
import ProfilePage from '../ProfilePage/ProfilePage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import SingleArticle from '../SingleArticle/SingleArticle';
import firebaseApp from '../../firebase/firebase';
import SearchPlacePage from '../SearchPlacePage/SearchPlacePage';
import  MapContainer from '../GoogleMaps/MapContainer';
import Chats from '../../modules/chats/Chats';
import EditArticle from '../EditArticle/EditArticle';
import AddNewArticle from '../AddNewArticle/AddNewArticle';

function Main(){
  const history = useHistory();
  useEffect(() => {
     firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User is signed In");
      } else {
        console.log("No user is signed in.");
        history.push('/slider');
      }
    });  
  }, );


    return (
          <Router>
            <Switch>
              <Route exact path="/profile">
                <ProfilePage/>
              </Route>
              <Route path="/singleArticle">
                <SingleArticle/>
              </Route>
            <Route exact path="/">
              <TrendingPost/>
            </Route>
            <Route exact path="/editArticlePage">
              <EditArticle/>
            </Route>
            <Route path="/editprofile">
              <EditProfilePage/>
            </Route>
            <Route path="/googleMaps">
              <MapContainer/>
            </Route>
            <Route path="/searchedPlaced">
              <SearchPlacePage/>
            </Route>
            <Route path="/addNewArticle">
              <AddNewArticle/>
            </Route>
            <Route path="/chats">
              <Chats/>
            </Route>
            </Switch>
          </Router>
    );
}

export default Main;