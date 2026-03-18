import React, { useRef, useEffect, useState } from 'react'
import { CiSaveDown1 } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom';
import { IoIosRefresh } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import Preview from '../components/Preview';
import Edit from '../components/Edit';
import { getResumeAPI,downloadResumeApi } from '../services/allResumeApiService';
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'
function ViewResume() {
  const {id} = useParams()
  const [resumeDate, setResumeDate] = useState({})
 const previewRef = useRef()
  console.log(resumeDate);
  

  useEffect(()=>{getResumeDetails()},[])
  const getResumeDetails = async()=>{
    if(id)
    {
      const result = await getResumeAPI(id)
      setResumeDate(result.data)
    }
  }

  const downloadResume = async () =>{
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    
    canvas.toBlob(Blob=>{
      const shortUrl = URL.createObjectURL(Blob)
     generatePDF(shortUrl)
    })
     
  }

  const generatePDF = async (resumeImg) =>{
    const today = new Date()
    const timeStamp = `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`
    const pdf = new jspdf()
    const imgWidth = pdf.internal.pageSize.getWidth() 
    const imgHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage (resumeImg,"PNG",0,0,imgWidth,imgHeight)
    const downloadDetails = {
      timeStamp,resumeId : id , resumeImg
    } 
    const result = await downloadResumeApi (downloadDetails)
    console.log(result);
    if(result.status == 201){
      pdf.save(`${resumeDate?.fullName}- resume-pdf`)
    }
    
  }

  
  return (
    <div className=' container'>
      <div className='row my-2'>
        <div className="col-lg-2"></div>
        <div className="col-lg-8 ">
          {/* icon set */}
          <div className='d-flex justify-content-center align-items-center'>
            {/* download */}
          <button onClick={downloadResume} className='btn text-primary fs-2 me-2'> <CiSaveDown1/></button>
            {/* edit */}
            <Edit resumeDate={resumeDate} setResumeDate ={setResumeDate}/>
            {/* histroy */}
            <Link to={'/downloads'} className='btn text-danger fs-2 me-2'><IoIosRefresh/></Link>
            {/* back */}
             <Link to={'/form'} className='btn text-success fs-2 me-2'><FaBackward/></Link>

          </div>
          <div ref={previewRef} className='p-5 m-5'> < Preview resumeDate={resumeDate}/> </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default ViewResume