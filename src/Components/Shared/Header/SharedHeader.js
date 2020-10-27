import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import "./Header.css"

const SharedHeader = ({title}) => {
    return (
        <div className="shared-header-main">
        <div className="container">
            <Navbar></Navbar>
            <section>
                <h1 style={{marginTop:"150px"}} className="text-center text-white text-uppercase">{title}</h1>
            </section>
        </div>
    </div>
    );
};

export default SharedHeader;