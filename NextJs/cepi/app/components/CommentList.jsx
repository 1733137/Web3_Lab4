// CommentList.jsx
import React, { useState, useEffect } from 'react';
import data from './blog.json'; // Import the data
import Comment from './Comment';

const CommentList = ({ blogId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    
    const blogComments = data.Commentaires.filter(comment => comment['Publicaion lié'] === blogId);
    setComments(blogComments);
  }, [blogId]);

  return (
    <div>
      
      {comments.map(comment => (
        <Comment key={comment.id} author={comment.Auteur} date={comment.DatePublication} content={comment.Contenu} />
      ))}
    </div>
  );
};

export default CommentList;