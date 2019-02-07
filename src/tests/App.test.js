import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import Game from "../Components/Game";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without throwing errors", () => {
    shallow(<App />);
  });
  it("renders the <Game /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Game)).toHaveLength(1);
  });
});
