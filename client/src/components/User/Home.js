import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'
 import MessengerCustomerChat from 'react-messenger-customer-chat';
import {
  Link
} from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div className="wrapper-main">
  {/* Top Bar */}
  <Header/>
  <header className="slider-main">
    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner" role="listbox">
        {/* Slide One - Set the background image for this slide in the line below */}
        <div className="carousel-item active" style={{backgroundImage: 'url("images/slider-01.jpg")'}}>
          <div className="carousel-caption d-none d-md-block">
            <h3>Welcome to Chaincome</h3>
            <p>Teamwork begins by building trust</p>
          </div>
        </div>
        {/* Slide Two - Set the background image for this slide in the line below */}
        <div className="carousel-item" style={{backgroundImage: 'url("images/slider-02.jpg")'}}>
          <div className="carousel-caption d-none d-md-block">
            <h3>Welcome to Chaincome</h3>
            <p>Lets work Togather</p>
          </div>
        </div>
        {/* Slide Three - Set the background image for this slide in the line below */}
        <div className="carousel-item" style={{backgroundImage: 'url("images/slider-03.jpg")'}}>
          <div className="carousel-caption d-none d-md-block">
            <h3>Welcome to Chaincome</h3>
            <p>Lets do business</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </header>
  {/* Page Content */}
  <div className="container">        
    {/* About Section */}
    <div className="about-main">
      <div className="row">
        <div className="col-lg-6">
          <h2>Welcome to Chaincome</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
          <h5>Our smart approach</h5>
          <ul>
            <li>Sed at tellus eu quam posuere mattis.</li>
            <li>Phasellus quis erat et enim laoreet posuere ac porttitor ipsum.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>                     
          </ul>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid rounded" src="images/about-img.jpg" alt="" />
        </div>
      </div>
      {/* /.row */}
    </div>
  </div>	
  <div className="services-bar">
    <div className="container">
      <h1 className="py-4">Our Best Services </h1>
      {/* Services Section */}
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-img">
              <img className="img-fluid" src="images/services-img-01.jpg" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-header"> Analytics </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-img">
              <img className="img-fluid" src="images/services-img-02.jpg" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-header"> Applications </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-img">
              <img className="img-fluid" src="images/services-img-03.jpg" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-header"> Business Process </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-img">
              <img className="img-fluid" src="images/services-img-04.jpg" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-header"> Consulting </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>						
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-img">
              <img className="img-fluid" src="images/services-img-05.jpg" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-header"> Infrastructure </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>						
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-img">
              <img className="img-fluid" src="images/services-img-06.jpg" alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-header"> Product Engineering </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
          </div>
        </div>
      </div>
      {/* /.row */}
    </div>
  </div>
  <div className="container">
    {/* Portfolio Section */}
    <div className="portfolio-main">
      <h2>Our Portfolio</h2>
      <div className="col-lg-12">
        <div className="project-menu text-center">
          <button className="btn btn-primary active" data-filter="*">All</button>
          <button data-filter=".business" className="btn btn-primary">Business</button>
          <button data-filter=".travel" className="btn btn-primary">Travel</button>
          <button data-filter=".financial" className="btn btn-primary">Financial</button>
          <button data-filter=".academic" className="btn btn-primary">Academic</button>
        </div>
      </div>
      <div id="projects" className="projects-main row">
        <div className="col-lg-4 col-sm-6 pro-item portfolio-item financial">
          <div className="card h-100">
            <div className="card-img">
              <a href="images/portfolio-img-01.jpg" data-fancybox="images">
                <img className="card-img-top" src="images/portfolio-img-01.jpg" alt="" />
                <div className="overlay"><i className="fas fa-arrows-alt" /></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Financial Sustainability</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 pro-item portfolio-item business academic">
          <div className="card h-100">
            <div className="card-img">
              <a href="images/portfolio-img-02.jpg" data-fancybox="images">
                <img className="card-img-top" src="images/portfolio-img-02.jpg" alt="" />
                <div className="overlay"><i className="fas fa-arrows-alt" /></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Financial Sustainability</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 pro-item portfolio-item travel">
          <div className="card h-100">
            <div className="card-img">
              <a href="images/portfolio-img-03.jpg" data-fancybox="images">
                <img className="card-img-top" src="images/portfolio-img-03.jpg" alt="" />
                <div className="overlay"><i className="fas fa-arrows-alt" /></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Financial Sustainability</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 pro-item portfolio-item business">
          <div className="card h-100">
            <div className="card-img">
              <a href="images/portfolio-img-04.jpg" data-fancybox="images">
                <img className="card-img-top" src="images/portfolio-img-04.jpg" alt="" />
                <div className="overlay"><i className="fas fa-arrows-alt" /></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Financial Sustainability</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 pro-item portfolio-item travel">
          <div className="card h-100">
            <div className="card-img">
              <a href="images/portfolio-img-05.jpg" data-fancybox="images">
                <img className="card-img-top" src="images/portfolio-img-05.jpg" alt="" />
                <div className="overlay"><i className="fas fa-arrows-alt" /></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Financial Sustainability</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 pro-item portfolio-item financial academic">
          <div className="card h-100">
            <div className="card-img">
              <a href="images/portfolio-img-01.jpg" data-fancybox="images">
                <img className="card-img-top" src="images/portfolio-img-01.jpg" alt="" />
                <div className="overlay"><i className="fas fa-arrows-alt" /></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Financial Sustainability</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* /.row */}
    </div>
  </div>
 
  {/* Contact Us */}
  <div className="touch-line">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
        </div>
        <div className="col-md-4">
          <Link className="btn btn-lg btn-secondary btn-block" to="/contact"> Contact Us </Link>
        </div>
      </div>
    </div>
  </div>
 
  <MessengerCustomerChat
    pageId="112437417295403"
    appId="2750775745168996"
  />
 <Footer/>
</div>

        );
    }
}

export default Home;