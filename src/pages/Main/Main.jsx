import React from 'react';
import LGAppBar from '../../components/LGAppBar/LGAppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TrendingPost from '../TrendingPost/TrendingPost';


function Main(){
    return (
        <>
        <LGAppBar/>
          <Router>
            <Switch>
            <Route path="/main/trendingPost">
              <TrendingPost/>
            </Route>
            </Switch>
          </Router>
        </>
    );
}

export default Main;