import React from "react";
import { shallow } from "enzyme";
import Devivery from "./Devivery";

describe("Devivery", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Devivery />);
    expect(wrapper).toMatchSnapshot();
  });
});
