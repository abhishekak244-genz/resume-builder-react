import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview({resumeDate}) {
  return (
    <div className=' w-100'>
      <h2>{resumeDate?.fullName}</h2>
      <p className='fs-6'>phone : {resumeDate?.phone}</p>
      <p className='fs-6'>email : {resumeDate?.email}</p>
      <p className='fs-6'>linked in : <a href="">{resumeDate?.linkedIn}</a></p>
      <p className='fs-6'>GITHUB: <a href="">{resumeDate?.gitHub}</a></p>
      <p className='fs-6'>LOCATion : {resumeDate?.loaction} </p>
      <Divider className='bg-dark my-3'/>
        <h4 className='mt-3'> professinol summary</h4>
        <p>{resumeDate?.summary}</p>
     
         <Divider className='bg-dark'/>
        <h4 className='mt-3'> TEACHICAL SKILL</h4>
         {
          resumeDate?.skill?.map((item,index) => (<Button className='text-dark border-dark m-1' variant="outlined">{item}</Button>

          ))
           
         }
      
         <Divider className='bg-dark my-3'/>
        <h4  className='mt-3'> education  </h4>
        <p className='fs-6'>bachelor degree : {resumeDate?.degree}</p>
        <p className='fs-6'>university collage : {resumeDate?.university}</p>
        <p className='fs-6'>your of graduation: {resumeDate?.passOut}</p>

     
      
      </div>
  )
}

export default Preview