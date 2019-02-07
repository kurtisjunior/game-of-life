import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import Board from "../Components/Board";
import Game from "../Components/Board";
Enzyme.configure({ adapter: new Adapter() });

describe("<Game />", () => {
  it("renders without throwing errors", () => {
    shallow(<Game />);
  });
  it("renders the <Square /> component", () => {
    const wrapper = mount(<Game />);
    expect(wrapper.find(Board)).toHaveLength(1);
  });
});
