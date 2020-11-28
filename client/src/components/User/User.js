import React from 'react';


import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services';
import Faq from './Faq';
import four from './Four';
import Pricing from './Pricing';
import Portfolioshow3 from './Portfolioshow3';
import Projectshow from './Projectshow';
import Blog from './Blog';
import Blogpost from './Blogpost';
import Contact from './Contact';
import Logout from './Logout'
import Adminregister from './Adminregister';
import Adminlogin from './Adminlogin';
import Dashboard from './Dashboard';
import Singleproject from './Singleproject';
import Managehome from './Managehome';
import Manageabout from './Manageabout';
import Manageservices from './Manageservices';
import Manageprojects from './Manageprojects';
import Managecontact from './Managecontact';
import Managefaq from './Managefaq';
import Profile from './Profile'
import Earning from './Earning'
import Invite from './Invite'





function User() {
  return (
    <BrowserRouter>
    <div>
  
   <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/home"  exact component={Home}/>
          <Route path="/about"  exact component={Aboutus}/>
          <Route path="/services"  exact component={Services}/>
          <Route path="/faq"  exact component={Faq}/>
          <Route path="/pricing"  exact component={Pricing}/>
          <Route path="/portfolio3"  exact component={Portfolioshow3}/>
          <Route path="/404"  exact component={Projectshow}/>
          <Route path="/singleproject" exact component={Singleproject}/>
          <Route path="/blog"  exact component={Blog}/>
          <Route path="/blog-post"  exact component={Blogpost}/>
          <Route path="/contact"  exact component={Contact}/>
          <Route path="/shop"  exact component={four}/>
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/earning" component={Earning}/>
          <Route exact path="/invite" component={Invite}/>
          {/* <Route path="/adminregister"  exact component={Adminregister}/>
          <Route path="/admin"  exact component={Adminlogin}/>
          <Route path="/dashboard"  exact component={Dashboard}/>
          <Route path="/managehome"  exact component={Managehome}/>
          <Route path="/manageabout" exact component={Manageabout}/>
          <Route path="/manageservices" exact component={Manageservices}/>
          <Route path="/manageprojects" exact component={Manageprojects}/>
          <Route path="/managefaq" exact component={Managefaq}/>
          <Route path="/managecontact" exact component={Managecontact}/> */}
          <Route   component={four}/>
          
        </Switch>
   
    </div>
    </BrowserRouter>
  );
}

export default User;
