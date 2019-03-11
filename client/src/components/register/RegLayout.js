import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Checkout from './Checkout';
import ConfirmOrder from './ConfirmOrder';
import Stripe from './stripe/Stripe';
import PaymentSuccess from './stripe/PaymentSuccess';

class RegLayout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/register' component={Register} />
                    <Route path='/register/checkout' component={Checkout} />
                    <Route path='/register/confirm' component={ConfirmOrder} />
                    <Route path='/register/payment' component={Stripe} />
                    <Route path='/register/success' component={PaymentSuccess} />

                    

                </Switch>
            </div>
        );
    }
}

export default RegLayout;
