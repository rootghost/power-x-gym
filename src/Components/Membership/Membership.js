import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import SharedHeader from '../Shared/Header/SharedHeader';
import { makeStyles } from '@material-ui/core/styles';

function getSteps() {
    return ['Personal Details', 'Bank Payment', 'Membership Created'];
  }
  
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })); 

const Membership = () => {

    const classNamees = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

    const handleChange = (e) =>{
        console.log(e.target.value)
    }

    return (
        <div>
            <SharedHeader title={"your gym membership"}></SharedHeader>
            <div classNameName={classNamees.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                {
                steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))
                }
                </Stepper>
            </div>
           {
                activeStep === 0 &&
                 <div className="container">
                 <form action="">
                     <div className="row">
                         <div className="col">
                             <label htmlFor="">First Name</label>
                             <input type="text" required  className="form-control"/>
                         </div>
                         <div className="col">
                             <label htmlFor="">Last Name</label>
                             <input type="text" required className="form-control"/>
                         </div>
                     </div>
                     <div className="row mt-3">
                         <div className="col">
                             <label htmlFor="">Email</label>
                             <input type="email" required  className="form-control"/>
                         </div>
                         <div className="col">
                             <label htmlFor="">Mobile Number</label>
                             <input type="number" required  className="form-control"/>
                         </div>
                     </div>
                     <div className="row mt-3">
                         <div className="col-6">
                             <div className="row">
                                 <div className="col-4">
                                     <label htmlFor="">Day</label>
                                     <input type="number"  required className="form-control" placeholder="Day"/>
                                 </div>
                                 <div className="col-4">
                                     <label htmlFor="">Month</label>
                                     <input type="number"  required className="form-control" placeholder="Month"/>
                                 </div>
                                 <div className="col-4">
                                     <label htmlFor="">Year</label>
                                     <input type="number" required  className="form-control" placeholder="Year"/>
                                 </div>
                             </div>
                         </div>
                         <div className="col-6">
                             <label htmlFor="">Gender</label>
                             <select onChange={handleChange}  className="form-control" name="gender">
                                 <option value="male">Male</option>
                                 <option value="female">Female</option>
                                 <option value="custom">Custom</option>
                             </select>
                         </div>
                     </div>
                     <div className="row mt-3">
                         <div className="col">
                             <label htmlFor="">Addres Line 1</label>
                             <input type="email" required  className="form-control"/>
                         </div>
                         <div className="col">
                             <label htmlFor="">Country/Region</label>
                             <input type="number" required  className="form-control"/>
                         </div>
                     </div>
                     <div className="row mt-3">
                         <div className="col">
                             <label htmlFor="">City</label>
                             <input type="email" required  className="form-control"/>
                         </div>
                         <div className="col">
                             <label htmlFor="">Post Code</label>
                             <input type="number" required  className="form-control"/>
                         </div>
                     </div>
                     <div className=" d-flex justify-content-end mt-3">
                         <button style={{backgroundColor:"#FCD842"}} onClick={handleNext} className="  pl-4 pr-4 btn">Next</button>
                     </div>
                 </form>
             </div>
           }
            <Footer></Footer>
        </div>
    );
};

export default Membership;