import React from "react";
import { shallow } from "enzyme";
import ListsNews from "./ListsNews";

describe("ListsNews", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListsNews />);
    expect(wrapper).toMatchSnapshot();
  });
});
