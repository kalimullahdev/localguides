import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import Slider from './pages/Slider/Slider';
import TrendingPost from './pages/TrendingPost/TrendingPost';

function App() {
  return (
    <div className="App">
      <div className="Routing">
        <Router>
          <Switch>
            <Route path="/slider">
              <Slider/>
            </Route>
          
            
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <Route path="/main">
              <TrendingPost/>
            </Route>
          </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
