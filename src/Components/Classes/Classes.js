import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import SharedHeader from '../Shared/Header/SharedHeader';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Classes = () => {

    const classes = useStyles();

    const boxStyle={
        backgroundColor:"#FCD842",
        width:"230px",
        position:"absolute",
        top:"325px",
        left:"75px",
        padding:"15px"
}
    const [ourClass,setOurClass] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch("https://safe-bayou-79936.herokuapp.com/allClasses")
        .then(res => res.json())
        .then(data =>{
            setOurClass(data)
            setLoading(false)
            console.log(data)
        })
    },[])
    return (
        <div>
            <SharedHeader title={"our classes"}></SharedHeader>
            <div className="container">
                <div className="row mt-5">
                    {
                        loading &&
                        <div className={classes.root}>
                            <LinearProgress color="secondary" />
                        </div>
                    }
                    {
                        ourClass.map(classes => {
                            return(
                                <div className="col-md-4  p-4">
                                    <div>
                                        <img style={{height:"330px",width:"100%"}} src={`data:image/png;base64,${classes.image.img}`} alt=""/>
                                        <div style={boxStyle}>
                                            <Link className="text-decoration-none" to={`/service/${classes.title}`}><h6 className="text-uppercase text-center">{classes.title}</h6></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;