import './App.css';

import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import Slider from './pages/Slider/Slider';
import Main from './pages/Main/Main';
import { useEffect } from 'react';
import firebaseApp from './firebase/firebase';



function App() {
  let history = useHistory();

  useEffect(() => {
     firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User is signed In");
        history.push('/main/trendingPost');
      } else {
        console.log("No user is signed in.");
      }
    });  
  }, [history]);


  return (
    <div className="App">
      <div className="Routing">
          <Switch>
            <Route exact path="/">
              <Slider/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <Route path="/main">
              <Main/>
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
