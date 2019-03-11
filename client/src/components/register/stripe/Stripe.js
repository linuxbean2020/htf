import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PaymentService from '../../../services/PaymentService'

const payment = new PaymentService();

class Stripe extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    onToken = (token) => {
        console.log('xxxxxxx xxxxxxx xxxxxxxxx token is ', token);
        payment.goToStripe({ token: token })
            .then(data => {
                if (data.data.success) {
                    this.props.history.replace('/register/success');

                }
                console.log('xxxxx xxxxxxx xxxxxxxx data is ', data);
            }).catch(err => {
                console.log('xxxxx xxxxxxx xxxxxxxx err is ', err);

            })
        // fetch('/save-stripe-token', {
        //     method: 'POST',
        //     body: JSON.stringify(token),
        // }).then(response => {
        //     response.json().then(data => {
        //         alert(`We are in business, ${data.email}`);
        //     });
        // });


    }

    render() {
        return (
            <div>
                <StripeCheckout
                    token={this.onToken}
                    stripeKey="pk_test_3d3SAwNd5NNxXDb2NJz3GR1N"
                />
            </div>
        );
    }
}

export default Stripe;
