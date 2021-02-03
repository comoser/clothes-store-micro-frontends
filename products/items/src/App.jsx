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
      <Route path="/items">
        <Routes
          itemsInCart={[]}
          setItemsInCart={() => {}}
          setNotification={() => {}}
        />
      </Route>
      <Redirect to="/items" from="/" />
    </Switch>
  </Router>
  , document.getElementById('app'),
);
