import axios from 'axios';
import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const Auth = new AuthService();

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      email: null,
      username: null,
      pass: null,
      name: null,
      targetid: null,
      message: '',
      agree: '',
      fields: {},
      errors: {},
      isChecked: false,
      showSuccessMsg: false,
      responseMessage: false,
      actionMessage: '',
      messageColor: ''

    };

    this.RegisterMe = this.RegisterMe.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

  }

  handleCheck(event) {
    this.setState({ isChecked: event.target.checked });
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    if (!fields["fName"]) {
      formIsValid = false;
      errors["fName"] = "Cannot be empty firstname";
    }
    if (!fields["lName"]) {
      formIsValid = false;
      errors["lName"] = "Cannot be empty lastname";
    }
    if (!fields["cell"]) {
      formIsValid = false;
      errors["cell"] = "Cannot be empty mobile";
    }
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Cannot be empty username";
    }
    if (!fields["pass"]) {
      formIsValid = false;
      errors["pass"] = "Cannot be empty password";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  componentDidMount() {

    if (Auth.loggedIn()) {
      this.props.history.replace('/Home');

    }


    var navListItems = $('div.setup-panel div a'),
      allWells = $('.setup-content'),
      allNextBtn = $('.nextBtn'),
      allPrevBtn = $('.prevBtn');
    allWells.show();
    navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
        $item = $(this);
      if (!$item.hasClass('disabled')) {
        navListItems.removeClass('btn-indigo').addClass('btn-default');
        $item.addClass('btn-indigo');
        allWells.hide();
        $target.show();
        $target.find('input:eq(0)').focus();
      }

    });
    allPrevBtn.click(function () {
      var curStep = $(this).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        prevStepSteps = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");
      prevStepSteps.removeAttr('disabled').trigger('click');
    });
    allNextBtn.click(function () {
      var curStep = $(this).closest(".setup-content"),
        curStepBtn = curStep.attr("id"),
        nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
        curInputs = curStep.find("input[type='text'],input[type='url']"),
        isValid = true;
      $(".form-group").removeClass("has-error");
      for (var i = 0; i < curInputs.length; i++) {
        if (!curInputs[i].validity.valid) {
          isValid = false;
          $(curInputs[i]).closest(".form-group").addClass("has-error");
        }
      }
      if (isValid)
        nextStepWizard.removeAttr('disabled').trigger('click');
    });
    $('div.setup-panel div a.btn-indigo').trigger('click');
  }
  RegisterMe(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      this.setState({ message: 'Form submitted' });
      this.props.history.push("/register/checkout")
    } else {
      this.setState({ message: 'Form has errors' });
    }
    const userInfoVo = {
      'name': this.refs.name.value,
      'email': this.refs.email.value,
      'created': '',
      'username': this.refs.username.value,
      'pass': this.refs.pass.value,
      'targetid': this.refs.targetid.value
    }
    axios.post(Auth.getDomain() + '/register/user', userInfoVo)
      .then((result) => {
        this.setState({
          showSuccessMsg: true,
        });
        console.log('Register done', result);

        this.setState({
          showSuccessMsg: true,
          responseMessage: result.data.success,
          actionMessage: result.data.message,

        });



        if (result.data.success) {

          this.setState({
            messageColor: 'alert alert-success'
          });

          setTimeout(
            function () {
              this.props.history.replace('/register/checkout');
            }
              .bind(this),
            2000
          );

        } else {

          this.setState({
            messageColor: 'alert alert-danger'
          });

        }




      }).catch(err => {
        // alert(err);
      });
    //console.log(userInfoVo);
  }

  render() {
    console.log(this.state);
    return (
      <div>
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

        <div className="page-block  page_block_custom" id="page_block_below_registration_content">
          <div className="border-holder">
            <div className="container">
              <div className="block-inner">
                <div className="block-inner-main">
                  <div className="border-holder-left col-md-6 form-border-holder-left-registration">
                    <div className="contents element-272">
                      <h5>Help for Trauma is a collection of tools and resources to help eliminate the affects of trauma.</h5>
                      <p>After creating a free account, you'll be able to explore premium services available:</p>
                      <ul>
                        <li>Help for Trauma App</li>
                        <li>Premium Online Training Courses</li>
                        <li>Consultation Calls for Professionals</li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-holder-right col-md-6 form-border-holder-right-registration">
                    <div className="page-element widget-container widget-headline widget-form">
                      <div className="contents element-278">
                        <h2>Get Started with a Free Account.</h2>
                        <p>Sign up in 30 seconds. No credit card required.</p>
                        <form className="email-form" data="instapage-form" data-wid="430" noValidate="noValidate">
                          <input type="hidden" name="variant" defaultValue="A" />
                          <div className="input-holder field-text">
                            <div className="field-element ">
                              <input type="email" ref="email" name="email" value={this.state.fields["email"]} tabIndex="1" placeholder="Your Email" data-label-inside="Email" className="shortnice form-input required  " />
                            </div>
                          </div>
                          <div className="input-holder field-text">
                            <div className="field-element ">
                              <input type="text"  ref="name" name="name" value={this.state.fields["name"]} tabIndex="2" placeholder="Your Name" data-label-inside="First Name" className="shortnice form-input  required  " />
                            </div>
                          </div>
                          <div className="input-holder field-text">
                            <div className="field-element ">
                              <input type="text"  ref="username" name="username" value={this.state.fields["username"]} tabIndex="3" placeholder="Username" data-label-inside="Last Name" className="shortnice form-input  required  " />
                            </div>
                          </div>

                          <div className="input-holder field-text">
                            <div className="field-element ">
                              <input type="password" ref="pass" name="pass" value={this.state.fields["pass"]} placeholder="Password" data-label-inside="Password" className="shortnice form-input  required  " />
                            </div>
                          </div>
                          <div className="input-holder field-text">
                            <div className="field-element ">
                              <select  ref="targetid" name="targetid" value={this.state.fields["targetid"]}>
                                <option defaultValue="I am here for"  disabled={true}>I am here for</option>
                                <option value="1">Saab</option>
                                <option value="2">Test</option>

                              </select>
                            </div>
                          </div>
                          <div className="input-holder field-text input-holder-field-text-checkbox">
                            <div className="field-element ">
                              <input type="checkbox" name="agree" defaultValue="Bike" /> I agree to the <a href="https://www.helpfortrauma.com/terms/">Terms of Service</a> & <a href="https://www.helpfortrauma.com/privacy-policy/">Privacy Policy</a><br />
                            </div>
                          </div>

                          <button  onClick={this.RegisterMe}  className="btn submit-button button_submit dynamic-button  corners  ">Create My Account <i className="fa fa-play-circle" aria-hidden="true"></i></button>
                        </form>
                        <p>Already have an account?   <Link to={'/login'}> Login here</Link></p>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;