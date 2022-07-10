import { reducer } from "./reducer";
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(
    reducer,
    compose (
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
) 