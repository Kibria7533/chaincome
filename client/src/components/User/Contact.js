import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'
class Contact extends Component {
    render() {
        return (
            <div>
              <Header/>
  <div className="contact-main">
    <div className="container">
      {/* Content Row */}
      <div className="row">
        {/* Map Column */}
        <div className="col-lg-8 mb-4 contact-left">
          <h3>Send us a Message</h3>
          <form name="sentMessage" id="contactForm" noValidate>
            <div className="control-group form-group">
              <div className="controls">
                <input type="text" placeholder="Full Name" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
                <p className="help-block" />
              </div>
            </div>
            <div className="control-group form-group">
              <div className="controls">
                <input type="tel" placeholder="Phone Number" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
              </div>
            </div>
            <div className="control-group form-group">
              <div className="controls">
                <input type="email" placeholder="Email Address" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
              </div>
            </div>
            <div className="control-group form-group">
              <div className="controls">
                <textarea rows={5} cols={100} placeholder="Message" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength={999} style={{resize: 'none'}} defaultValue={""} />
              </div>
            </div>
            <div id="success" />
            {/* For success/fail messages */}
            <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
          </form>
        </div>
        {/* Contact Details Column */}
        <div className="col-lg-4 mb-4 contact-right">
          <h3>Contact Details</h3>
          <p>
            3481 Melrose Place
            <br />Beverly Hills, CA 90210
            <br />
          </p>
          <p>
            <abbr title="Phone">P</abbr>: (123) 456-7890
          </p>
          <p>
            <abbr title="Email">E</abbr>:
            <a href="mailto:name@example.com"> name@example.com </a>
          </p>
          <p>
            <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
          </p>
        </div>
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  <div className="map-main">
    {/* Embedded Google Map */}
    <iframe width="100%" height="300px" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="http://maps.google.com/maps?hl=en&ie=UTF8&ll=37.0625,-95.677068&spn=56.506174,79.013672&t=m&z=4&output=embed" />
  </div>
  <Footer/>
</div>

        );
    }
}

export default Contact;