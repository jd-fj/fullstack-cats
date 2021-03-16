import Fact from './Fact';
import Breed from './Breed';
import NavBar from './NavBar';
import Home from './Home';
import Threed from './Threed';
import CatPics from './CatPics';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container"> 
        <Switch>
          <Route exact path="/catstone">
            <Home/>
          </Route>
          <Route path="/fact">
            <Fact/>
          </Route>
          <Route path="/breeds">
            <Breed/>
          </Route>
          <Route path="/catpics">
            <CatPics/>
          </Route>
          <Route path="/kittycube">
            <Threed/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
