// Blog.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import CommentList from './CommentList';
import AddComment from './AddComment';

const Blog = () => {
  const { blogId } = useParams();

  return (
    <div>
      <h1>Blog Page</h1>
      <BlogDetails blogId={blogId} />
      <h2>Comments</h2>
      <CommentList blogId={blogId} />
      <AddComment blogId={blogId} />
    </div>
  );
};

export default Blog;