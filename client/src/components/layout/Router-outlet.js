import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import About from '../about/About';
import Intro from '../hft/Intro';
import Login from '../login/Login';
import Register from '../register/Register';
import Lcenter from '../training-center/Lcenter';
import Footer from './Footer';
import Header from './Header';
import LandingPage from './LandingPage';
import RegLayout from '../register/RegLayout';


const Url = 'http://localhost:3300';
const Auth = new AuthService();



class RouterOutlet extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }

  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');
  }

  componentWillMount() {
    console.log('');


  }


  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/about' component={About} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={RegLayout} />
              <Route path='/Learning-center' component={Lcenter} />
              <Route path='/hft' component={Intro} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default RouterOutlet;