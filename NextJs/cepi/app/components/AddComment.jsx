// AddComment.jsx
import React, { useState } from 'react';

const AddComment = ({ blogId }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    
    try {
      await fetch(`your-api-url/comments/${blogId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });
      
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} rows="4" cols="50" />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddComment;