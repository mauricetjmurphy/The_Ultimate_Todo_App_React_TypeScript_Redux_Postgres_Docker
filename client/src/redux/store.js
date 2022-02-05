import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleWare from "redux-thunk";
import rootReducer from "./reducers/index";

const composeEnhancers = composeWithDevTools({});
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...[thunkMiddleWare]))
);

export default store;
