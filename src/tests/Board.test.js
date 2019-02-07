import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import Board from "../Components/Board";
import Square from "../Components/Board";
Enzyme.configure({ adapter: new Adapter() });

describe("<Board />", () => {
  it("renders without throwing errors", () => {
    shallow(<Board />);
  });
  it("renders the <Square /> component", () => {
    const wrapper = mount(<Board />);
    expect(wrapper.find(Square)).toHaveLength(1);
  });
  it("renders the correct intial values in state", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.state().grid.length).toBe(50);
    expect(wrapper.state().generations).toBe(0);
    expect(wrapper.state().playButton).toBe(false);
    expect(wrapper.state().speed).toBe(500);
  });
  it("renders a grid of 50x 50", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find("Square")).toHaveLength(2500);
  });
});
