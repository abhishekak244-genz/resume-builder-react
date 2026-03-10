import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";

function ResumeSteps() {
  return (
    <div className="d-flex justify-content-center align-items-center" >
      <div className='my-5'>
        <h1 className='text-center'> create a job -winning resume in minutes</h1>
      <div className='container my-5'>
          <div className='row '>
            <div className='col-md-1'></div>
            <div className='col-md-4 rounded shadow text-center text-dark'> 
              <FaEnvelopeOpenText className='fs-1 text-primary mb-3'/>
             <h4> ADD your details </h4>
             <p> Add pre-written example to each section</p>
             <h5>step 1</h5>
            
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-4 rounded shadow text-center text-dark'>
                 <FaArrowAltCircleDown className='fs-1 text-danger mb-3' />
              <h4> downloads your resume</h4>
              <p> Download and start applying </p>
              <h5> step 2</h5>
            </div>
            <div className='col-md-1'></div>
  
  
          </div>
          <div className='text-center mt-5'>
            <Link to={'/form'} className='btn text-light' style={{backgroundColor: '#9b7856'}}>
            let's start 
            </Link>
          </div>
      </div>
      </div>
      </div>
  )
}

export default ResumeSteps