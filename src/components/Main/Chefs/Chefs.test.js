import React from "react";
import { shallow } from "enzyme";
import Chefs from "./Chefs";

describe("Chefs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Chefs />);
    expect(wrapper).toMatchSnapshot();
  });
});
