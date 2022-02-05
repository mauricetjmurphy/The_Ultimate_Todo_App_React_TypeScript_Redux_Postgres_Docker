import { mount } from "enzyme";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { storeFactory } from "../../test/testUtils";
import thunkMiddleWare from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../../redux/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoListItem } from "./TodoListItem";
import { removeTodo } from "../../redux/actions/actions";

const composeEnhancers = composeWithDevTools({});

test("Remove todo", () => {
    render(
        <Provider
            store={createStore(
                rootReducer,
                composeEnhancers(applyMiddleware(...[thunkMiddleWare]))
            )}
        >
            <TodoListItem
                todo={{
                    id: "Szv9kFOVL8K2knxIg_Il5",
                    description: "Redux success!",
                    is_complete: 0,
                }}
            />
        </Provider>
    );

    const removeButton = screen.getByTestId("delete-button");
    fireEvent.click(removeButton);
});
