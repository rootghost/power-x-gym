import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import SharedHeader from '../Shared/Header/SharedHeader';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import checkmark from "../../Image/checkmark-square-2.png"


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const Services = () => {

    const classes = useStyles();

    const {title} = useParams();
    const [service,setService] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://safe-bayou-79936.herokuapp.com/getservice?title=${title}`)
        .then(res =>  res.json())
        .then(data =>{
            setService(data);
            setLoading(false)
            
        })
    },[])
   
    return (
        <div>
            <SharedHeader title={title}></SharedHeader>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        {
                            loading &&
                            <div className="d-flex justify-content-center">
                               <CircularProgress  color="secondary" />
                            </div>
                           
                        }
                        {
                            service[0] && 
                            <img style={{height:"350px",width:"100%"}} src={`data:image/png;base64,${service[0].image.img}`} alt=""/>
                        }
                       
                    </div>
                    <div className="col-md-6">
                        <h1><span style={{color:"#FCD842"}}>CLASS</span> SCHEDULE</h1>
                        <div className="row mt-3">

                             <div className="col-md-6">
                                <div className="p-2" style={{boxShadow:"1px 1px 5px grey"}}>
                                    <h5>Monday</h5>
                                    <p style={{color:"#FCD842"}}>8.00 AM - 9.00 AM</p>
                                </div>
                             </div>

                             <div  className="col-md-6">
                                <div className="p-2" style={{boxShadow:"1px 1px 5px grey"}}>
                                    <h5>Tuesday</h5>
                                    <p style={{color:"#FCD842"}}>10.00 AM - 11.00 AM</p>
                                </div>
                             </div>

                             <div  className="col-md-6 mt-3">
                                <div className="p-2" style={{boxShadow:"1px 1px 5px grey"}}>
                                    <h5>Wednesday</h5>
                                    <p style={{color:"#FCD842"}}>7.00 AM - 8.00 AM</p>
                                </div>
                             </div>

                             <div  className="col-md-6 mt-3">
                                <div className="p-2" style={{boxShadow:"1px 1px 5px grey"}}>
                                    <h5>Thursday</h5>
                                    <p style={{color:"#FCD842"}}>5.00 AM - 6.00 AM</p>
                                </div>
                             </div>

                             <div  className="col-md-6 mt-3">
                                <div className="p-2" style={{boxShadow:"1px 1px 5px grey"}}>
                                    <h5>Friday</h5>
                                    <p style={{color:"#FCD842"}}>6.00 AM - 7.00 AM</p>
                                </div>
                             </div>

                             <div  className="col-md-6 mt-3">
                                <div className="p-2" style={{boxShadow:"1px 1px 5px grey"}}>
                                    <h5>Saturday</h5>
                                    <p style={{color:"#FCD842"}}>7.00 PM - 8.00 PM</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 mt-3">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus distinctio, unde omnis nesciunt voluptate provident nemo recusandae! Ducimus, facilis nihil impedit odit exercitationem ea suscipit sint, et accusamus, labore illo animi sed a unde amet facere beatae deserunt dolorem aliquam itaque voluptas sunt nisi. Ipsum laboriosam porro sint odit doloremque deserunt, ducimus consequuntur odio, accusantium quia commodi aliquam? Corporis facere repellat nulla porro. Minima unde numquam veniam voluptatibus dicta sunt nemo, vero architecto necessitatibus fuga vitae at amet.</p>
                    </div>
                </div>
                <div className="row  mt-4">
                    <div className="col-md-7">
                       <div>
                            <img style={{height:"17px",width:"17px"}} className="d-inline" src={checkmark} alt=""/>
                            <span className="ml-2">Having Slimmer Shapely Things</span>
                        </div>
                        <div>
                            <img style={{height:"17px",width:"17px"}} className="d-inline" src={checkmark} alt=""/>
                            <span className="ml-2">Getting Stronger Body</span>
                        </div> 
                        <div>
                            <img style={{height:"17px",width:"17px"}} className="d-inline" src={checkmark} alt=""/>
                            <span className="ml-2">Increased Metabolism</span>
                        </div> 
                        <div>
                            <img style={{height:"17px",width:"17px"}} className="d-inline" src={checkmark} alt=""/>
                            <span className="ml-2">Increased Muscular Endurance</span>
                        </div> 
                        <div>
                            <img style={{height:"17px",width:"17px"}} className="d-inline" src={checkmark} alt=""/>
                            <span className="ml-2">Maximum Result In Les Time</span>
                        </div>
                        <div>
                            <img style={{height:"17px",width:"17px"}} className="d-inline" src={checkmark} alt=""/>
                            <span className="ml-2">Firm Hips And Tummy</span>
                        </div> 
                    </div>
                    <div className="col-md-5 d-flex align-items-end flex-column">
                       <Link className="text-decoration-none mt-auto" to="/pricing"><button  style={{backgroundColor:"#FCD842"}} className="btn pl-4 pr-4">JOIN US</button></Link>
                    </div>  
                        
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;