import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div>
                 <footer className="footer">
    <div className="container bottom_border">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col">
          <h5 className="headin5_amrc col_white_amrc pt2">About Us</h5>
          {/*headin5_amrc*/}
          <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <ul className="footer-social">
            <li><a className="facebook hb-xs-margin" href="#"><span className="hb hb-xs spin hb-facebook"><i className="fab fa-facebook-f" /></span></a></li>
            <li><a className="twitter hb-xs-margin" href="#"><span className="hb hb-xs spin hb-twitter"><i className="fab fa-twitter" /></span></a></li>
            <li><a className="instagram hb-xs-margin" href="#"><span className="hb hb-xs spin hb-instagram"><i className="fab fa-instagram" /></span></a></li>
            <li><a className="googleplus hb-xs-margin" href="#"><span className="hb hb-xs spin hb-google-plus"><i className="fab fa-google-plus-g" /></span></a></li>
            <li><a className="dribbble hb-xs-margin" href="#"><span className="hb hb-xs spin hb-dribbble"><i className="fab fa-dribbble" /></span></a></li>
          </ul>
        </div>	
        <div className="col-lg-3 col-md-6 col-sm-6">
          <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
          {/*headin5_amrc*/}
          <ul className="footer_ul_amrc">
            <li><a href="#"><i className="fas fa-long-arrow-alt-right" />Default Version</a></li>
            <li><a href="#"><i className="fas fa-long-arrow-alt-right" />Boxed Version</a></li>
            <li><a href="#"><i className="fas fa-long-arrow-alt-right" />Our Team </a></li>
            <li><a href="#"><i className="fas fa-long-arrow-alt-right" />About Us</a></li>
            <li><a href="#"><i className="fas fa-long-arrow-alt-right" />Our Services</a></li>
            <li><a href="#"><i className="fas fa-long-arrow-alt-right" />Get In Touch</a></li>
          </ul>
          {/*footer_ul_amrc ends here*/}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col">
          <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
          {/*headin5_amrc ends here*/}
          <ul className="footer_ul2_amrc">
            <li>
              <a href="#"><i className="fab fa-twitter fleft padding-right" /> </a>
              <p>Lorem Ipsum is simply dummy...<a href="#">https://www.lipsum.com/</a></p>
            </li>
            <li>
              <a href="#"><i className="fab fa-twitter fleft padding-right" /> </a>
              <p>Lorem Ipsum is simply dummy...<a href="#">https://www.lipsum.com/</a></p>
            </li>
            <li>
              <a href="#"><i className="fab fa-twitter fleft padding-right" /> </a>
              <p>Lorem Ipsum is simply dummy...<a href="#">https://www.lipsum.com/</a></p>
            </li>
          </ul>
          {/*footer_ul2_amrc ends here*/}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 ">
          <div className="news-box">
            <h5 className="headin5_amrc col_white_amrc pt2">Newsletter</h5>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            <form action="#">
              <div className="input-group">
                <input className="form-control" placeholder="Search for..." type="text" />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">Go!</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <p className="copyright text-center">All Rights Reserved. © 2018 <a href="#">Zonebiz</a> Design By : 
        <a href="https://html.design/">html design</a>
      </p>
    </div>
  </footer>
                
            </div>
        );
    }
}

export default Footer;