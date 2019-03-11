import React, { Component } from 'react';
import './LdashBoard.css';





class LdashBoard extends Component {
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
               
                  

                          
                                <div className="border-holder-left col-md-12 form-border-holder-left-cources">
                                    <div className="page-element widget-container widget-headline widget-form">
                                        <div className="contents element-278">
                                            <div className="col-md-12 m-b-30 top-course-content" >
                                                <span><i className="fa fa-th-large" aria-hidden="true"></i></span>
                                                <span><i className="fa fa-align-justify" aria-hidden="true"></i></span>
                                            </div>
                                            <div className="col-md-4 m-b-30" >
                                                <div className="card" >
                                    <img className="card-img-top" src='/img/image/thumb.svg' alt="Card image cap"/>
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            <p>42.7%</p>
                                                            <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-secondary" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" style={{ width: "42.7%" }}>
                                                                    <span className="sr-only">42.7% Bounce Rate</span>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="btn btn-primary btn-primary-custom">Go somewhere</a>
                                                        </div>
									</div>
                                                </div>
                                                <div className="col-md-4 m-b-30" >
                                                    <div className="card" >
                                    <img className="card-img-top" src='/img/image/thumb.svg' alt="Card image cap" />
                                                            <div className="card-body">
                                                                <h5 className="card-title">Card title</h5>
                                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                <p>80%</p>
                                                                <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-secondary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                                                        <span className="sr-only">80% Bounce Rate</span>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="btn btn-primary btn-primary-custom">Go somewhere</a>
                                                            </div>
									</div>
                                                    </div>
                                                    <div className=" col-md-4 m-b-30" >
                                                        <div className="card" >
                                    <img className="card-img-top" src='/img/image/thumb.svg' alt="Card image cap" />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Card title</h5>
                                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                    <p>60%</p>
                                                                    <div className="progress progress-striped active">
                                            <div className="progress-bar progress-bar-secondary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
                                                                            <span className="sr-only">60% Bounce Rate</span>
                                                                        </div>
                                                                    </div>
                                                                    <a href="#" className="btn btn-primary btn-primary-custom">Go somewhere</a>
                                                                </div>
									</div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                     
                                  
                              
                           
            </div>
        );
    }
};
export default LdashBoard;