import axios from "axios";
import * as ActionTypes from "./ActionTypes";

export const updateCompletedTodos = (todoId = 1, value = false) => {
    return {
        type: ActionTypes.UPDATE_COMPLETED_TODOS,
        payload: { todoId, value }
    };
};
export const updateTodos = (todoId, value) => {
    return {
        type: ActionTypes.UPDATE_TODOS,
        payload: { todoId, value }
    };
};
export const fetchData = () => {
    return {
        type: ActionTypes.FETCH_DATA
    };
};
export const fetchDataSuccess = (todos) => {
    return {
        type: ActionTypes.FETCH_DATA_SUCCESS,
        payload: todos
    };
};
export const fetchDataFailure = (error) => {
    return {
        type: ActionTypes.FETCH_DATA_FAIURE,
        payload: error
    };
};

export const fetchTodos = () => {
    return function (dispatch) {
        dispatch(fetchData());
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                dispatch(fetchDataSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchDataFailure(error.message));
            });
    };
};
