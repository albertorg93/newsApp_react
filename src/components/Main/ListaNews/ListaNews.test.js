import React from "react";
import { shallow } from "enzyme";
import ListaNews from "./ListaNews";

describe("ListaNews", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListaNews />);
    expect(wrapper).toMatchSnapshot();
  });
});
