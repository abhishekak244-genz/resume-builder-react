import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import { TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { FaXmark } from "react-icons/fa6";
import jobTypes from '../assets/jobRole.json'
import { editResumeApi } from '../services/allResumeApiService';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Edit({ resumeDate, setResumeDate }) {
    const skillRef = useRef()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(resumeDate);

    const removeSkill = (skill) =>{
        setResumeDate({...resumeDate,skill:resumeDate?.skill?.filter(item => item!=skill)})
    }
    const addskill = (skill) =>{
        if(skill){
            if(resumeDate?.skill?.map(item => item.toLowerCase())?.includes(skill.toLowerCase())){
                alert("given skill already exist . add another skill")
            }else{
                setResumeDate({...resumeDate,skill: [...resumeDate?.skill, skill]})
            }
            skillRef.current.value = ""
        }else{
            alert("input valid skill")
        }
    }
      const handleEditResume = async () =>{
         const { fullName ,loaction,job,email,phone,linkedIn,gitHub,degree, university , passOut , skill, summary} = 
            resumeDate
            if(fullName && loaction && job && email && phone && linkedIn && gitHub && degree && university && passOut && skill.length > 0 && summary){
            //   api call 
            const response =  await editResumeApi(resumeDate?.id,resumeDate)
            console.log(response);
            if(response.status==200){
               alert("resume updated")
               handleClose()
            }
              else {
                alert("please fill the form completely !!")
              }
              
        
            }
      }

    return (
        <div>
            <Button onClick={handleOpen} className='btn text-primary fs-2 me-2'> <MdEditDocument /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        EDIT RESUME DETAILS
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        <div >
                            <h2>personal details</h2>
                            <div className='p-3 row'>
                                <TextField value={resumeDate.fullName} onChange={e => setResumeDate({ ...resumeDate, fullName: e.target.value })} id="standard-basic-name" label="full-name" variant="standard" />
                                <TextField value={resumeDate.loaction} onChange={e => setResumeDate({ ...resumeDate, loaction: e.target.value })} id="standard-basic-loc" label="loaction" variant="standard" /> <FormControl variant="standard" >
                                    <InputLabel id="demo-simple-select-standard-label">Choose job title</InputLabel>
                                    <Select onChange={e => setResumeDate({ ...resumeDate, job: e.target.value })} 
                                    value={resumeDate?.job}
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"

                                        label="Age"
                                    >

                                        {
                                            jobTypes.jobRoles.map(role => (<MenuItem key={role} value={role}>{role}</MenuItem>

                                            ))}


                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        {/* Contact details */}
                        <div >
                            <h2>Contact details</h2>
                            <div className='p-3 row'>
                                <TextField value={resumeDate.email} onChange={e => setResumeDate({ ...resumeDate, email: e.target.value })} id="standard-basic-name" label="email" variant="standard" />
                                <TextField value={resumeDate.phone} onChange={e => setResumeDate({ ...resumeDate, phone: e.target.value })} id="standard-basic-loc" label="contact number" variant="standard" />
                                <TextField value={resumeDate.linkedIn} onChange={e => setResumeDate({ ...resumeDate, linkedIn: e.target.value })} id="standard-basic-loc" label="linnked link" variant="standard" />
                                <TextField value={resumeDate.gitHub} onChange={e => setResumeDate({ ...resumeDate, gitHub: e.target.value })} id="standard-basic-loc" label="git hub link " variant="standard" />
                            </div>
                        </div>
                        {/* Educational */}
                        <div >
                            <h2>Educational details</h2>
                            <div className='p-3 row'>
                                <TextField value={resumeDate.degree} onChange={e => setResumeDate({ ...resumeDate, degree: e.target.value })} id="standard-basic-name" label="bachelor degree" variant="standard" />
                                <TextField value={resumeDate.university} onChange={e => setResumeDate({ ...resumeDate, university: e.target.value })} id="standard-basic-loc" label="univercity/ collage name" variant="standard" />
                                <TextField value={resumeDate.passOut} onChange={e => setResumeDate({ ...resumeDate, passOut: e.target.value })} id="standard-basic-loc" label="your of graducation" variant="standard" />

                            </div>
                        </div>
                        {/* skill */}
                        <div>
                            <h3>skills</h3>
                            <div className='p-3 d-flex justify-content-between align-items-center'>
                                <input ref={skillRef} type="text" placeholder='ADD SKILL' className='form-control' />
                                <Button onClick={() => addskill(skillRef.current.value)} variant="text"> add</Button>
                            </div>
                            <h5>ADDED skill : </h5>
                            {/* display all existing skill */}
                            <div className='p-3 d-flex justify-content-between flex-wrap'>
                                {
                                    resumeDate?.skill?.map(skill => (
                                        <Button onClick={()  => removeSkill(skill)} key={skill} variant='contained' className='my-1'> {skill} <FaXmark className='ms-1' /></Button>
                                    ))
                                }
                            </div>
                        </div>
                        {/* summary */}
                        <div>
                            <h3>summary</h3>
                            <div className='p-3 row'>
                                <TextField value={resumeDate?.summary} onChange={e => setResumeDate({ ...resumeDate, summary: e.target.value })} id="standard-basic-degrre" label="summary" multiline variant="standard" />
                            </div>
                        </div>
                        {/* upadte */}
                        <button onClick={handleEditResume} className='btn btn-primary'> update</button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default Edit