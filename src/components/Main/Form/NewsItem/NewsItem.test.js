import React from "react";
import { shallow } from "enzyme";
import NewsItem from "./NewsItem";

describe("NewsItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewsItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
