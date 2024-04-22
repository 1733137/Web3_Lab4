import React from 'react';
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