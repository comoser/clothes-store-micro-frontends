import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import ItemList from '../item_list';
import ItemDetails from '../item_details';

const Routes = ({ itemsInCart, setItemsInCart, setNotification }) => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route exact path={path}>
        <ItemList
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          setNotification={setNotification}
        />
      </Route>
      <Route path={`${path}/details/:itemId`}>
        <ItemDetails
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          setNotification={setNotification}
        />
      </Route>
    </>
  );
};

export default Routes;
