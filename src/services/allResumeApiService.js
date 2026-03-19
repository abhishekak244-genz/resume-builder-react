import apiService from "../api/apiService"

// post resume api called by userinput . when finish btn clicked 
export const addResumeAPI = async(resumeData) =>{
    return await apiService("POST","/allResumes",resumeData)
}
// get resume api called by viewResume . when page loaded 
export const getResumeAPI = async(id) =>{
    return await apiService("GET",`/allResumes/${id}`,{})
}

//  
export const downloadResumeApi = async(resumeData) =>{
    return await apiService("POST","/downloads",resumeData)
}

export const getDownloadResumeAPI = async() =>{
    return await apiService("GET","/downloads",{})
}
// delete reume downlad 
export const deleteDownloadResumeAPI = async(resumeId) =>{
    return await apiService("DELETE",`/downloads/${resumeId}`,{})
}

//  edit resume api c
export const editResumeApi = async(id,updateDetils) =>{
    return await apiService("PUT",`/allResumes/${id}`,updateDetils)
}