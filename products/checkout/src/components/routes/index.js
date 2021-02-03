import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CheckoutDetails from '../checkout_details';

const Routes = ({ itemsInCart, setItemsInCart, setNotification }) => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route exact path={path}>
        <CheckoutDetails
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          setNotification={setNotification}
        />
      </Route>
    </>
  );
};

export default Routes;
