import React, { Component } from "react";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
import Square from "../Components/Square";
Enzyme.configure({ adapter: new Adapter() });

describe("<Board />", () => {
  it("renders without throwing errors", () => {
    shallow(<Square />);
  });
  it("wrapper object defined", () => {
    const wrapper = shallow(<Square />);
    expect(wrapper.find(".sqaure-value")).toBeDefined();
  });
  it("renders a square with value of 1", () => {
    const value = 1;
    const wrapper = shallow(<Square value={value} />);
    expect(wrapper.contains(1)).toBeTruthy();
  });

  it("Simulates click on square", () => {
    const squareClick = sinon.spy();
    const wrapper = shallow(<Square buttonClick={squareClick} />);
    expect(wrapper.find("button").simulate("click"));
    expect(squareClick.calledOnce).toBe(true);
  });
});
