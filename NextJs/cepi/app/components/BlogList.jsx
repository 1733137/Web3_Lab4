import React from 'react';
function BlogList({ blogs }) {
    const handleClick = (id) => {
        window.location.href = `BlogPost.html?id=${id}`;
    };

    return (
        <div className="Blogs container">
            <div className="row">
                {blogs.map(blog => (
                    <div key={blog.id} className="col-lg-4 col-md-12 mb-4" id="Blogs">
                        <div className="row mb-4" >
                            <div className="col-12">
                                <img
                                    src="images/Blog.png"
                                    className="img-fluid"
                                    width="50%"
                                    alt="Blog Image"
                                    onClick={() => handleClick(blog.id)}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="block-title" id="Titres">
                                    <h3>{blog.Titre}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="block-content">
                                    <p>{blog.Contenu}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}