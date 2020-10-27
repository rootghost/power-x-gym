import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import SharedHeader from '../Shared/Header/SharedHeader';
import img1 from "../../Image/strength1.jpg";
import img2 from "../../Image/strength2.jpg";
import img3 from "../../Image/strength3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Pricing = () => {

    const box = {
        position :"absolute",
        top:"40px"
    }
    const box_3 = {
        position :"absolute",
        top:"40px",
        left:"60px"
    }
    const box_2 = {
        position :"absolute",
        top:"40px",
        left:"60px"
    }

    return (
        <div>
            <SharedHeader title={"pricing plans"}></SharedHeader>
            <div className="mt-5 container">
                <h1 className="text-center mt-4"><span style={{color:"#FCD842"}}>CHOOSE THE OFFER</span> THAT SUITS YOU</h1>
                <p className="text-center text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in!</p>
                <p className="text-center text-dark">Lorem ipsum dolor sit amet.</p>

                <div className="row">

                    <div className="col-md-4">
                        <img style={{width:"100%",height:"460px"}} src={img1} alt=""/>
                        <div style={box} >
                            <div>
                                <h5 className="text-center font-weight-bold" style={{color:"#FCD842"}}>BILLED MONTHLY</h5>
                                <h1 className="text-center ml-2 text-white font-weight-bold">ADVANCED PLAN</h1>
                            </div>
                            <div>
                                <h1 className="text-center font-weight-bold" style={{color:"#FCD842",fontSize:"60px"}}>$140</h1>
                            </div>
                            <div>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Mobile Optimized</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Best Hosting</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Free Custom</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Outstanding</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Happy Customer</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link  to="/membership"><button style={{backgroundColor:"#FCD842"}} className="btn">PURCHASE</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <img style={{width:"100%",height:"460px"}} src={img2} alt=""/>
                        <div style={box_2} >
                            <div>
                                <h5 className="text-center font-weight-bold" style={{color:"#FCD842"}}>BILLED MONTHLY</h5>
                                <h1 className="text-center ml-2 text-white font-weight-bold">BASIC PLAN</h1>
                            </div>
                            <div>
                                <h1 className="text-center font-weight-bold" style={{color:"#FCD842",fontSize:"60px"}}>$140</h1>
                            </div>
                            <div>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Mobile Optimized</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Best Hosting</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Free Custom</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Outstanding</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Happy Customer</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link  to="/membership"><button style={{backgroundColor:"#FCD842"}} className="btn">PURCHASE</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <img style={{width:"100%",height:"460px"}} src={img3} alt=""/>
                        <div style={box_3} >
                            <div>
                                <h5 className="text-center font-weight-bold" style={{color:"#FCD842"}}>BILLED MONTHLY</h5>
                                <h1 className="text-center ml-2 text-white font-weight-bold">BEGINNERS</h1>
                            </div>
                            <div>
                                <h1 className="text-center font-weight-bold" style={{color:"#FCD842",fontSize:"60px"}}>$140</h1>
                            </div>
                            <div>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Mobile Optimized</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Best Hosting</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Free Custom</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Outstanding</p>
                                <p className="text-center text-white "><FontAwesomeIcon className="mr-2" icon={faCheck}/>Happy Customer</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link  to="/membership"><button style={{backgroundColor:"#FCD842"}} className="btn">PURCHASE</button></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;