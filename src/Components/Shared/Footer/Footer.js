import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebook from "../../../Image/bxl-facebook.png";
import youtube from "../../../Image/bxl-youtube.png";
import instagram  from "../../../Image/bxl-instagram.png";
import whatsapp from "../../../Image/bxl-whatsapp.png"
import twitter from "../../../Image/bxl-twitter.png"


const Footer = () => {
    return (
        <div style={{backgroundColor:"#00001b"}} className="mt-5">
            <div className=" container p-4">
                <div className="row">
                    <div className="col-md-3">
                        <h2 className="text-white">POWER <span style={{color:"#FCD842"}}>X</span></h2>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-3">
                                <p className="text-white font-weight-bold">Need help?</p>
                                <p className="text-white">Help Center</p>
                                <p className="text-white">Email Support</p>
                                <p className="text-white">Live Chat</p>
                                <p className="text-white">Gift Certificate</p>
                                <p className="text-white">Send Us Feedback</p>
                            </div>
                            <div className="col-md-3">
                                <p className="text-white font-weight-bold">Digital Resources</p>
                                <p className="text-white">Articles</p>
                                <p className="text-white">E-books</p>
                            </div>
                            <div className="col-md-3">
                                <p className="text-white font-weight-bold">Contact With Us </p>
                                <img src={youtube} alt=""/>
                                <img className="ml-2" src={facebook} alt=""/>
                                <img className="ml-2" src={instagram} alt=""/>
                                <img className="ml-2" src={twitter} alt=""/>
                                <img className="ml-2" src={whatsapp} alt=""/>
                                <p className="text-white mt-2">Forum</p>
                            </div>
                            <div className="col-md-3">
                                <p className="text-white font-weight-bold">Join Our Newsletter</p>
                                <small className="text-white">Get exclusive news,features,and updates from the shredder weight loss academy </small>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-3">&copy;2020 Programming Hero.All Rights Reserved  </p>
            </div>
        </div>
    );
};

export default Footer;