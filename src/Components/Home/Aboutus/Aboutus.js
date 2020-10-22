import React from 'react';
import image from "../../../Image/aboutus.jpg"
import "./Aboutus.css"

const Aboutus = () => {
    return (
       <div className="container about-us">
           <div className="row">
                <div className="col-md-6">
                    <div>
                        <img style={{height:"460px",width:"100%"}} src={image} alt=""/>
                    </div>
                </div>
                <div className="col-md-6 p-5">
                    <h1 style={{color:"lightGrey",fontSize: "55px"}}>ABOUT US</h1>
                    <h1 style={{color:"#FCD842"}}>WE ARE HERE TO DREAM! </h1>
                    <h2>OUR TEAM IS HERE SERVE YOU.</h2>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non facilis soluta rerum asperiores! Cupiditate, cum. Dolorum harum assumenda accusamus mollitia unde, quam, officia ullam eos eveniet labore corporis. Maxime, deleniti?</p>
                </div>
            </div>
       </div>
    );
};

export default Aboutus;