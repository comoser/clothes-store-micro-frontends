import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import BlogPostList from '../blog_post_list';
import BlogPostDetails from '../blog_post_details';

const Routes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route exact path={path}>
        <BlogPostList />
      </Route>
      <Route path={`${path}/details/:blogPostId`}>
        <BlogPostDetails />
      </Route>
    </>
  );
};

export default Routes;
