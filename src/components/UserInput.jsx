import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobTypes from '../assets/jobRole.json'
import skillJson from '../assets/jobSkills.json'
import summaryJson from '../assets/summaries.json'
import { useNavigate } from 'react-router-dom';
import { addResumeAPI } from '../services/allResumeApiService';

const steps = ['Basic Information', 'Contact Details', 'Educational Details' ,  'Review & Subumit'];

function UserInput({resumeDate, setResumeDate}) {
  const navigate = useNavigate()
 const [activeStep, setActiveStep] = React.useState(0);

  console.log(resumeDate);
  
 
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
 const genrateAI = () =>{

  setResumeDate({...resumeDate,skill:skillJson[resumeDate.job],
    summary:summaryJson[resumeDate.job]
  })
  handleNext()
 }
  
 


  const renderStepContent =(stepCount) =>{
    switch(stepCount){
      case 0 : return (
        <div >
          <h2>personal details</h2>
          <div className='p-3 row'>
            <TextField value={resumeDate.fullName} onChange={e => setResumeDate ({...resumeDate,fullName:e.target.value})} id="standard-basic-name" label="full-name" variant="standard" />
            <TextField value={resumeDate.loaction} onChange={e => setResumeDate ({...resumeDate,loaction: e.target.value})} id="standard-basic-loc" label="loaction" variant="standard" /> <FormControl variant="standard" >
        <InputLabel id="demo-simple-select-standard-label">Choose job title</InputLabel>
        <Select  onChange={e => setResumeDate ({...resumeDate,job: e.target.value})} defaultValue={""}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        
          label="Age"
        >
         
         { 
         jobTypes.jobRoles.map(role=>(<MenuItem key={role}  value={role}>{role}</MenuItem>

         )) }
         
          
        </Select>
      </FormControl>
          </div>
        </div>
      )
        case 1 : return (
        <div >
          <h2>Contact details</h2>
          <div className='p-3 row'>
            <TextField value={resumeDate.email} onChange={e => setResumeDate ({...resumeDate,email:e.target.value})} id="standard-basic-name" label="email" variant="standard" />
            <TextField value={resumeDate.phone} onChange={e => setResumeDate ({...resumeDate,phone:e.target.value})} id="standard-basic-loc" label="contact number" variant="standard" />
            <TextField value={resumeDate.linkedIn} onChange={e => setResumeDate ({...resumeDate,linkedIn:e.target.value})} id="standard-basic-loc" label="linnked link" variant="standard" />
            <TextField value={resumeDate.gitHub} onChange={e => setResumeDate ({...resumeDate,gitHub:e.target.value})}   id="standard-basic-loc" label="git hub link " variant="standard" />
          </div>
        </div>
      )
          case 2 : return (
        <div >
          <h2>Educational details</h2>
          <div className='p-3 row'>
            <TextField value={resumeDate.degree}  onChange={e => setResumeDate ({...resumeDate,degree:e.target.value})} id="standard-basic-name" label="bachelor degree" variant="standard" />
            <TextField value={resumeDate.university}  onChange={e => setResumeDate ({...resumeDate,university:e.target.value})}id="standard-basic-loc" label="univercity/ collage name" variant="standard" />
            <TextField value={resumeDate.passOut} onChange={e => setResumeDate ({...resumeDate,passOut:e.target.value})}id="standard-basic-loc" label="your of graducation" variant="standard" />
            
          </div>
        </div>
      )
       case 3 : return (
        <div >
          <h2>Review & Subumit</h2>
        <p> Our AI will genrate skills & summary according to your job role. cick the AI skill & summary  button to proceed  </p>
        </div>
      )
      default : return null
    }
    
  }
   const handleResume = async () =>{
    const { fullName ,loaction,job,email,phone,linkedIn,gitHub,degree, university , passOut , skill, summary} = 
    resumeDate
    if(fullName && loaction && job && email && phone && linkedIn && gitHub && degree && university && passOut && skill.length > 0 && summary){
      const response = await addResumeAPI(resumeDate)
      console.log(response);
      if (response.status==201) {
        alert("resume added sucessfully !!")
        const resumeId = response.data.id
        navigate(`/resume/${resumeId}/view`)
      }else {
        alert("please fill the form completely !!")
      }
      

    }
   }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
         

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleResume}>finish</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render form according to activestep count */}
          <Box>
               {
                renderStepContent(activeStep)
               }
            
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
           
           {
            activeStep === steps.length -1?
            <Button onClick={genrateAI}> GEnerate ai skill and summery</Button>
            :
            <Button onClick={handleNext}> next</Button>
           }
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInput