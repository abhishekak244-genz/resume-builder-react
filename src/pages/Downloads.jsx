import React from 'react'
import { Link } from 'react-router-dom'
import { IoPlayBack } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function Downloads() {
  return (
    <div className='container'>
      <div className='d-flex my-5 justify-content-between align-items-center  '>
        <h1 > download resume histroy</h1>
        <Link to={'/form'}>  <IoPlayBack/> back </Link>
      </div>
       <div className='row mb-4'>
        <div className='col-lg-4'>
          <div style={{height:"400px"}} className='shadow p-3 rounded'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5> Rewiew at time</h5>
              <button className='btn fs-5 text-center '><MdDelete /></button>
            </div>
            <div className='mt-3 text-center'>
              <img height={'300px'}  width={'200px'} src="https://img.lovepik.com/desgin_photo/45006/6736_list.jpg" alt="" />
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Downloads