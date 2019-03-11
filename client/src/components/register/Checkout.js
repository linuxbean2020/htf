import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
import { plans } from '../const/plans';

const Auth = new AuthService();

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []

        };
    }

    componentDidMount() {
        this.setState({ events: plans });
    }

    confirmOrder = () => {
        this.props.history.replace('/register/confirm');
    }

    render() {


        // console.log('xxxxxxxxxxx--',recommended);
        return (
            <div className="about-us">
                <div className="page-block page_block_below_fold" id="page_block_below_registration">
                    <div className="border-holder">
                        <div className="container">
                            <div className="block-inner">
                                <div className="border-holder-left col-md-12">

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-block  page_block_custom" id="page_block_below_checkout_content">
                    <div className="border-holder">
                        <div className="container">
                            <div className="block-inner">
                                <div className="block-inner-main">
                                    <div className="border-holder-left col-md-9 form-border-holder-left-login">
                                        <div className="page-element widget-container widget-headline widget-form">
                                            <div className="contents element-280">
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn btn-secondary">Recommended for Standard Users</button>
                                                    <button type="button" className="btn btn-secondary">Recommended for Professionals</button>
                                                </div>
                                            </div>
                                            <div className="table">
                                                {this.state.events.map((event, index) =>
                                                    <div className="row_table" key={index}> <div className="cell_table col-md-8"><h5>{event.title}</h5> <p>{event.description}<span> ... More</span></p></div><div className="cell_table col-md-2">{event.price}</div><div className="cell_table col-md-2">Add to Cart</div></div>
                                                )}
                                            </div>


                                        </div>

                                    </div>
                                    <div className="border-holder-right col-md-3 form-border-holder-right-login">
                                        <div className="contents element-282">
                                            <h5>One Time Charges <span className="float-right">$894</span></h5>
                                            <p>ATC 102 LIVE <span className="float-right">$579</span></p>
                                            <p>Consultation Calls <span className="float-right">$279</span></p>
                                        </div>
                                        <div className="contents element-282">
                                            <h5>Recurring Charges <span className="float-right">$29/mo</span></h5>
                                            <p>Help for Trauma App <span className="float-right">$29/mo</span></p>
                                            <p>Professional edfion</p>
                                        </div>
                                        <div className="input-holder field-text">
                                            <div className="field-element ">
                                                <input id="pronto" type="text" name="pronto" defaultValue="" placeholder="Enter Pronto Code" data-label-inside="Last Name" className="shortnice form-input  required  " />
                                            </div>
                                        </div>
                                        <h6>Total Due <span>$923</span></h6>

                                        <button onClick={this.confirmOrder} className="btn submit-button button_submit dynamic-button  corners  ">Checkout</button>
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
export default Checkout;