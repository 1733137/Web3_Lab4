import React from 'react';

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