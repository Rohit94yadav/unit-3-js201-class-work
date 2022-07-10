import { ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, DELETE_TODOS_FAILURE, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, TOGGLE_TODOS_FAILURE, TOGGLE_TODOS_REQUEST, TOGGLE_TODOS_SUCCESS } from "./actionType"
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://json-kartik.herokuapp.com/'
})

const getTodoRequest = ()=>{
    return {
        type: GET_TODOS_REQUEST
    }
}

const getTodoSucess = (payload)=>{
    return {
        type: GET_TODOS_SUCCESS,
        payload
    }
}

const getTodoFailure = (err)=>{
    return {
        type: GET_TODOS_FAILURE,
        payload: err
    }
}

const addTodoRequest = ()=>{
    return {
        type: ADD_TODOS_REQUEST
    }
}

const addTodoSucess = ()=>{
    return {
        type: ADD_TODOS_SUCCESS
    }
}

const addTodoFailure = (err)=>{
    return {
        type: ADD_TODOS_FAILURE,
        payload: err
    }
}

const toggleTodoRequest = ()=>{
    return {
        type: TOGGLE_TODOS_REQUEST
    }
}

const toggleTodoSucess = (payload)=>{
    return {
        type: TOGGLE_TODOS_SUCCESS,
        payload
    }
}

const toggleTodoFailure = (err)=>{
    return {
        type: TOGGLE_TODOS_FAILURE,
        payload: err
    }
}

const deleteTodoRequest = ()=>{
    return {
        type: DELETE_TODOS_REQUEST
    }
}

const deleteTodoSucess = ()=>{
    return {
        type: DELETE_TODOS_SUCCESS
    }
}

const deleteTodoFailure = (err)=>{
    return {
        type: DELETE_TODOS_FAILURE,
        payload: err
    }
}

export const getTodos = ()=>dispatch=>{
    dispatch(getTodoRequest());

    const config = {
        url: '/todos',
        method: 'get'
    }
    axios(config)
    .then(res=>{
        dispatch(getTodoSucess(res.data));
    })
    .catch(err=>{
        dispatch(getTodoFailure(err));
    })
}

export const addTodos = (payload)=>dispatch=>{
    dispatch(addTodoRequest());

    const config = {
        url: '/todos',
        method: 'post',
        data: payload
    }
    axios(config)
    .then(res=>{
        dispatch(addTodoSucess(res.data));
        getTodos();
    })
    .catch(err=>{
        dispatch(addTodoFailure(err));
    })
}

export const toggleTodo = ({id, status})=>dispatch=>{
    dispatch(toggleTodoRequest());

    const config = {
        url: `/todos/${id}`,
        method: 'patch',
        data: {
            status: !status
        }
    }
    axios(config)
    .then(res=>{
        dispatch(toggleTodoSucess(res.data));
        getTodos();
    })
    .catch(err=>{
        dispatch(toggleTodoFailure(err))
    })
}