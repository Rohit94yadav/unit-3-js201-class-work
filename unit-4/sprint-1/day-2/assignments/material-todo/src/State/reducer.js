import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS,
         GET_SINGLE_TODO_REQUEST, GET_SINGLE_TODO_SUCCESS, GET_SINGLE_TODO_FAILURE,
         ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, ADD_TODOS_FAILURE,DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,
         TOGGLE_STATUS_REQUEST, TOGGLE_STATUS_SUCCESS, TOGGLE_STATUS_FAILURE, EDIT_TITLE_REQUEST, EDIT_TITLE_SUCCESS, EDIT_TITLE_FAILURE } from "./actionType";

const initState = {
    data: [],
    isLoading: false,
    isError: false,
    singleTodo: {}
};

export const Reducer = (state=initState, action)=>{
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
                data: action.payload
            }
        };
        case GET_TODOS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        };
        case GET_SINGLE_TODO_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        };
        case GET_SINGLE_TODO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                singleTodo: action.payload
            }
        };
        case GET_SINGLE_TODO_FAILURE: {
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
        case EDIT_TITLE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        };
        case EDIT_TITLE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        };
        case EDIT_TITLE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        };
        default: 
            return state;
    };
};