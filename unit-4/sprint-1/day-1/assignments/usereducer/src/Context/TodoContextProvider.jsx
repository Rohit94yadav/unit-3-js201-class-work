import React, { createContext, useReducer } from 'react';
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://json-kartik.herokuapp.com/'
})

const initSate = {
    data: [],
    isLoading: false,
    isError: false
}

const todoReducer = (state=initSate, action)=>{
    switch(action?.type){
        case "GET_TODO_REQUEST": {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case "GET_TODO_SUCCESS": {
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            }
        }
        case "GET_TODO_FAILURE": {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
        case "ADD_TODO_REQUEST": {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case "ADD_TODO_SUCCESS": {
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        }
        case "ADD_TODO_FAILURE": {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }
        default: {
            return state;
        }
    }
}

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(todoReducer, initSate)

    const getTodoData = ()=>{
        dispatch({type: "GET_TODO_REQUEST"});

        const config = {
            method: "get",
            url: "/todos"
        };
        axios(config)
        .then(res=>{
            dispatch({type: "GET_TODO_SUCCESS", payload: res.data});
        })
        .catch(err=>{
            dispatch({type:"GET_TODO_FAILURE", payload: err});
        })
    }

    const addTodoData = (payload)=>{
        dispatch({type: "ADD_TODO_REQUEST"});

        const config = {
            method: "post",
            url: "/todos",
            data: payload
        };
        axios(config)
        .then(res=>{
            dispatch({type: "ADD_TODO_SUCCESS", payload: res.data});
            dispatch(getTodoData());
        })
        .catch(err=>{
            dispatch({type:"ADD_TODO_FAILURE", payload: err});
        })
    }

    const value = {
        state,
        dispatch,
        getTodoData,
        addTodoData
    }
    
    return (
        <TodoContext.Provider value={value}>
            { children }
        </TodoContext.Provider>
    )
}
