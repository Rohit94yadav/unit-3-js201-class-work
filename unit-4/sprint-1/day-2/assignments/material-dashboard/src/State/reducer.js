import { GET_ORDER_DETAILS_FAILURE, GET_ORDER_DETAILS_REQUEST, GET_ORDER_DETAILS_SUCCESS } from "./actionType";

const initState = {
    data: [],
    isLoading: false,
    isError: false
}

export const Reducer = (state=initState, action)=>{
    const { payload } = action;
    switch(action?.type){
        case GET_ORDER_DETAILS_REQUEST:{
            return {
                isLoading: true,
                isError: false
            }
        }
        case GET_ORDER_DETAILS_SUCCESS: {
            return {
                isLoading: false,
                isError: false,
                data: payload
            }
        }
        case GET_ORDER_DETAILS_FAILURE: {
            return {
                isLoading: false,
                isError: true
            }
        }
        default: 
            return state;
    }
}