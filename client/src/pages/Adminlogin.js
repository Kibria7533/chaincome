import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import URL from '../components/User/Url'
import {withRouter} from 'react-router-dom'
import adminlogo from '../assets/img/logo/1.png'
class Adminlogin extends Component {constructor(){
  super();
  this.state={
    username:"",
    password:"",
    mesg:"",
    redirect: false,
    isPasswordShown: false
  
  }
}
notify = () => toast.error(this.state.mesg);
savetostate=async (data)=>{
const name=data.target.name;
const value=data.target.value;
  this.setState({[name]:value});
}
formsubmit=async (data)=>{
data.preventDefault();
await axios.post(`${URL}/login-admin`, { 
  "username": this.state.username,
  "password": this.state.password,
},{
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json'
  }
}).then(data=>{
    console.log('g',data.data);
  localStorage.setItem('auth',data.data.token);
  localStorage.setItem('userrole',data.data.role);
  localStorage.setItem('username',data.data.username);
  console.log(data.data);
  this.props.history.push('/admindashboard');
}).catch(err=>{
    console.log('e',err.response)
  this.setState({mesg:err.response.data.messege.msg})
  this.notify();
//   console.log(err.response)
})
}

togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

 render(){
  if (this.state.redirect) {
    return (<Redirect to={{ pathname: '/admindashboard' }} />)
  }
        return (
          <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img src={adminlogo} className="brand_logo" style={{"width": "100px"}}alt="Logo" />
                </div>
              </div>
              <div className="d-flex justify-content-center form_container">
                <form onSubmit={this.formsubmit}>
                  <div className="input-group mb-3">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-user" /></span>
                    </div>
                    <input type="text" name="username" onChange={this.savetostate} value={this.state.username} className="form-control input_user" autoComplete="off" placeholder="Your username" />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="fas fa-key" /></span>
                    </div>
                    <input  type={this.state.isPasswordShown ? "text" : "password"} name="password" onChange={this.savetostate} value={this.state.password}autoComplete="off" className="form-control input_pass" placeholder="Your password" />
                    <i
                style={{ marginLeft: "12px", marginTop: "15px" }}
                className="fa fa-eye password-icon"
                onClick={this.togglePasswordVisiblity}
              />
                  </div>
                 
                  <div className="d-flex justify-content-center mt-3 login_container">
                    <button type="submit" name="button" onClick={()=>this.formsubmit}className="btn login_btn">Login</button>
                  </div>
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={15000}
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
              </div>
              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                 Go back to Home ?<a href="/" className="ml-2">Click here</a>
                </div>
                <div className="d-flex justify-content-center links">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        );
    }
}

export default withRouter(Adminlogin);