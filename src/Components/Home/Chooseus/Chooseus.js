import React from 'react';
import "./Chooseus.css"
import fitness from "../../../Image/Group 87.png"
import cardio from  "../../../Image/Group 88.png"
import commitment from  "../../../Image/gift-2.png"

const Chooseus = () => {
    const boxStyle={
        boxShadow:"1px 1px 10px #888888 ",
        height:"380px"
    }
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center"><span style={{color:"#FCD842"}}>WHY </span>CHOOSE US</h1>

            <div className="row mt-5">

                <div  className="col-md-4">
                   <div style={boxStyle} className="d-flex p-2 flex-column box  justify-content-center">
                        <div className="align-self-center mt-5 mb-5">
                            <img  src={fitness} alt=""/>
                        </div>
                        <div>
                            <h4 className="text-center mb-4">FREE FITNESS TRAINING</h4>
                            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repudiandae fugit libero quis repellendus assumenda a ipsa ratione modi nulla.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                   <div style={boxStyle} className="d-flex p-2 box  flex-column  justify-content-center">
                        <div className="align-self-center mt-5 mb-5">
                            <img  src={cardio} alt=""/>
                        </div>
                        <div>
                            <h4 className="text-center mb-4"> CARDIO & STRENGTH</h4>
                            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repudiandae fugit libero quis repellendus assumenda a ipsa ratione modi nulla.</p>
                        </div>
                   </div>
                </div>

                <div  className="col-md-4">
                    <div style={boxStyle} className="d-flex p-2 box flex-column  justify-content-center">
                        <div className="align-self-center mt-5 mb-5">
                            <img  src={commitment} alt=""/>
                        </div>
                        <div>
                            <h4 className="text-center mb-4">FREE MEMBERSHIP</h4>
                            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repudiandae fugit libero quis repellendus assumenda a ipsa ratione modi nulla.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chooseus;