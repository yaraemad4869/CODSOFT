import * as ActionTypes from "./ActionTypes";
const initialState = {
    todos: [],
    loading: true,
    error: ""
};
export const fetchTodosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.UPDATE_COMPLETED_TODOS:
            console.log(state)
            // if () {
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (payload.todoId == todo.id) {
                        return { ...todo, completed: !payload.value }
                    }
                    return { ...todo }
                }),
                error: null
            }
        // }
        case ActionTypes.UPDATE_TODOS:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (payload.todoId == todo.id) {
                        return { ...todo, title: payload.value }
                    }
                    return { ...todo }
                }),
                error: null
            }
        case ActionTypes.FETCH_DATA:
            return {
                ...state,
                loading: true,
                error: null
            };

        case ActionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: payload,
                error: null
            };
        case ActionTypes.FETCH_DATA_FAIURE:
            return {
                ...state,
                loading: false,
                todos: [],
                error: payload
            };
        default:
            return state;
    };
};
