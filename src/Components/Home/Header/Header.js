import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css"

const Header = () => {
    return (
        <div className="header-main">
            <div className="container">
                <Navbar></Navbar>
                <section className="header-text row mt-5">
                        <div className="col-md-6 text-white">
                            <h1>The best fitness</h1>
                            <h1>studio in town</h1>
                            <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo facilis debitis doloribus, itaque libero eligendi sint provident neque tenetur, ratione ipsam, dicta cupiditate velit? Veritatis deserunt modi similique minima odit</p>
                            <button className="btn join-us-btn text-dark text-uppercase font-weight-bold mt-4 pr-3 pl-3">Join us</button>
                        </div>
                </section>
            </div>
        </div>
    );
};

export default Header;