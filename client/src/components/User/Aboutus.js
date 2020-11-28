import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'
class Aboutus extends Component {
    render() {
        return (
            <div>
               <Header/>
  <div className="full-title">

    <div className="container">
      {/* Page Heading/Breadcrumbs */}
      <h1 className="mt-4 mb-3"> About Us</h1>
      <div className="breadcrumb-main">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active"> About Us </li>
        </ol>
      </div>
    </div>
  </div>
  <div className="container">
    {/* About Content */}
    <div className="about-main">
      <div className="row">
        <div className="col-lg-6">
          <img className="img-fluid rounded mb-4" src="images/about-img.jpg" alt="" />
        </div>
        <div className="col-lg-6">
          <h2>About Modern Business</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
        </div>
      </div>
      {/* /.row */}
    </div>
  </div>
  <div className="about-inner">
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-6">
          <div className="left-ab">
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
            <ul>
              <li>Sed at tellus eu quam posuere mattis.</li>
              <li>Phasellus quis erat et enim laoreet posuere ac porttitor ipsum.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>      
              <li>Sed at tellus eu quam posuere mattis.</li>
              <li>Phasellus quis erat et enim laoreet posuere ac porttitor ipsum.</li>							
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-ab">
            <img className="img-fluid rounded mb-4" src="images/mission-img.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="right-ab">
            <img className="img-fluid rounded mb-4" src="images/vision-img.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="left-ab">
            <h3>Our Vision</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
            <ul>
              <li>Sed at tellus eu quam posuere mattis.</li>
              <li>Phasellus quis erat et enim laoreet posuere ac porttitor ipsum.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>      
              <li>Sed at tellus eu quam posuere mattis.</li>
              <li>Phasellus quis erat et enim laoreet posuere ac porttitor ipsum.</li>							
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    {/* Team Members */}
    <div className="team-members-box">  
      <h2>Our Team</h2>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <div className="our-team">
              <img className="img-fluid" src="images/team_01.jpg" alt="" />
              <div className="team-content">
                <h3 className="title">Nazmul Hossen</h3>
                <span className="post">web developer</span>
                <ul className="social">
                  <li><a href="#"><i className="fab fa-facebook" /></a></li>
                  <li><a href="#"><i className="fab fa-google-plus" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <div className="our-team">
              <img className="img-fluid" src="images/team_02.jpg" alt="" />
              <div className="team-content">
                <h3 className="title">Mahedi amin</h3>
                <span className="post">web developer</span>
                <ul className="social">
                  <li><a href="#"><i className="fab fa-facebook" /></a></li>
                  <li><a href="#"><i className="fab fa-google-plus" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100 text-center">
            <div className="our-team">
              <img className="img-fluid" src="images/team_01.jpg" alt="" />
              <div className="team-content">
                <h3 className="title">Kawser Alam</h3>
                <span className="post">web developer</span>
                <ul className="social">
                  <li><a href="#"><i className="fab fa-facebook" /></a></li>
                  <li><a href="#"><i className="fab fa-google-plus" /></a></li>
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.row */}
    </div>
  </div>
  <div className="customers-box"> 
    <div className="container">
      {/* Our Customers */}
      <h2>Our Customers</h2>
      <div className="row">
        <div className="col-lg-12">
          <div id="customers-slider" className="owl-carousel">
            <div className="mb-4">
              <img className="img-fluid" src="images/logo_01.png" alt="" />
            </div>
            <div className="mb-4">
              <img className="img-fluid" src="images/logo_02.png" alt="" />
            </div>
            <div className="mb-4">
              <img className="img-fluid" src="images/logo_03.png" alt="" />
            </div>
            <div className="mb-4">
              <img className="img-fluid" src="images/logo_04.png" alt="" />
            </div>
            <div className="mb-4">
              <img className="img-fluid" src="images/logo_05.png" alt="" />
            </div>
            <div className="mb-4">
              <img className="img-fluid" src="images/logo_06.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  <Footer/>
</div>

        );
    }
}

export default Aboutus;