import './App.css';
import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import Slider from './pages/Slider/Slider';


function App() {
  return (
    <div className="App">
      <h1>
        <Slider/>
        <Register/>
        <SignIn/>
      </h1>
    </div>
  );
}

export default App;
