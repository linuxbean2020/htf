import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import LdashBoard from '../training-center/LdashBoard/LdashBoard';
import './Lcenter.css';
import TraumaTrainingInfo from './TraumaTrainingInfo';
const Auth = new AuthService();
class Lcenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.sendToParent = this.sendToParent.bind(this);
  }
  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');
  }
  sendToParent() {
    this.props.childDataFromLc('');
  }
  render() {
    return (
      <div>
        {
          !Auth.loggedIn() ? (
            <TraumaTrainingInfo />
          ) : (
              <div>
                <div className="mainbar L-header">
                  <div className="container">
                    <button type="button" className="btn mainbar-toggle" data-toggle="collapse" data-target=".mainbar-collapse">
                      <i className="fa fa-bars"></i>
                    </button>
                    <div className="mainbar-collapse collapse ">
                      <ul className="nav navbar-nav mainbar-nav">
                        <li>
                          <Link to={'/Learning-center/one'}>  <i className="far fa-dashboard"></i>My Learning Dashboard</Link>
                        </li>
                        <li>
                          <Link to={'/Learning-center/Courses'} >  <i className="fal fa-graduation-cap"></i>All Courses
                          </Link>
                        </li>
                        <li>
                          <Link to={'/Learning-center/Live-Training'}>  <i className="fal fa-chalkboard-teacher"></i>Live Training</Link>
                        </li>
                        <li>
                          <Link to={'/Learning-center/Consultation-Calls'}> <i className="fal fa-headset"></i>Consultation Calls</Link>
                        </li>
                        <li>
                          <Link to={'/Learning-center/Certificates'}>  <i className="fal fa-file-certificate"></i>Certificates</Link>
                        </li>
                        <li>
                          <Link to={'/Learning-center/Evaluations'}>  <i className="fal fa-clipboard-list"></i>Evaluations</Link>
                        </li>
                        <li>
                          <Link to={'/Learning-center/Resources'}>
                            <i className="fa fa-external-link"></i>
                            Resources
			                </Link>
                        </li>
                        <li className="dropdown">
                          <Link to={'/Learning-center/LearnerHelp'}>
                            <i className="far fa-question-circle" aria-hidden="true"></i>
                            Help
			                </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="content">
                    <div className="content-container">
                      <div className="Lcenter">
                        <Route path={'/Learning-center/one'} component={LdashBoard} />
                        <Route path={'/Learning-center/Courses'} component={LdashBoard} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}
export default Lcenter;