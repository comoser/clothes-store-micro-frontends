import React from 'react';
import styled from 'styled-components';
import blogPosts from '../../fixtures/blog_posts';
import AsyncLoader from '../async_loader';
import BlogPostListItem from '../blog_post_list_item';

const Wrapper = React.lazy(() => import('shared/Wrapper'));

const BlogPostList = () => {
  return (
    <AsyncLoader>
      <Wrapper>
        <BlogPostListLayout>
          {
            blogPosts.map((blogPost) => (
              <BlogPostListItem
                key={blogPost.title}
                blogPost={blogPost}
              />
            ))
          }
        </BlogPostListLayout>
      </Wrapper>
    </AsyncLoader>
  );
};


const BlogPostListLayout = styled.div`
  padding: 30px 0;
`;

export default BlogPostList;
