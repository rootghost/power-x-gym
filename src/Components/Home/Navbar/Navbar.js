import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="#"><h2 className="text-white">POWER <span style={{color:"#FCD842"}}>X</span></h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link  text-white mr-2" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white  mr-2 " href="#id">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white  mr-2" href="#">Our classes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white mr-2 " href="#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white mr-2 " href="#">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white  mr-2" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white mr-2" href="#">Contact Us</a>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;