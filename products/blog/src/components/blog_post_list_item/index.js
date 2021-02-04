import React from 'react';
import styled from 'styled-components';
import AsyncLoader from '../async_loader';
import { Link, useRouteMatch } from 'react-router-dom';

const Header = React.lazy(() => import('shared/Header'));
const Body = React.lazy(() => import('shared/Body'));
const Body2 = React.lazy(() => import('shared/Body2'));

const BlogPostListItem = ({ blogPost }) => {
  const { url } = useRouteMatch();

  return (
    <AsyncLoader noLoading>
      <BlogPostListItemLayout>
        <Link to={`${url}/details/${blogPost.id}`}>
          <Header>{blogPost.title}</Header>
        </Link>
        <Body>{blogPost.subtitle}</Body>
        <Body2>{blogPost.body}</Body2>
      </BlogPostListItemLayout>
    </AsyncLoader>
  );
};

const BlogPostListItemLayout = styled.div`
  display: flex;
  padding: 50px 50px 70px 50px;
  flex-direction: column;
  height: 300px;
  border-bottom: 1px solid #444;
`;

export default BlogPostListItem;
