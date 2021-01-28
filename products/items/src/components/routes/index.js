import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import ItemList from '../item_list';

const Routes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route exact path={path} component={ItemList} />
      <Route path={`${path}/details/:itemId`} render={() => "details for product"}/>
    </>
  );
};

export default Routes;
