import './App.css';

import {
  Switch,
  Route,
} from "react-router-dom";

import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import Slider from './pages/Slider/Slider';
import LGAppBar from './components/LGAppBar/LGAppBar';



function App() {

  return (
    <div className="App">
      <div className="Routing">
          <Switch>
            <Route exact path="/slider">
              <Slider/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <Route path="/">
              <LGAppBar/>
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
