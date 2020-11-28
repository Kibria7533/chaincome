import React, { Component } from 'react';
import {
    Link,
    NavLink
  } from "react-router-dom";
class Dashboard extends Component {
    render() {
        return (
            <div className="d-flex" id="wrapper">
 
  <div className="bg-light border-right" id="sidebar-wrapper">
    <div className="sidebar-heading">Skrteam </div>
    <br/>
    <br/>
    <div className="list-group list-group-flush">
      <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
      <Link to="/managehome" className="list-group-item list-group-item-action bg-light">Manage Home</Link>
      <Link to="/manageabout" className="list-group-item list-group-item-action bg-light">Manage About</Link>
      <Link to="/manageservices" className="list-group-item list-group-item-action bg-light">Manage Services</Link>
      <Link to="/manageprojects" className="list-group-item list-group-item-action bg-light">Manage Projects</Link>
      <Link to="/managefaq" className="list-group-item list-group-item-action bg-light">Manage Faq</Link>
      <Link to="/managecontact" className="list-group-item list-group-item-action bg-light">Manage Contact</Link>
    </div>
  </div>
  {/* /#sidebar-wrapper */}
  {/* Page Content */}
  <div id="page-content-wrapper">
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
        
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             
            </Link>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/">Logout</Link>
             
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
      <h1 className="mt-4">Simple Sidebar</h1>

      <p> Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
    </div>
  </div>
 
</div>

        );
    }
}

export default Dashboard;