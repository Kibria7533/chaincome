import React, { Component } from 'react';

class Adminregister extends Component {
    render() {
        return (
          <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              
            </div>
            <div className="col-md-9 register-right">
            
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <h3 className="register-heading">Apply as a Employee</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="fullname" className="form-control" placeholder="Your Full Name *"  />
                      </div>
                      <div className="form-group">
                        <input type="text" name="eductioninstitute" className="form-control" placeholder="Your Institiute *" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="DepertmentName" className="form-control" placeholder="Your Dept *" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="Address" className="form-control" placeholder="Your Address*" />
                      </div>
                      
                      <div className="form-group">
                        <input type="password" name="password" className="form-control" placeholder="Password *"  />
                      </div>
                      <div className="form-group">
                        <input type="password" name="password_confirmation" className="form-control" placeholder="Confirm Password *"  />
                      </div>
                     
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your Email *"  />
                      </div>
                      <div className="form-group">
                        <input type="text" minLength={10} name="Mobile" maxLength={10}  className="form-control" placeholder="Your Phone *"  />
                      </div>
                     
                     
                      <input type="submit" className="btnRegister" defaultValue="Register" />
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

export default Adminregister;