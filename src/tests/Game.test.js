import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import Board from "../Components/Board";
import Square from "../Components/Board";
Enzyme.configure({ adapter: new Adapter() });

describe("<Board />", () => {
  it("renders the <Square /> component", () => {
    const wrapper = mount(<Board />);
    expect(wrapper.find(Square)).toHaveLength(1);
  });
});
