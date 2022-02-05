import { combineReducers } from "redux";
import { getTodosReducer } from "../reducers/reducers";
const rootReducer = combineReducers({
    allTodos: getTodosReducer,
});
export default rootReducer;
