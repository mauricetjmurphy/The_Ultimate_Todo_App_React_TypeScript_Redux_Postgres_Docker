import { mount } from "enzyme";
import { TodoList } from "./TodoList";
import { Provider, useDispatch } from "react-redux";
import store from "../../redux/store.js";

const setup: any = (props: any) =>
    mount(
        <Provider store={store}>
            <TodoList />
        </Provider>
    );

test("Renders the TodoList component without errors", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
});
