import React , {useState} from 'react'
import UserInput from '../components/UserInput'
import Preview from '../components/Preview'


function UserFrom() {
   const [resumeDate, setResumeDate] = useState({
    fullName :"",
    loaction : "",
    job : "",
    email : "",
    phone : "",
    linkedIn : "" ,
    gitHub : "",
    degree : "",
    university : "",
    passOut : "",
    skill : [],
    summary : ""
    })
  return (
    <div className='container my-5'>
       <div className="row">
        <div className="col-lg-6">
          <UserInput resumeDate={resumeDate} setResumeDate={setResumeDate}/>
        </div>
        <div className="col-lg-6">
          { resumeDate.fullName &&  <Preview resumeDate={resumeDate}  />}
        </div>
       </div>
      </div>
  )
}

export default UserFrom