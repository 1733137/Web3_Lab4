import React, { useState, useEffect } from 'react';


function BlogCard() {
    const [blogs, setBlogs] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then(res => res.json())
            .then(posts => {
                setBlogs(posts); 
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []); 

    return <BlogList blogs={blogs} />;
}