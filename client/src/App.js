import React, { Component } from 'react';
import {Switch,Route, Router} from 'react-router-dom'
import history from './history';
import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import AuthPage from 'pages/AuthPage'
import Adminlogin from '../src/pages/Adminlogin'

import Admin from './Admin'
import User from './components/User/User'

class App extends Component {
  render() {
    return (
      <Router history={history} >
     
        <Switch>
        <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
             <LayoutRoute
              exact
              path="/admin"
              layout={EmptyLayout}
              component={props => (
                <Adminlogin />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />
          <Route  path='/admindashboard' component={Admin} /> 
          <Route path='/' component={User} />
         
          
      </Switch>
     
      
      </Router>
  );
  }
}

export default App;