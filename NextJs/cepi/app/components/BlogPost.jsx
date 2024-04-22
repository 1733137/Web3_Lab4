import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'; 

export default BlogFetch;
function BlogPost() {
    return (
        <div>
            <Header />
            <BlogDetails />
            <Footer />
        </div>
    );
}