import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import ItemList from '../item_list';
import ItemDetails from '../item_details';

const Routes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route exact path={path} component={ItemList} />
      <Route path={`${path}/details/:itemId`} component={ItemDetails} />
    </>
  );
};

export default Routes;
