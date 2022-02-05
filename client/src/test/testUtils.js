import { createStore } from "redux";
import rootReducer from "../redux/reducers/index";

export const storeFactory = (initialState) => {
    createStore(rootReducer, initialState);
};
