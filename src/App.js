import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Teams from './components/Teams/Teams';
import initializeAuthentication from './Firebase/firebase.init';



initializeAuthentication();


function App() {
  // const element = <FontAwesomeIcon icon={faCoffee} />
  return (
    <div className="App">
          
            <Router>
            <Header/>
            <Switch>
          <Route exact path="/about">
         <About></About>
          </Route>
          <Route exact path="/portfolio">
         <Portfolio></Portfolio>
          </Route>
          <Route exact path="/news">
         <News></News>
          </Route>
          <Route exact path="/teams">
         <Teams></Teams>
          </Route>
          <Route exact path="/contact">
         <Contact></Contact>
          </Route>
          <Route exact path="/home">
         <Home></Home>
          </Route>
          <Route exact path="/">
         <Home></Home>
          </Route>
          
        </Switch>
       </Router>
    </div>
  );
}

export default App;
