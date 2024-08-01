import axios from "axios";
const axiosInstance = axios.create({
    // baseURL:"http://127.0.0.1:5001/app-30020/us-central1/api",
    
    // deployed version of amazon server on render.com
    baseURL:"https://amazon-api-deploy-9po4.onrender.com/"
});

export {axiosInstance};