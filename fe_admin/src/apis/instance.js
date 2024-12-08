import axios from "axios";

const baseUrl= axios.create({
    baseURL:"http://localhost:8080/api/v1/category",
    headers:{
        "Content-Type":"application/json",
    },
})

axios.interceptors.request.use(
    function(request){
        const token="asd";

        const newHeaders={
            ...request.headers,
            Authorization:`Bearer ${token}`,
        }
        request={
            ...request,
            headers:newHeaders,
        }
        return request;
    },
    function(error){
        return Promise.reject(error);
    }


)

export default baseUrl;


