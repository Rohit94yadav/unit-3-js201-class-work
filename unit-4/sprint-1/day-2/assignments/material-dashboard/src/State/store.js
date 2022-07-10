import { applyMiddleware, compose, createStore } from "redux";
import { Reducer } from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(
    Reducer,
    compose (
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)