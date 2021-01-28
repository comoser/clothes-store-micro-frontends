import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/navbar';
import AsyncLoader from './components/async_loader';

const ItemRoutes = React.lazy(() => import('items/Routes'));

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route path="/blog">
        blog
      </Route>
      <Route path="/checkout">
        checkout
      </Route>
      <Route path="/items">
        <AsyncLoader>
          <ItemRoutes />
        </AsyncLoader>
      </Route>
      <Redirect to="/items" from="/" />
    </Switch>
  </Router>
  , document.getElementById('app'),
);
