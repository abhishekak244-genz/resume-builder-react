import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import { TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { FaXmark } from "react-icons/fa6";

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


function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                <TextField id="standard-basic-name" label="full-name" variant="standard" />
                                <TextField id="standard-basic-loc" label="loaction" variant="standard" /> <FormControl variant="standard" >
                                    <InputLabel id="demo-simple-select-standard-label">Choose job title</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"

                                        label="Age"
                                    >

                                        <MenuItem value={10}>Ten</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        {/* Contact details */}
                        <div >
                            <h2>Contact details</h2>
                            <div className='p-3 row'>
                                <TextField id="standard-basic-name" label="email" variant="standard" />
                                <TextField id="standard-basic-loc" label="contact number" variant="standard" />
                                <TextField id="standard-basic-loc" label="linnked link" variant="standard" />
                                <TextField id="standard-basic-loc" label="git hub link " variant="standard" />
                            </div>
                        </div>
                        {/* Educational */}
                        <div >
                            <h2>Educational details</h2>
                            <div className='p-3 row'>
                                <TextField id="standard-basic-name" label="bachelor degree" variant="standard" />
                                <TextField id="standard-basic-loc" label="univercity/ collage name" variant="standard" />
                                <TextField id="standard-basic-loc" label="your of graducation" variant="standard" />
                            </div>
                        </div>
                        {/* skill */}
                        <div>
                            <h3>skills</h3>
                            <div className='p-3 d-flex justify-content-between align-items-center'>
                                <input type="text" placeholder='ADD SKILL' className='form-control' />
                                <Button variant="text"> add</Button>
                                 </div>
                                <h5>ADDED skill : </h5>
                                {/* display all existing skill */}
                                <div className='p-3 d-flex justify-content-between flex-wrap'>
                                    <Button variant='contained' className='my-1'> skill <FaXmark className='ms-1'/></Button>
                            </div>
                        </div>
                        {/* summary */}
                        <div>
                            <h3>summary</h3>
                           <div className='p-3 row'>
                             <TextField id="standard-basic-degrre" label="summary" multiline variant="standard" />
                           </div>
                        </div>
                        {/* upadte */}
                        <button className='btn btn-primary'> update</button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default Edit