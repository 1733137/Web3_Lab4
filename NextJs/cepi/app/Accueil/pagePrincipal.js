function Header() {
    return (
        <div>
            <nav className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4 d-flex justify-content-around"> 
                        <img src="images/logo.png" className="img-fluid" width="20%" alt="Logo" />
                        <button className="btn btn-primary d-flex d-sm-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col-md-4 d-none d-sm-flex justify-content-around"> 
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            Menu 1
                        </button>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            Menu 2
                        </button>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            Menu 3
                        </button>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            Menu 4
                        </button>
                    </div>
                    <div className="col-md-4 d-none d-sm-flex justify-content-around">
                        <img src="images/user.png" className="img-fluid" width="20%" alt="User" />
                    </div>
                </div>
            </nav>
            
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="d-flex flex-column">
                        <button className="btn btn-primary mb-2" type="button">Menu 1</button>
                        <button className="btn btn-primary mb-2" type="button">Menu 2</button>
                        <button className="btn btn-primary mb-2" type="button">Menu 3</button>
                        <button className="btn btn-primary mb-2" type="button">Menu 4</button>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0"> 
                        <div className="form-group">
                            <input type="search" className="form-control" id="InputSearch" placeholder="Search..." />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group d-flex flex-column flex-md-row align-items-md-center"> 
                            <label htmlFor="sortSelect" className="me-2 mb-2 mb-md-0">Trier par:</label> 
                            <select className="form-control" id="sortSelect">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Footer() {
    return (
        <div className="container" id="Footer">
            <div className="row">
                <div className="col d-flex justify-content-evenly">
                    <img src="images/facebook.jpg" className="img-fluid" width="5%" alt="Facebook" />
                    <img src="images/twitter.jpg" className="img-fluid" width="5%" alt="Twitter" />
                    <img src="images/insta.png" className="img-fluid" width="3%" alt="Instagram" />
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <p>Centre D'expertise et de perfectionnement en Informatique - 2024</p>
                </div>
            </div>
        </div>
    );
}
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


function PagePrincipal() {
    return (
        <div>
            <Header />
            <BlogCard />
            <Footer />
        </div>
    );
}
// Vide le html
document.body.innerHTML = '<div id="app"></div>';

//Render les components
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<PagePrincipal />);
