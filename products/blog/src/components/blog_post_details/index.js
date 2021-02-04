import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../../fixtures/blog_posts';
import AsyncLoader from '../async_loader';

const CardContainer = React.lazy(() => import('shared/CardContainer'));
const Wrapper = React.lazy(() => import('shared/Wrapper'));
const Header = React.lazy(() => import('shared/Header'));
const Body = React.lazy(() => import('shared/Body'));
const Body2 = React.lazy(() => import('shared/Body2'));

const BlogPostDetails = () => {
  const { blogPostId } = useParams();
  const blogPost = blogPosts.find(blogPost => blogPost.id === Number(blogPostId));

  return (
    <AsyncLoader>
      <Wrapper>
        <CardContainer>
          <Header>{blogPost.title}</Header>
          <Body>{blogPost.subtitle}</Body>
          <Body2 padding>{blogPost.body}</Body2>
          <Body2 padding>{blogPost.body2}</Body2>
        </CardContainer>
      </Wrapper>
    </AsyncLoader>
  );
};

export default BlogPostDetails;
