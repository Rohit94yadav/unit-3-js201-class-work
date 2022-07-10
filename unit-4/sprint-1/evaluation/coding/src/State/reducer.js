import { ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, DELETE_TODOS_FAILURE, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, TOGGLE_TODOS_FAILURE, TOGGLE_TODOS_REQUEST, TOGGLE_TODOS_SUCCESS } from "./actionType"

const initState = {
    isLoading: false,
    isError: false,
    data: []
}

export const reducer = (state=initState, action) => {
    const { payload } = action;
    switch(action?.type){
        case GET_TODOS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        };
        case GET_TODOS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: payload
            }
        };
        case GET_TODOS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        };
        case ADD_TODOS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        };
        case ADD_TODOS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        };
        case ADD_TODOS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        };
        case TOGGLE_TODOS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        };
        case TOGGLE_TODOS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        };
        case TOGGLE_TODOS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        };
        default: {
            return state;
        }
    }
}
