import { shallow } from "enzyme";
import App from "./App";

test("Renders without error", () => {
    const wrapper = shallow(<App />);
    // Log the result with debug()
    // console.log(wrapper.debug());
    expect(wrapper.exists()).toBe(true);
});

test("Renders without error", () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find(".App");
    expect(appComponent.exists()).toBe(true);
});
