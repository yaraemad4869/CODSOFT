import { createStore, combineReducers, applyMiddleware } from 'redux';
import { SettingsReducer } from "./Settings/SettingsReducer";
import { fetchTodosReducer } from "./Todos/TodosReducer";
// import { composeWithDevTools } from 'redux-devtools-extension'
import reduxLogger from "redux-logger"
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
    todos: fetchTodosReducer,
    settings: SettingsReducer
});
export const store = createStore(reducer, /*composeWithDevTools(*/applyMiddleware(reduxLogger, thunk))/*)*/
const unsubscribe = store.subscribe(() =>
    console.log("Updated State : ", store.getState()))

unsubscribe();
export default reducer;
