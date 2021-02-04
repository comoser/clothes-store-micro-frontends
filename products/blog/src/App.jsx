import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Routes from './components/routes';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/blog">
        <Routes />
      </Route>
      <Redirect to="/blog" from="/" />
    </Switch>
  </Router>
  , document.getElementById('app'),
);
