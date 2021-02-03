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
      <Route path="/checkout">
        <Routes
          itemsInCart={[]}
          setItemsInCart={() => {}}
          setNotification={() => {}}
        />
      </Route>
      <Redirect to="/checkout" from="/" />
    </Switch>
  </Router>
  , document.getElementById('app'),
);
