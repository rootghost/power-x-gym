import React from 'react';
import "./Strength.css"
import icon1 from "../../../Image/Group 80.png"
import icon2 from "../../../Image/Group 81.png"
import icon3 from "../../../Image/Group 82.png"
import img1 from "../../../Image/strength1.jpg"
import img2 from "../../../Image/strength2.jpg"
import img3 from "../../../Image/strength3.jpg"

const Strength = () => {
    return (
        <div className="container mt-5">
            <div className="row">

                <div style={{height:"300px"}} className="col-md-4 pb-3">
                    <div>
                        <img  className="img-fluid" style={{width:"100%", height:"350px"}} src={img1}alt=""/>
                    </div>
                    <div className="details p-4">
                        <img className="mt-5 mb-3" style={{marginLeft:"38%"}} src={icon1} alt=""/>
                        <h1 className="text-center  text-white">PROGRESSION</h1>
                        <p className="text-center text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quae delectus libero.</p>
                    </div>
                </div>

                <div style={{height:"300px"}} className="col-md-4 pb-3">
                    <div>
                        <img className="img-fluid" style={{width:"100%", height:"350px"}} src={img2}alt=""/>
                    </div>
                    <div className="details p-4">
                        <img className="mt-5 mb-3" style={{marginLeft:"38%"}}src={icon2} alt=""/>
                        <h1 style={{color:"#FCD842"}} className="text-center">WORKOUT</h1>
                        <p className="text-center text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quae delectus libero.</p>
                    </div>   
                </div>

                <div style={{height:"300px"}} className="col-md-4 pb-3">
                    <div>
                        <img className="img-fluid" style={{width:"100%", height:"350px"}} src={img3}alt=""/>
                    </div>
                    <div className="details p-4">
                        <img className="mt-5 mb-3" style={{marginLeft:"38%"}} src={icon3} alt=""/>
                        <h1 className="text-center  text-white">NUTRITION</h1>
                        <p className="text-center text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quae delectus libero.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Strength;