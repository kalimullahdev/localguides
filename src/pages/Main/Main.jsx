import React from 'react';
import LGAppBar from '../../components/LGAppBar/LGAppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TrendingPost from '../TrendingPost/TrendingPost';
import ProfilePage from '../ProfilePage/ProfilePage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';


function Main(){
    return (
        <>
        <LGAppBar/>
          <Router>
            <Switch>
              <Route path="/main/profile">
                <ProfilePage/>
              </Route>
            <Route path="/main/trendingPost">
              <TrendingPost/>
            </Route>
            <Route path="/main/editprofile">
              <EditProfilePage/>
            </Route>
            </Switch>
          </Router>
        </>
    );
}

export default Main;