
import React, { useState, useEffect } from 'react';
import data from './db.json'; 

const BlogDetails = ({ blogId }) => {
  const [blogDetails, setBlogDetails] = useState(null);

  useEffect(() => {
    
    const selectedBlog = data.blogs.find(blog => blog.id === blogId);
    setBlogDetails(selectedBlog);
  }, [blogId]);

  return (
    <div>
      {blogDetails && (
        <div>
          <h2>{blogDetails.Titre}</h2>
          <p>{blogDetails.DatePublication}</p>
          <p>{blogDetails.Auteur}</p>
          <p>{blogDetails.Contenu}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;