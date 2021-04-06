import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import Slider from './pages/Slider/Slider';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="Routing">
        <Router>
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
      </Router>
      </div>
    </div>
  );
}

export default App;
