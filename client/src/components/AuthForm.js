import logo200Image from 'assets/img/logo/1.png';
import nogodlogo from 'assets/img/logo/nogodlogo.png';
import bikashlogo from 'assets/img/logo/bikashlogo.jfif';
import roketlogo from 'assets/img/logo/roketlogo.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Myloader from '../components/Myloader'
import URL from '../components/User/Url';
import DatePicker from "react-datepicker";
import {withRouter} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

class AuthForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      username: "",
      mobile: "",
      email: "",
      dateofbirth: "",
      gender: "",
      postcode: "",
      paymenttype: "",
      transactionid: "",
      password: "",
      password_confirmation: "",
      redirect: false,
      redirecttocheck: false,
      error: "",
      loding: false,
      isPasswordShown: false
    }

  }


  notify = () => toast.error(this.state.error);
  savetostate = async (data) => {
    const name = data.target.name;
    const value = data.target.value;
    this.setState({ [name]: value });
  }

  formsubmit = async (e) => {
    e.preventDefault();
    this.setState({ loding: false })
    await axios.post(`${URL}/register`, {
      "fullname": this.state.fullname,
      "username": this.state.username,
      "mobile": this.state.mobile,
      "email": this.state.email,
      "dateofbirth": this.state.dateofbirth,
      "gender": this.state.gender,
      "postcode": this.state.postcode,
      "paymenttype": this.state.paymenttype,
      "transactionid": this.state.transactionid,
      "password": this.state.password,
      "password_confirmation": this.state.password_confirmation

    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(re => {

      if (re.data.messege.success) {

        this.setState({ loding: false, redirect: true })
        this.setState({ error: "Please check Your Gmail To activate" })
        this.notify();
      }

      if (!re.data.messege.success) {
        this.setState({ error: re.data.messege.msg })
        this.notify();

      }
      console.log('www', re.data)



    }).catch(err => {
      // // console.log(err.response.data.message.msg)
      // this.setState({ error: err.response.data.errors[0].msg, loding: false })
      //  this.notify();

      // // console.log(err)

      console.log('eee', err)
    })

  }
  loginformsubmit = async (data) => {
    data.preventDefault();
  
    this.setState({ loding: false })
    await axios.post(`${URL}/login-user`, {
      "username": this.state.username,
      "password": this.state.password,
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(data => {
     console.log('uuu',data)
     if(data.data.success){
      localStorage.setItem('auth', data.data.token);
      localStorage.setItem('userrole', data.data.role);
      localStorage.setItem('username', data.data.username);
     
      console.log(data.data);
      this.setState({ loding: false, redirect: true });
      this.props.history.push('/');
      window.location.reload(1);
    }
    else{
      this.setState({ error: data.data.messege.msg, loding: false })
      this.notify();
    }
    }).catch(err => {
   
      this.setState({ error: err.response.data.messege.msg, loding: false })
      this.notify();
      
    })
  }

  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  changeAuthState = authState => event => {

    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }
  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render() {
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;

    return (<>
      {this.state.loding ? (<Myloader />) :
        <Form onSubmit={this.handleSubmit}>
          {showLogo && (
            <div className="text-center pb-4">
              <img
                src={logo200Image}
                className="rounded"
                style={{ width: 60, height: 60, cursor: 'pointer' }}
                alt="logo"
              // {{onClick={onLogoClick}}}
              />
            </div>
          )}
          {this.isSignup && (
            <>
              <FormGroup>
                <Label >Full Name</Label>

                <Input placeholder="Enter Your Full Name" name="fullname" onChange={this.savetostate} value={this.state.fullname} />
              </FormGroup>

              <FormGroup>
                <Label >Your Mobile Number</Label>

                <Input placeholder="Enter Your Mobile Number" name="mobile" onChange={this.savetostate} value={this.state.mobile} />
              </FormGroup>
              <FormGroup>
                <Label for={usernameLabel}>{usernameLabel}</Label>
                <Input {...usernameInputProps} onChange={this.onchange} name="email" onChange={this.savetostate} value={this.state.email} />
              </FormGroup>
            </>
          )}


          <FormGroup>
            <Label >Enter your User Name</Label>

            <Input placeholder="Enter Your User Name" name="username" onChange={this.savetostate} value={this.state.username} />
          </FormGroup>

          {this.isSignup && (
            <>
              <FormGroup>
                <Label style={{ marginRight: "40px" }} >Date of birth</Label>
                <DatePicker selected={this.state.dateofbirth} onChange={date => this.setState({ dateofbirth: date })} />
              </FormGroup>
              <Label >Select Gender</Label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="male" name="gender" onChange={this.savetostate} />
                <label className="form-check-label" for="exampleRadios1">
                  Male
  </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="frmale" name="gender" onChange={this.savetostate} />
                <label className="form-check-label" for="exampleRadios2">
                  Female
  </label>
              </div>
              <div className="form-check disabled">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="other" name="gender" onChange={this.savetostate} />
                <label className="form-check-label" for="exampleRadios3">
                  Others
  </label>
              </div>
              <FormGroup>
                <Label >Post Code</Label>

                <Input placeholder="Enter Your Post Code" name="postcode" onChange={this.savetostate} value={this.state.postcode} />
              </FormGroup>

              <FormGroup>
                <Label >Select A Payment Method</Label>
                <div>
                  <input

                    type="radio" name="emotion"
                    id="sad" className="input-hidden" name="paymenttype" onChange={this.savetostate} value="nogod" />
                  <label for="sad">
                    <img style={{ width: "151px" }}
                      src={nogodlogo}
                      alt="I'm sad" />
                  </label>

                  <input
                    type="radio" name="emotion"
                    id="happy" className="input-hidden" name="paymenttype" onChange={this.savetostate} value="roket" />
                  <label for="happy" style={{ marginLeft: "15px" }}>
                    <img
                      style={{ width: "151px" }}
                      src={roketlogo}
                      alt="I'm happy" />
                  </label>
                  <input
                    type="radio" name="emotion"
                    id="good" className="input-hidden" name="paymenttype" onChange={this.savetostate} value="bikash" />
                  <label for="good" style={{ marginLeft: "15px" }}>
                    <img
                      style={{ width: "151px" }}
                      src={bikashlogo}
                      alt="I'm good" />
                  </label>
                </div>
              </FormGroup>
              <Label >Pyement Number</Label>
              <input

                type="radio" name="emotion"
                id="sad" className="input-hidden" />
              <label for="sad">
                <h4 style={{ marginLeft: "20px" }}>:  01720588884</h4>
              </label>
              <FormGroup>
                <Label >Transaction Id</Label>

                <Input placeholder="Enter Your transaction id" name="transactionid" onChange={this.savetostate} value={this.state.transactionid} />
              </FormGroup>


            </>
          )}
          <FormGroup>
            <Label for={passwordLabel}>{passwordLabel}</Label>
            <div style={{ display: "flex", flexDirection: "row" }}>


              <Input type={this.state.isPasswordShown ? "text" : "password"} name="password" onChange={this.savetostate} value={this.state.password} />
              <i
                style={{ marginLeft: "12px", marginTop: "15px" }}
                className="fa fa-eye password-icon"
                onClick={this.togglePasswordVisiblity}
              />
            </div>
          </FormGroup>
          {this.isSignup && (
            <>
              <FormGroup>
                <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
                <div style={{ display: "flex", flexDirection: "row" }} >
                  <Input type={this.state.isPasswordShown ? "text" : "password"} name="password_confirmation" onChange={this.savetostate} value={this.state.password_confirmation} />
                  <i
                    style={{ marginLeft: "12px", marginTop: "15px" }}
                    className="fa fa-eye password-icon"
                    onClick={this.togglePasswordVisiblity}
                  /></div>
              </FormGroup>
            </>
          )}
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="fullname" onChange={this.savetostate} value={this.state.fullname} />{' '}
              {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
            </Label>
          </FormGroup>
          <hr />
          <Button
            size="lg"
            className="bg-gradient-theme-left border-0"
            block
            
            onClick={this.isSignup?this.formsubmit:this.loginformsubmit}>
            {this.renderButtonText()}
          </Button>

          <div className="text-center pt-1">
            <h6>or</h6>
            <h6>
              {this.isSignup ? (
                <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                  Login
                </a>
              ) : (
                  <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                    Signup
                  </a>
                )}
            </h6>
          </div>

          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
        </Form>}
        <a className="nav-link"  href="/" ><i className="
fa fa-arrow-left" style={{"fontSize":"28px","color":"blue"}}></i></a>
    </>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => { },
};

export default withRouter(AuthForm);
