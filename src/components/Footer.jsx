import React from 'react'
import { ImMail, ImPhone ,ImWhatsapp, ImFacebook2 ,} from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { purple } from '@mui/material/colors';

function Footer() {
  return (
    <div className=' text-white text-center' style={{backgroundColor:"purple"}} >
      <h2 className='fw-bold mb-4'>contact</h2>
      <p className='fs-5'>
        <ImMail className='me-2' />
        resumebulider@gamil.com
      </p>
      <p className='fs-5'>
        <ImPhone className='me-2' />9087654321
      </p>
      <h4 className='my-4'> connect with me </h4>
      <div className='fs-3 mt-5  d-flex justify-content-center gap-3'>
        <ImWhatsapp />
        <ImFacebook2 />
        <FaInstagram />
      </div>
      <p className='mt-4'> 
        Designed & Built with ❤️ using React
      </p>

    </div>
  )
}

export default Footer