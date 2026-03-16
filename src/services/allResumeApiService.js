import apiService from "../api/apiservice";
// post resume api called by userinput . when finish btn clicked 
export const addResumeAPI = async(resumeData) =>{
    return await apiService("POST","/allResumes",resumeData)
}
// get resume api called by viewResume . when page loaded 
export const getResumeAPI = async(id) =>{
    return await apiService("GET",`/allResumes/${id}`,{})
}
