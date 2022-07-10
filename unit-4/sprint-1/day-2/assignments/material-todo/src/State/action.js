import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, 
         GET_SINGLE_TODO_REQUEST, GET_SINGLE_TODO_SUCCESS, GET_SINGLE_TODO_FAILURE,
         ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, ADD_TODOS_FAILURE,
         DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,
         TOGGLE_STATUS_REQUEST, TOGGLE_STATUS_SUCCESS, TOGGLE_STATUS_FAILURE, EDIT_TITLE_REQUEST, EDIT_TITLE_SUCCESS, EDIT_TITLE_FAILURE } from "./actionType";
import Axios from 'axios';

const axios = Axios.create({
    baseURL: "https://json-kartik.herokuapp.com/"
})

const getTodosRequest = ()=>{
    return {
        type: GET_TODOS_REQUEST
    };
};

const getTodosSuccess = (payload)=>{
    return {
        type: GET_TODOS_SUCCESS,
        payload
    };
};

const getTodosFailure = (payload)=>{
    return {
        type: GET_TODOS_FAILURE,
        payload
    };
};

const getSingleTodoRequest = ()=>{
    return {
        type: GET_SINGLE_TODO_REQUEST
    };
};

const getSingleTodoSuccess = (payload)=>{
    return {
        type: GET_SINGLE_TODO_SUCCESS,
        payload
    };
};

const getSingleTodoFailure = (payload)=>{
    return {
        type: GET_SINGLE_TODO_FAILURE,
        payload
    };
};

const addTodosRequest = ()=>{
    return {
        type: ADD_TODOS_REQUEST
    };
};

const addTodosSuccess = (payload)=>{
    return {
        type: ADD_TODOS_SUCCESS,
        payload
    };
};

const addTodosFailure = (payload)=>{
    return {
        type: ADD_TODOS_FAILURE,
        payload
    };
};

const deleteTodoRequest = ()=>{
    return {
        type: DELETE_TODO_REQUEST
    };
};

const deleteTodoSuccess = ()=>{
    return {
        type: DELETE_TODO_SUCCESS
    };
};

const deleteTodoFailure = ()=>{
    return {
        type: DELETE_TODO_FAILURE
    };
};

const toggleTodosRequest = ()=>{
    return {
        type: TOGGLE_STATUS_REQUEST
    };
};

const toggleTodosSuccess = ()=>{
    return {
        type: TOGGLE_STATUS_SUCCESS
    };
};

const toggleTodosFailure = (payload)=>{
    return {
        type: TOGGLE_STATUS_FAILURE,
        payload
    };
};

const editTitleRequest = ()=>{
    return {
        type: EDIT_TITLE_REQUEST
    };
};

const editTitleSuccess = ()=>{
    return {
        type: EDIT_TITLE_SUCCESS
    };
};

const editTitleFailure = ()=>{
    return {
        type: EDIT_TITLE_FAILURE
    };
};

export const getTodos = (page)=> dispatch => {
    dispatch(getTodosRequest());

    const config = {
        method: 'get',
        url: '/todos',
        params: {
            _page: page,
            _limit: 5
        }
    }
    axios(config)
    .then(res=>{
        dispatch(getTodosSuccess(res.data));
    })
    .catch(err=>{
        dispatch(getTodosFailure());
    })
};

export const getSingleTodo = (id)=> dispatch => {
    dispatch(getSingleTodoRequest());

    const config = {
        method: 'get',
        url: `/todos/${id}`
    }
    axios(config)
    .then(res=>{
        dispatch(getSingleTodoSuccess(res.data));
    })
    .catch(err=>{
        dispatch(getSingleTodoFailure());
    })
};

export const addTodos = (payload)=> dispatch => {
    dispatch(addTodosRequest());

    const config = {
        method: 'post',
        url: '/todos',
        data: payload
    }
    axios(config)
    .then(res=>{
        dispatch(addTodosSuccess(res.data));
        dispatch(getTodos());
    })
    .catch(err=>{
        dispatch(addTodosFailure());
    })
};

export const deleteTodos = (id)=> dispatch => {
    dispatch(deleteTodoRequest());

    const config = {
        method: 'delete',
        url: `/todos/${id}`
    }
    axios(config)
    .then(res=>{
        dispatch(deleteTodoSuccess(res.data));
        dispatch(getTodos());
    })
    .catch(err=>{
        dispatch(deleteTodoFailure());
    })
};

export const toggleTodos = (payload)=> dispatch => {

    const { id, status } = payload;
    
    dispatch(toggleTodosRequest());

    const config = {
        method: 'patch',
        url: `/todos/${id}`,
        data :{
            status: !status
        }
    }
    axios(config)
    .then(res=>{
        dispatch(toggleTodosSuccess(res.data));
        dispatch(getSingleTodo(id));
    })
    .catch(err=>{
        dispatch(toggleTodosFailure());
    })
};

export const editTitle = (payload)=> dispatch => {

    const { id, editInp } = payload;
    
    dispatch(editTitleRequest());

    const config = {
        method: 'patch',
        url: `/todos/${id}`,
        data :{
            task: editInp
        }
    }
    axios(config)
    .then(res=>{
        dispatch(editTitleSuccess(res.data));
        dispatch(getSingleTodo(id));
    })
    .catch(err=>{
        dispatch(editTitleFailure());
    })
};