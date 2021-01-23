import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe/index';
import BPCard from './pages/BPCard/index';
import Home from './pages/Home/index';
import Navbar from './components/Navbar/index';
import DetailProfile from './pages/BPCard/Profile';
import RJBook from './pages/RJCard/index';
import Contributor from './pages/Contributor';
import ContributorDetail from './pages/Contributor/detail';
import Counter from './pages/Count/index';
import './App.css';
import 'antd/dist/antd.css';


function App() {
  return (
          <Router>
            <Navbar />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/bp-card' component={BPCard}/>
                <Route path='/about-me' component={AboutMe}/>
                <Route path='/rj-card' component={RJBook}/>
                <Route path='/detail-profile/:id' component={DetailProfile}/>
                <Route path='/contributor' component={Contributor}/>
                <Route path='/contributor-detail/:id' component={ContributorDetail}/>
                <Route path='/counter' component={Counter}/>
              </Switch>
          </Router>
      );
    }

export default App;

