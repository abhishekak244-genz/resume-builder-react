import { Divider,Button } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div className=' w-100'>
      <h2>fullName</h2>
      <p className='fs-6'>phone : 908867423</p>
      <p className='fs-6'>email : email</p>
      <p className='fs-6'>linked in : <a href="">url</a></p>
      <p className='fs-6'>GITHUB: <a href="">url</a></p>
      <p className='fs-6'>LOCATion : location </p>
      <Divider className='bg-dark my-3'/>
        <h4 className='mt-3'> professinol summary</h4>
        <p>summary</p>
     
         <Divider className='bg-dark'/>
        <h4 className='mt-3'> TEACHICAL SKILL</h4>
       <Button variant="text">skill</Button>
         <Divider className='bg-dark my-3'/>
        <h4 className='mt-3'> education </h4>
        <p className='fs-6'>bachelor degree</p>
        <p className='fs-6'>university collage</p>
        <p className='fs-6'>your of graduction</p>

     
      
      </div>
  )
}

export default Preview