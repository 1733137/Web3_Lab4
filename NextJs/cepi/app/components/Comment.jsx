// Comment.jsx
import React from 'react';

const Comment = ({ author, date, content }) => {
  return (
    <div className="comment">
      <h4>{author}</h4>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  );
};

export default Comment;