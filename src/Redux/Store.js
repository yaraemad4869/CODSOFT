import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxLogger from "redux-logger";
import { thunk } from "redux-thunk";
import { SettingsReducer } from "./Settings/SettingsReducer";
import { DataReducer } from "./Data/DataReducer";


const reducer = combineReducers({
    settings: SettingsReducer,
    data: DataReducer
})
export const store = createStore(reducer, applyMiddleware(/*reduxLogger,*/ thunk))
const unsubscribe = store.subscribe(() => { })

unsubscribe()
export default reducer