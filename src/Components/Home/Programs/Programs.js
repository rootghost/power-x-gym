import React from 'react';
import yoga from"../../../Image/yoga.png";
import cardio from"../../../Image/cardio.jpg"

const Programs = () => {
    const boxStyle={
        position:"absolute",
        backgroundColor:"#FCD842",
        color:"black",
        top:"280px",
        padding:"10px"
    }
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center">TRAINING <span style={{color:"#FCD842"}}>PROGRAMS</span></h1>
            <div className="row mt-5">
                <div className="col-md-6">
                    <img style={{width:"100%",height:"380px"}} src={yoga} alt=""/>
                    <div style={boxStyle}>
                        <h3>YOGA TRAINING SESSION</h3>
                    </div>
                </div>
                <div className="col-md-6">
                    <img  style={{width:"100%",height:"380px"}} src={cardio} alt=""/>
                    <div style={boxStyle}>
                        <h3>CARDIO TRAINING SESSION</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;