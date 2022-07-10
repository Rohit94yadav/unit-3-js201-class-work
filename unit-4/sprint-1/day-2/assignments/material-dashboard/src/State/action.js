import { GET_ORDER_DETAILS_FAILURE, GET_ORDER_DETAILS_REQUEST, GET_ORDER_DETAILS_SUCCESS } from "./actionType";
import Axios from 'axios';

const axios = Axios.create({
    baseURL: "https://json-kartik.herokuapp.com/"
})

const getOrderDetailsRequest = ()=>{
    return {
        type: GET_ORDER_DETAILS_REQUEST
    }
}

const getOrderDetailsSuccess = (payload)=>{
    return {
        type: GET_ORDER_DETAILS_SUCCESS,
        payload
    }
}

const getOrderDetailsFailyre = ()=>{
    return {
        type: GET_ORDER_DETAILS_FAILURE
    }
}

export const getOrderDetails = ()=>dispatch=>{

    dispatch(getOrderDetailsRequest());
    
    const config = {
        method: "get",
        url: "/orders"
    }
    axios(config)
    .then(res=>{
        dispatch(getOrderDetailsSuccess(res.data));
    })
    .catch(err=>{
        dispatch(getOrderDetailsFailyre());
    })
}