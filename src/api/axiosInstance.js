import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"https://resume-server-j4g4.onrender.com",
    timeout: 5000
})

// response intercepters
// fullfill
axiosInstance.interceptors.response.use(
    (response) => {
        console.log("response revived!!!");
        return response
    },
    // error
    (error) =>{
        if(error.response){
            const status = error.response.status
            if(status==401){
                console.log("unauthorised access - redirect to login !!");
                
            }else if(status==404){
                console.log("api not found");
                
            }else if (status==500){
                console.log("server error!!!");
                
            }else if(error.request){
                console.log("no response from server");
                
            } else{
                console.log("error :" + error.message);
                
            }
            return Promise.reject(error)
        }
    }

)

export default axiosInstance