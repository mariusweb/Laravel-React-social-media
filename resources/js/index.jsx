/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// styles
import '@fortawesome/fontawesome-free';
import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import { debugContextDevtool } from 'react-context-devtool';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './assets/demo/demo.css?v=1.3.0';
import './assets/scss/paper-kit.scss?v=1.3.0';
import LandingPage from './views/examples/LandingPage';
import ProfilePage from './views/examples/ProfilePage';
import RegisterPage from './views/examples/RegisterPage';
// pages
import Index from './views/Index';

// others
const container = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index}>
                {/* <Index /> */}
            </Route>
            <Route path="/landing-page" component={LandingPage}>
                {/* <LandingPage /> */}
            </Route>
            <Route path="/profile-page" component={ProfilePage}>
                {/* <ProfilePage /> */}
            </Route>
            <Route path="/register-page" exact component={RegisterPage}>
                {/* <RegisterPage /> */}
            </Route>
            <Redirect to="/" exact component={Index} />
        </Switch>
    </BrowserRouter>,
    container,
);
debugContextDevtool(container);
