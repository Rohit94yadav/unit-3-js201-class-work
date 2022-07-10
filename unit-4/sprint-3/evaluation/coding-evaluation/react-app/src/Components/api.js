import Axios from 'axios';

const axios = Axios.create({
    'baseURL': 'http://localhost:8000/'
})

export const getData = ()=>{
    const config = {
        url: "/api/addresses",
        method: "GET"
    }
    return axios(config);
}

export const postData = (payload)=>{
    const config = {
        url: "/api/addresses",
        method: "POST",
        data: payload
    }
    return axios(config);
}

export const deleteData = (id)=>{
    const config = {
        url: `/api/addresses/:${id}`,
        method: "DELETE"
    }
    return axios(config);
}