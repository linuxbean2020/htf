/**
 * @author Raghavendra, Vinay
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/pro-solid-svg-icons';
import React, { Component } from 'react';
import './App.css';
import RouterOutlet from './components/layout/Router-outlet';
import AuthService from './services/AuthService';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dcanvas from './components/hft/drawing-canvas/Dcanvas';



library.add(faStroopwafel);
const Auth = new AuthService();



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWeb: ''
    };

    this.getChildData = this.getChildData.bind(this);
    this.getChildDataFromLc = this.getChildDataFromLc.bind(this);
  }

  componentDidMount() {

  }

  getChildData(val) {
    console.log(val)
    this.setState({ showWeb: val });
  }

  getChildDataFromLc(val) {
    console.log(val)
    this.setState({ showWeb: val });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path='/drawing-canvas' component={Dcanvas} />
              <Route path='/' component={RouterOutlet} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
