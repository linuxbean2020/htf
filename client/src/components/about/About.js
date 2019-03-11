import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
const Auth = new AuthService();

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    componentDidMount() {

    }

    render() {
        return (
            <div>
               <h3>About</h3>

            </div>
        );
    }
};
export default AboutUs;